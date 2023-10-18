import { BigInt } from "@graphprotocol/graph-ts";
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

  entity.save()
}

export function handleHubBought(event: HubBoughtEvent): void {
  let id = event.params.buyer
  let entity = HubBought.load(id)
  if(entity){
    entity.hubBought = event.params.hubBought
    entity.owned = entity.hubBought.plus(event.params.hubBought)
    entity.buyer = event.params.buyer
    entity.ethSpent = event.params.ethSpent
    entity.save()
  }
  else {
    entity = new HubBought(event.params.buyer)
    entity.buyer = event.params.buyer
    entity.hubBought = event.params.hubBought
    entity.owned = event.params.hubBought
    entity.ethSpent = event.params.ethSpent
    entity.save()
  }
  

}
