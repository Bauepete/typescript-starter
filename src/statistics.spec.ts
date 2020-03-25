import { Statistics } from "./Statistics"
import { expect } from "chai"
import "mocha"

describe("Statistics on empty arrays", () => {
  const statistics = new Statistics([])

  it("should return 0 when asked for the max", () => {
    expect(statistics.max).to.be.equal(0)
  })

  it("should return 0 when asked for the min", () => {
    expect(statistics.min).to.be.equal(0)
  })

  it("should return 0 when asked for the sum", () => {
    expect(statistics.sum).to.be.equal(0)
  })

  it("should return 0 when asked for the avg", () => {
    expect(statistics.avg).to.be.equal(0)
  })

})

describe("Statistics on one-element arrays", () => {
  const anyNumber = 42
  const statistics = new Statistics([anyNumber])

  it("should return the element as max", () => {
    expect(statistics.max).to.be.equal(42)
  })

  it("should return the element as min", () => {
    let anyNumber = 42
    const x = new Statistics([anyNumber])
    expect(x.min).to.be.equal(42)
  })

  it("should return the element as sum", () => {
    let anyNumber = 42
    const x = new Statistics([anyNumber])
    expect(x.sum).to.be.equal(42)
  })

  it("should return the element as avg", () => {
    let anyNumber = 42
    const x = new Statistics([anyNumber])
    expect(x.avg).to.be.equal(42)
  })
})

describe("Statistics on two-element arrays", () => {
  it("should return first + second element as a sum", () => {
    let anyTwoNumbers = [42, 17]
    const x = new Statistics(anyTwoNumbers)
    expect(x.sum).to.be.equal(42 + 17)
  })
})
