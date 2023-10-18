import {
  EthWithdrawn as EthWithdrawnEvent,
  HubBought as HubBoughtEvent
} from "../generated/TokenPresale/TokenPresale"
import { EthWithdrawn, HubBought } from "../generated/schema"

export function handleEthWithdrawn(event: EthWithdrawnEvent): void {
  let entity = new EthWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.ethWithdrawn = event.params.ethWithdrawn
  entity.remainingBalance = event.params.remainingBalance

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleHubBought(event: HubBoughtEvent): void {
  let entity = new HubBought(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.buyer = event.params.buyer
  entity.ethSpent = event.params.ethSpent
  entity.hubBought = event.params.hubBought

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
