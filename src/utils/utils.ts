import {
  Idl,
  Program,
  AnchorProvider,
  web3,
  Address,
} from "@project-serum/anchor";
// import { NodeWallet } from "@project-serum/common";
import { Account, ConfirmOptions } from "@solana/web3.js";

import {
  ConfirmedSignatureInfo,
  SignaturesForAddressOptions,
  TransactionResponse,
} from "@solana/web3.js";
import connection from "../utils/connection";
import retry, { Options } from "async-retry";

// export async function getProgramIDL(
//   account: Account,
//   conn: web3.Connection,
//   progName?: string,
//   progId?: string
// ) {
//   const options: ConfirmOptions = {
//     commitment: "confirmed",
//   };

//   const provider = new AnchorProvider(
//     conn,
//     new NodeWallet(account as Account),
//     options
//   );
//   const programIDL = await Program.fetchIdl(progId ?? "", provider);
//   if (!programIDL) throw Error("Could not fetch IDL for program");
//   return new Program(
//     programIDL,
//     progId as string,
//     new AnchorProvider(conn, new NodeWallet(account as Account), options)
//   );
// }

export async function getLatestProgramTx(
  programID: string
): Promise<ConfirmedSignatureInfo | undefined> {
  const options: SignaturesForAddressOptions = { limit: 1 };

  // Get latest transaction on chain
  let latest_sig = await connection.getSignaturesForAddress(
    new web3.PublicKey(programID),
    options
  );

  if (latest_sig !== undefined && latest_sig.length !== 0)
    return latest_sig[0] as ConfirmedSignatureInfo;
}

export async function getTransactionDetails(
  txSig: string
): Promise<TransactionResponse | null> {
  return retry(async () => await connection.getTransaction(txSig), {
    minTimeout: 1000,
  } as Options)
    .then((tx) => {
      if (!tx) throw Error("could not fetch TX details.");
      return tx;
    })
    .catch((err) => {
      throw Error(`could not fetch TX details: ${err} for sig ${txSig} `);
    });
}

export async function getLatestSuccessfulTxOnChain() {
  let latestBlock;
  while (!latestBlock) {
    const latestSlot = await connection.getSlot();
    if (!latestSlot) throw Error("Latest slot could not be fetched");
    try {
      latestBlock = await connection.getBlock(latestSlot);
    } catch {
      continue;
    }
  }
  const latestSigOnChain =
    latestBlock?.transactions[0].transaction.signatures[0];

  if (!latestSigOnChain || latestSigOnChain == undefined)
    throw Error("could not fetch latest tx");

  return latestSigOnChain;
}

// 1. Simplify programs being shown to eventParsers
// 2. send events to postgres in transaction batches, useDebounce
export async function promiseAllInBatches<T>(
  tasks: (() => Promise<T>)[],
  batchSize: number
) {
  let results: T[] = [];
  while (tasks.length > 0) {
    const currentTasks = tasks.splice(0, batchSize);
    results = results.concat(
      await Promise.all(currentTasks.map((task) => task()))
    );
  }
  return results;
}

export async function getSignaturesForProgram(
  programId: String,
  options: web3.SignaturesForAddressOptions
) {
  const signatures = await connection
    .getSignaturesForAddress(new web3.PublicKey(programId), options)
    .catch((err) => console.log("errored out", err));

  if (!signatures || signatures.length == 0) return [];

  console.log(`found ${signatures.length} signatures in ${programId}`);

  return signatures;
}
