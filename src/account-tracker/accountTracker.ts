import connection from "../utils/connection";
import cliProgress from "cli-progress";
import { BN, web3 } from "@project-serum/anchor";
import { accountTracker } from "../utils/prismaClient";
import { promiseAllInBatches } from "./utils";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { sleep } from "@project-serum/common";
const progressBar = new cliProgress.SingleBar(
  {},
  cliProgress.Presets.shades_classic
);
interface DatabaseKey {
  id: string;
  description: string;
  boolKey?: boolean;
  intKey?: number;
}
export class TransactionStreamer {
  static TX_SYNC_INTERVAL = 30000;
  static PREF_SYNC_INTERVAL = 130000;

  private client: any;
  private mintsToTrack: any[] = [];
  private ownersToTrack: any[] = [];
  constructor() {
    this.client = accountTracker;
  }

  public async start() {
    try {
      await this.initializeApp();
    } catch (err) {
      console.log(`failed to initialize program ${err}`);
      throw err;
    }
    console.log(
      `loop: syncIncomingTransactions->SendToPubSub->check every ${
        TransactionStreamer.TX_SYNC_INTERVAL / 1000
      }s`
    );
    this.startProcess();
  }

  private async startProcess() {
    try {
      console.log("syncSignatures: fetching new transactions ");
      await this.getAccountBalances();
    } catch (err) {
      console.log(err);
    } finally {
      setTimeout(() => {
        this.startProcess();
      }, TransactionStreamer.TX_SYNC_INTERVAL);
      setTimeout(() => {
        this.initializeApp();
      }, TransactionStreamer.PREF_SYNC_INTERVAL);
    }
  }

  /**
   * Initialize the program
   */
  public async initializeApp() {
    console.log(`initializeApp - governanceProgram`);
    try {
      console.log("get token accounts to be tracked from DB");
      this.mintsToTrack = await accountTracker.tokenMints.findMany({
        select: { mint_name: true, mint_address: true },
      });

      console.log("get owners to be tracked from DB");
      this.ownersToTrack = await accountTracker.owners.findMany({
        select: { owner: true, label: true },
      });
    } catch (err) {
      console.log("errored out");
    }
  }

  async getAccountBalances() {
    // const tokenAccounts: Promise<any[]>[] = [];
    // Get token accounts for owner
    for await (const owner of this.ownersToTrack) {
      // tokenAccountsOwnerTasks.push(() =>
      const tasks: (() => Promise<any>)[] = [];
      console.log(owner, "owner");
      const tokenAccounts = await this.getTokenAccountsForOwner(owner.owner);
      const commitToDB = [];

      for await (const all_token_accounts of tokenAccounts) {
        let token_balance = 0;
        // console.log("account of", all_token_accounts);
        for await (const account of all_token_accounts.tokenAccounts.value) {
          const balance = await this.getTokenAccountBalance(account.pubkey);

          token_balance += Number(balance.value.uiAmount);
          await sleep(400);
        }
        commitToDB.push({
          label: owner.label,
          mint: all_token_accounts.mint.mint_name,
          owner_address: owner.owner,
          balance: token_balance,
        });
      }

      const accountInfo = await connection.getAccountInfo(
        new PublicKey(owner.owner)
      );
      await sleep(400);

      if (accountInfo && accountInfo.lamports) {
        const sol_balance = new BN(accountInfo?.lamports)
          .div(new BN(LAMPORTS_PER_SOL))
          .toNumber();
        commitToDB.push({
          label: owner.label,
          mint: "SOL",
          owner_address: owner.owner,
          balance: sol_balance,
        });
        console.log("balance", sol_balance);
      }
      // console.log(commitToDB, "ALL DB COMMITs");
      await accountTracker.accountBalances.createMany({ data: commitToDB });
    }
  }

  async getTokenAccountsForOwner(owner: string) {
    let tokenAccountsOfOwner: any[] = [];

    for await (const mint of this.mintsToTrack) {
      const tokenFilter: web3.TokenAccountsFilter = {
        mint: new PublicKey(mint.mint_address),
      };
      let tokenAccounts = await connection.getTokenAccountsByOwner(
        new PublicKey(owner),
        tokenFilter
      );
      // console.log("found token accounts", tokenAccounts.value.length);
      tokenAccountsOfOwner.push({ mint: mint, tokenAccounts: tokenAccounts });
    }

    return tokenAccountsOfOwner;
  }

  async getTokenAccountBalance(tokenAccount: web3.PublicKey) {
    const balance = await connection.getTokenAccountBalance(tokenAccount);
    return balance;
  }
}