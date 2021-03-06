// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("uri", Value.fromString(""));
    this.set("category", Value.fromString(""));
    this.set("owner", Value.fromString(""));
    this.set("artist", Value.fromString(""));
    this.set("listed", Value.fromBoolean(false));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Token entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get uri(): string {
    let value = this.get("uri");
    return value!.toString();
  }

  set uri(value: string) {
    this.set("uri", Value.fromString(value));
  }

  get category(): string {
    let value = this.get("category");
    return value!.toString();
  }

  set category(value: string) {
    this.set("category", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get artist(): string {
    let value = this.get("artist");
    return value!.toString();
  }

  set artist(value: string) {
    this.set("artist", Value.fromString(value));
  }

  get listed(): boolean {
    let value = this.get("listed");
    return value!.toBoolean();
  }

  set listed(value: boolean) {
    this.set("listed", Value.fromBoolean(value));
  }
}

export class Bid extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("token", Value.fromString(""));
    this.set("bidder", Value.fromString(""));
    this.set("price", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Bid entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Bid entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Bid", id.toString(), this);
    }
  }

  static load(id: string): Bid | null {
    return changetype<Bid | null>(store.get("Bid", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get bidder(): string {
    let value = this.get("bidder");
    return value!.toString();
  }

  set bidder(value: string) {
    this.set("bidder", Value.fromString(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }
}

export class Ask extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("token", Value.fromString(""));
    this.set("asker", Value.fromString(""));
    this.set("price", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Ask entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Ask entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Ask", id.toString(), this);
    }
  }

  static load(id: string): Ask | null {
    return changetype<Ask | null>(store.get("Ask", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get asker(): string {
    let value = this.get("asker");
    return value!.toString();
  }

  set asker(value: string) {
    this.set("asker", Value.fromString(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("address", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save User entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get tokensOwned(): Array<string> {
    let value = this.get("tokensOwned");
    return value!.toStringArray();
  }

  set tokensOwned(value: Array<string>) {
    this.set("tokensOwned", Value.fromStringArray(value));
  }

  get tokensCreated(): Array<string> {
    let value = this.get("tokensCreated");
    return value!.toStringArray();
  }

  set tokensCreated(value: Array<string>) {
    this.set("tokensCreated", Value.fromStringArray(value));
  }
}
