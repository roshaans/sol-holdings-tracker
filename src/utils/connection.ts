import { Connection } from "@solana/web3.js";
import * as dotenv from "dotenv";

dotenv.config();

export default new Connection(
  process.env.cluster! === "mainnet"
    ? process.env.RPC_URL!
    : "https://api.devnet.solana.com"
);

console.log(process.env.RPC_URL, "RPC URLLLLL");
