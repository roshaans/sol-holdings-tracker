import { ConfirmedSignatureInfo } from "@solana/web3.js";

export type Model = {
  id?: number;
  signature: string;
  slot: number;
  block_time: number | null;
  tx_date: Date | null;
  confirmed: boolean;
  event_confirmed: boolean;
  error: boolean;
  transaction_info: string | null;
  program: string;
};

export type ConfirmedSignatureInfoExtended = {
  signatureInfo: ConfirmedSignatureInfo;
  order?: number;
  program: string;
};

export interface TransactionStreamerConfig {
  programIDs: Record<string, string>;
  genesisProgramSig: string;
  genesisProgramSlot: number;
  tx_start?: string;
  client?: any;
}

export interface TxEventParserProcessorConfig {
  programIDs: Record<string, string>;
  tx_start?: string;
  client: any;
  eventParser: any;
}
