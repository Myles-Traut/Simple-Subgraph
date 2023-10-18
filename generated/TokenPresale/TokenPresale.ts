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

export class EthWithdrawn extends ethereum.Event {
  get params(): EthWithdrawn__Params {
    return new EthWithdrawn__Params(this);
  }
}

export class EthWithdrawn__Params {
  _event: EthWithdrawn;

  constructor(event: EthWithdrawn) {
    this._event = event;
  }

  get ethWithdrawn(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get remainingBalance(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class HubBought extends ethereum.Event {
  get params(): HubBought__Params {
    return new HubBought__Params(this);
  }
}

export class HubBought__Params {
  _event: HubBought;

  constructor(event: HubBought) {
    this._event = event;
  }

  get buyer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get ethSpent(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get hubBought(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class TokenPresale extends ethereum.SmartContract {
  static bind(address: Address): TokenPresale {
    return new TokenPresale("TokenPresale", address);
  }

  balance(): BigInt {
    let result = super.call("balance", "balance():(uint256)", []);

    return result[0].toBigInt();
  }

  try_balance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balance", "balance():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getHubQuote(_weiAmount: BigInt): BigInt {
    let result = super.call("getHubQuote", "getHubQuote(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_weiAmount)
    ]);

    return result[0].toBigInt();
  }

  try_getHubQuote(_weiAmount: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getHubQuote",
      "getHubQuote(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_weiAmount)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  rate(): BigInt {
    let result = super.call("rate", "rate():(uint256)", []);

    return result[0].toBigInt();
  }

  try_rate(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("rate", "rate():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  userHubBalance(param0: Address): BigInt {
    let result = super.call(
      "userHubBalance",
      "userHubBalance(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_userHubBalance(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "userHubBalance",
      "userHubBalance(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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

export class BuyHubCall extends ethereum.Call {
  get inputs(): BuyHubCall__Inputs {
    return new BuyHubCall__Inputs(this);
  }

  get outputs(): BuyHubCall__Outputs {
    return new BuyHubCall__Outputs(this);
  }
}

export class BuyHubCall__Inputs {
  _call: BuyHubCall;

  constructor(call: BuyHubCall) {
    this._call = call;
  }

  get _receiver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class BuyHubCall__Outputs {
  _call: BuyHubCall;

  constructor(call: BuyHubCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class WithdrawETHCall extends ethereum.Call {
  get inputs(): WithdrawETHCall__Inputs {
    return new WithdrawETHCall__Inputs(this);
  }

  get outputs(): WithdrawETHCall__Outputs {
    return new WithdrawETHCall__Outputs(this);
  }
}

export class WithdrawETHCall__Inputs {
  _call: WithdrawETHCall;

  constructor(call: WithdrawETHCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawETHCall__Outputs {
  _call: WithdrawETHCall;

  constructor(call: WithdrawETHCall) {
    this._call = call;
  }
}
