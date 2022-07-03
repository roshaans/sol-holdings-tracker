// import * as dotenv from "dotenv";
import { TransactionStreamer } from "../account-tracker/accountTracker";

// dotenv.config();

const txParserProcess = new TransactionStreamer();

// Setup the program
txParserProcess.start();
