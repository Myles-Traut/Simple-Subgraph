import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { EthWithdrawn } from "../generated/schema"
import { EthWithdrawn as EthWithdrawnEvent } from "../generated/TokenPresale/TokenPresale"
import { handleEthWithdrawn } from "../src/token-presale"
import { createEthWithdrawnEvent } from "./token-presale-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let ethWithdrawn = BigInt.fromI32(234)
    let remainingBalance = BigInt.fromI32(234)
    let newEthWithdrawnEvent = createEthWithdrawnEvent(
      ethWithdrawn,
      remainingBalance
    )
    handleEthWithdrawn(newEthWithdrawnEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("EthWithdrawn created and stored", () => {
    assert.entityCount("EthWithdrawn", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "EthWithdrawn",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "ethWithdrawn",
      "234"
    )
    assert.fieldEquals(
      "EthWithdrawn",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "remainingBalance",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
