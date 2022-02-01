// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class CancelListing extends ethereum.Event {
  get params(): CancelListing__Params {
    return new CancelListing__Params(this);
  }
}

export class CancelListing__Params {
  _event: CancelListing;

  constructor(event: CancelListing) {
    this._event = event;
  }

  get token(): CancelListingTokenStruct {
    return changetype<CancelListingTokenStruct>(
      this._event.parameters[0].value.toTuple()
    );
  }

  get cancelledAt(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class CancelListingTokenStruct extends ethereum.Tuple {
  get tokenURI(): string {
    return this[0].toString();
  }

  get category(): string {
    return this[1].toString();
  }

  get tokenId(): BigInt {
    return this[2].toBigInt();
  }

  get txFee(): BigInt {
    return this[3].toBigInt();
  }

  get txToken(): Address {
    return this[4].toAddress();
  }

  get owner(): Address {
    return this[5].toAddress();
  }

  get artist(): Address {
    return this[6].toAddress();
  }

  get listed(): boolean {
    return this[7].toBoolean();
  }
}

export class CancelOffer extends ethereum.Event {
  get params(): CancelOffer__Params {
    return new CancelOffer__Params(this);
  }
}

export class CancelOffer__Params {
  _event: CancelOffer;

  constructor(event: CancelOffer) {
    this._event = event;
  }

  get token(): CancelOfferTokenStruct {
    return changetype<CancelOfferTokenStruct>(
      this._event.parameters[0].value.toTuple()
    );
  }

  get cancelledAt(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get from(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class CancelOfferTokenStruct extends ethereum.Tuple {
  get tokenURI(): string {
    return this[0].toString();
  }

  get category(): string {
    return this[1].toString();
  }

  get tokenId(): BigInt {
    return this[2].toBigInt();
  }

  get txFee(): BigInt {
    return this[3].toBigInt();
  }

  get txToken(): Address {
    return this[4].toAddress();
  }

  get owner(): Address {
    return this[5].toAddress();
  }

  get artist(): Address {
    return this[6].toAddress();
  }

  get listed(): boolean {
    return this[7].toBoolean();
  }
}

export class Listing extends ethereum.Event {
  get params(): Listing__Params {
    return new Listing__Params(this);
  }
}

export class Listing__Params {
  _event: Listing;

  constructor(event: Listing) {
    this._event = event;
  }

  get token(): ListingTokenStruct {
    return changetype<ListingTokenStruct>(
      this._event.parameters[0].value.toTuple()
    );
  }

  get listedAt(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ListingTokenStruct extends ethereum.Tuple {
  get tokenURI(): string {
    return this[0].toString();
  }

  get category(): string {
    return this[1].toString();
  }

  get tokenId(): BigInt {
    return this[2].toBigInt();
  }

  get txFee(): BigInt {
    return this[3].toBigInt();
  }

  get txToken(): Address {
    return this[4].toAddress();
  }

  get owner(): Address {
    return this[5].toAddress();
  }

  get artist(): Address {
    return this[6].toAddress();
  }

  get listed(): boolean {
    return this[7].toBoolean();
  }
}

export class Mint extends ethereum.Event {
  get params(): Mint__Params {
    return new Mint__Params(this);
  }
}

export class Mint__Params {
  _event: Mint;

  constructor(event: Mint) {
    this._event = event;
  }

  get token(): MintTokenStruct {
    return changetype<MintTokenStruct>(
      this._event.parameters[0].value.toTuple()
    );
  }

  get createdAt(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class MintTokenStruct extends ethereum.Tuple {
  get tokenURI(): string {
    return this[0].toString();
  }

  get category(): string {
    return this[1].toString();
  }

  get tokenId(): BigInt {
    return this[2].toBigInt();
  }

  get txFee(): BigInt {
    return this[3].toBigInt();
  }

  get txToken(): Address {
    return this[4].toAddress();
  }

  get owner(): Address {
    return this[5].toAddress();
  }

  get artist(): Address {
    return this[6].toAddress();
  }

  get listed(): boolean {
    return this[7].toBoolean();
  }
}

export class Offer extends ethereum.Event {
  get params(): Offer__Params {
    return new Offer__Params(this);
  }
}

export class Offer__Params {
  _event: Offer;

  constructor(event: Offer) {
    this._event = event;
  }

  get token(): OfferTokenStruct {
    return changetype<OfferTokenStruct>(
      this._event.parameters[0].value.toTuple()
    );
  }

  get offeredAt(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get from(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class OfferTokenStruct extends ethereum.Tuple {
  get tokenURI(): string {
    return this[0].toString();
  }

  get category(): string {
    return this[1].toString();
  }

  get tokenId(): BigInt {
    return this[2].toBigInt();
  }

  get txFee(): BigInt {
    return this[3].toBigInt();
  }

  get txToken(): Address {
    return this[4].toAddress();
  }

  get owner(): Address {
    return this[5].toAddress();
  }

  get artist(): Address {
    return this[6].toAddress();
  }

  get listed(): boolean {
    return this[7].toBoolean();
  }
}

export class Sale extends ethereum.Event {
  get params(): Sale__Params {
    return new Sale__Params(this);
  }
}

export class Sale__Params {
  _event: Sale;

  constructor(event: Sale) {
    this._event = event;
  }

  get token(): SaleTokenStruct {
    return changetype<SaleTokenStruct>(
      this._event.parameters[0].value.toTuple()
    );
  }

  get soldAt(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get from(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class SaleTokenStruct extends ethereum.Tuple {
  get tokenURI(): string {
    return this[0].toString();
  }

  get category(): string {
    return this[1].toString();
  }

  get tokenId(): BigInt {
    return this[2].toBigInt();
  }

  get txFee(): BigInt {
    return this[3].toBigInt();
  }

  get txToken(): Address {
    return this[4].toAddress();
  }

  get owner(): Address {
    return this[5].toAddress();
  }

  get artist(): Address {
    return this[6].toAddress();
  }

  get listed(): boolean {
    return this[7].toBoolean();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ArtisanERC721__asksOfResultValue0Struct extends ethereum.Tuple {
  get tokenId(): BigInt {
    return this[0].toBigInt();
  }

  get price(): BigInt {
    return this[1].toBigInt();
  }

  get asker(): Address {
    return this[2].toAddress();
  }
}

export class ArtisanERC721__bidsOfResultValue0Struct extends ethereum.Tuple {
  get tokenId(): BigInt {
    return this[0].toBigInt();
  }

  get price(): BigInt {
    return this[1].toBigInt();
  }

  get bidder(): Address {
    return this[2].toAddress();
  }
}

export class ArtisanERC721 extends ethereum.SmartContract {
  static bind(address: Address): ArtisanERC721 {
    return new ArtisanERC721("ArtisanERC721", address);
  }

  artistOf(tokenId: BigInt): Address {
    let result = super.call("artistOf", "artistOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_artistOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("artistOf", "artistOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  asksOf(tokenId: BigInt): Array<ArtisanERC721__asksOfResultValue0Struct> {
    let result = super.call(
      "asksOf",
      "asksOf(uint256):((uint256,uint256,address)[])",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return result[0].toTupleArray<ArtisanERC721__asksOfResultValue0Struct>();
  }

  try_asksOf(
    tokenId: BigInt
  ): ethereum.CallResult<Array<ArtisanERC721__asksOfResultValue0Struct>> {
    let result = super.tryCall(
      "asksOf",
      "asksOf(uint256):((uint256,uint256,address)[])",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<ArtisanERC721__asksOfResultValue0Struct>()
    );
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  bidsOf(tokenId: BigInt): Array<ArtisanERC721__bidsOfResultValue0Struct> {
    let result = super.call(
      "bidsOf",
      "bidsOf(uint256):((uint256,uint256,address)[])",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return result[0].toTupleArray<ArtisanERC721__bidsOfResultValue0Struct>();
  }

  try_bidsOf(
    tokenId: BigInt
  ): ethereum.CallResult<Array<ArtisanERC721__bidsOfResultValue0Struct>> {
    let result = super.tryCall(
      "bidsOf",
      "bidsOf(uint256):((uint256,uint256,address)[])",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<ArtisanERC721__bidsOfResultValue0Struct>()
    );
  }

  categories(): Array<string> {
    let result = super.call("categories", "categories():(string[8])", []);

    return result[0].toStringArray();
  }

  try_categories(): ethereum.CallResult<Array<string>> {
    let result = super.tryCall("categories", "categories():(string[8])", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toStringArray());
  }

  categoryOf(tokenId: BigInt): string {
    let result = super.call("categoryOf", "categoryOf(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_categoryOf(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("categoryOf", "categoryOf(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class ListCall extends ethereum.Call {
  get inputs(): ListCall__Inputs {
    return new ListCall__Inputs(this);
  }

  get outputs(): ListCall__Outputs {
    return new ListCall__Outputs(this);
  }
}

export class ListCall__Inputs {
  _call: ListCall;

  constructor(call: ListCall) {
    this._call = call;
  }

  get price(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ListCall__Outputs {
  _call: ListCall;

  constructor(call: ListCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get tokenURI_(): string {
    return this._call.inputValues[0].value.toString();
  }

  get category_(): string {
    return this._call.inputValues[1].value.toString();
  }

  get txToken_(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get txFee_(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get price_(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }
}

export class OfferCall extends ethereum.Call {
  get inputs(): OfferCall__Inputs {
    return new OfferCall__Inputs(this);
  }

  get outputs(): OfferCall__Outputs {
    return new OfferCall__Outputs(this);
  }
}

export class OfferCall__Inputs {
  _call: OfferCall;

  constructor(call: OfferCall) {
    this._call = call;
  }

  get price(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class OfferCall__Outputs {
  _call: OfferCall;

  constructor(call: OfferCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SellCall extends ethereum.Call {
  get inputs(): SellCall__Inputs {
    return new SellCall__Inputs(this);
  }

  get outputs(): SellCall__Outputs {
    return new SellCall__Outputs(this);
  }
}

export class SellCall__Inputs {
  _call: SellCall;

  constructor(call: SellCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SellCall__Outputs {
  _call: SellCall;

  constructor(call: SellCall) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class UnlistCall extends ethereum.Call {
  get inputs(): UnlistCall__Inputs {
    return new UnlistCall__Inputs(this);
  }

  get outputs(): UnlistCall__Outputs {
    return new UnlistCall__Outputs(this);
  }
}

export class UnlistCall__Inputs {
  _call: UnlistCall;

  constructor(call: UnlistCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UnlistCall__Outputs {
  _call: UnlistCall;

  constructor(call: UnlistCall) {
    this._call = call;
  }
}

export class UnofferCall extends ethereum.Call {
  get inputs(): UnofferCall__Inputs {
    return new UnofferCall__Inputs(this);
  }

  get outputs(): UnofferCall__Outputs {
    return new UnofferCall__Outputs(this);
  }
}

export class UnofferCall__Inputs {
  _call: UnofferCall;

  constructor(call: UnofferCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UnofferCall__Outputs {
  _call: UnofferCall;

  constructor(call: UnofferCall) {
    this._call = call;
  }
}
