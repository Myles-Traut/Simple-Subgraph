import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import { EthWithdrawn, HubBought } from "../generated/TokenPresale/TokenPresale"

export function createEthWithdrawnEvent(
  ethWithdrawn: BigInt,
  remainingBalance: BigInt
): EthWithdrawn {
  let ethWithdrawnEvent = changetype<EthWithdrawn>(newMockEvent())

  ethWithdrawnEvent.parameters = new Array()

  ethWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "ethWithdrawn",
      ethereum.Value.fromUnsignedBigInt(ethWithdrawn)
    )
  )
  ethWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "remainingBalance",
      ethereum.Value.fromUnsignedBigInt(remainingBalance)
    )
  )

  return ethWithdrawnEvent
}

export function createHubBoughtEvent(
  buyer: Address,
  ethSpent: BigInt,
  hubBought: BigInt
): HubBought {
  let hubBoughtEvent = changetype<HubBought>(newMockEvent())

  hubBoughtEvent.parameters = new Array()

  hubBoughtEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  hubBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "ethSpent",
      ethereum.Value.fromUnsignedBigInt(ethSpent)
    )
  )
  hubBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "hubBought",
      ethereum.Value.fromUnsignedBigInt(hubBought)
    )
  )

  return hubBoughtEvent
}
