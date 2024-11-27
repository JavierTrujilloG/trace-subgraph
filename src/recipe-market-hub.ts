import { Transaction } from "../generated/schema";
import {
  IPOfferCreated,
  CreateIPOfferCall
} from "../generated/RecipeMarketHub/RecipeMarketHub"

export function handleIPOfferCreated(event: IPOfferCreated): void {}
export function handleCreateIPOffer(call: CreateIPOfferCall): void {
  let transaction = new Transaction(call.transaction.hash.toHex());

  transaction.from = call.from; // Sender address
  transaction.to = call.to; // Recipient address (contract address)
  //transaction.origin = call.origin; // Original sender of the transaction

  // Optional
  transaction.blockNumber = call.block.number;
  transaction.timestamp = call.block.timestamp;

  transaction.save();
}