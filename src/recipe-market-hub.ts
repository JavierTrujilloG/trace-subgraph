import { BigInt } from "@graphprotocol/graph-ts"
import {
  RecipeMarketHub,
  APOfferCancelled,
  APOfferCreated,
  APOfferFilled,
  FeesClaimed,
  IPOfferCancelled,
  IPOfferCreated,
  IPOfferFilled,
  MarketCreated,
  OwnershipTransferred,
  WeirollWalletClaimedIncentive,
  WeirollWalletExecutedWithdrawal,
  WeirollWalletForfeited
} from "../generated/RecipeMarketHub/RecipeMarketHub"
import { ExampleEntity } from "../generated/schema"

export function handleAPOfferCancelled(event: APOfferCancelled): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from)

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from)

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.offerID = event.params.offerID

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.MIN_FILL_PERCENT(...)
  // - contract.POINTS_FACTORY(...)
  // - contract.WEIROLL_WALLET_IMPLEMENTATION(...)
  // - contract.feeClaimantToTokenToAmount(...)
  // - contract.getAPOfferHash(...)
  // - contract.getIPOfferHash(...)
  // - contract.getMarketHash(...)
  // - contract.marketHashToWeirollMarket(...)
  // - contract.minimumFrontendFee(...)
  // - contract.numAPOffers(...)
  // - contract.numIPOffers(...)
  // - contract.numMarkets(...)
  // - contract.offerHashToIPOffer(...)
  // - contract.offerHashToRemainingQuantity(...)
  // - contract.owner(...)
  // - contract.protocolFee(...)
  // - contract.protocolFeeClaimant(...)
  // - contract.weirollWalletToLockedIncentivesParams(...)
}

export function handleAPOfferCreated(event: APOfferCreated): void {}

export function handleAPOfferFilled(event: APOfferFilled): void {}

export function handleFeesClaimed(event: FeesClaimed): void {}

export function handleIPOfferCancelled(event: IPOfferCancelled): void {}

export function handleIPOfferCreated(event: IPOfferCreated): void {}

export function handleIPOfferFilled(event: IPOfferFilled): void {}

export function handleMarketCreated(event: MarketCreated): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleWeirollWalletClaimedIncentive(
  event: WeirollWalletClaimedIncentive
): void {}

export function handleWeirollWalletExecutedWithdrawal(
  event: WeirollWalletExecutedWithdrawal
): void {}

export function handleWeirollWalletForfeited(
  event: WeirollWalletForfeited
): void {}
