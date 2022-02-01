import { Address, BigInt } from "@graphprotocol/graph-ts";
import {
  ArtisanERC721,
  ArtisanERC721__asksOfResultValue0Struct,
  ArtisanERC721__bidsOfResultValue0Struct,
  CancelListing as CancelListingEvent,
  CancelOffer as CancelOfferEvent,
  Listing as ListingEvent,
  Mint as MintEvent,
  Offer as OfferEvent,
  Sale as SaleEvent,
  Transfer as TransferEvent,
} from "../generated/ArtisanERC721/ArtisanERC721";
import { Token, User, Bid, Ask } from "../generated/schema";

function createBids(tokenContract: ArtisanERC721, tokenId: BigInt): void {
  tokenContract
    .bidsOf(tokenId)
    .map<string>((bid: ArtisanERC721__bidsOfResultValue0Struct): string => {
      const newBid = new Bid(
        bid.bidder.toHexString() + bid.tokenId.toString() + bid.price.toString()
      );
      newBid.token = bid.tokenId.toString();
      newBid.bidder = bid.bidder.toHexString();
      newBid.save();
      return newBid.id;
    });
}

function createAsks(tokenContract: ArtisanERC721, tokenId: BigInt): void {
  tokenContract
    .asksOf(tokenId)
    .map<string>((ask: ArtisanERC721__asksOfResultValue0Struct): string => {
      const newAsk = new Ask(
        ask.asker.toHexString() + ask.tokenId.toString() + ask.price.toString()
      );
      newAsk.token = ask.tokenId.toString();
      newAsk.asker = ask.asker.toHexString();
      newAsk.save();
      return newAsk.id;
    });
}

export function handleCancelListing(event: CancelListingEvent): void {}

export function handleCancelOffer(event: CancelOfferEvent): void {}

export function handleListing(event: ListingEvent): void {}

export function handleMint(event: MintEvent): void {
  let address = event.address;
  let tokenId: BigInt;

  tokenId = event.params.token.tokenId;

  let token = Token.load(tokenId.toString());

  if (!token) {
    token = new Token(tokenId.toString());
    let tokenContract = ArtisanERC721.bind(address);
    token.uri = tokenContract.tokenURI(tokenId);
    token.owner = tokenContract.ownerOf(tokenId).toHexString();
    token.artist = tokenContract.artistOf(tokenId).toHexString();

    token.listed = event.params.token.listed;

    createBids(tokenContract, tokenId);
    createAsks(tokenContract, tokenId);

    token.save();
  }

  // Owner
  let user = User.load(event.params.token.owner.toHexString());

  if (!user) {
    user = new User(event.params.token.owner.toHexString());
    user.address = event.params.token.owner;
    user.save();
  }

  // Artist
  user = User.load(event.params.token.artist.toHexString());

  if (!user) {
    user = new User(event.params.token.artist.toHexString());
    user.address = event.params.token.artist;
    user.save();
  }
}

export function handleOffer(event: OfferEvent): void {}

export function handleSale(event: SaleEvent): void {}

export function handleTransfer(event: TransferEvent): void {
  let address = event.address;
  let tokenId: BigInt;

  tokenId = event.params.tokenId;

  let token = Token.load(tokenId.toString());

  if (!token) {
    token = new Token(tokenId.toString());
    let tokenContract = ArtisanERC721.bind(address);
    token.uri = tokenContract.tokenURI(tokenId);
    token.owner = tokenContract.ownerOf(tokenId).toHexString();
    token.artist = tokenContract.artistOf(tokenId).toHexString();
    token.listed = false;

    createBids(tokenContract, tokenId);
    createAsks(tokenContract, tokenId);

    token.save();
  }

  // Buyer
  let user = User.load(event.params.to.toHexString());

  if (!user) {
    user = new User(event.params.to.toHexString());
    user.address = event.params.to;
    user.save();
  }

  // Seller
  user = User.load(event.params.from.toHexString());

  if (!user) {
    user = new User(event.params.from.toHexString());
    user.address = event.params.from;
    user.save();
  }
}
