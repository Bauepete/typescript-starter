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
    expect(statistics.average).to.be.equal(0)
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
    expect(x.average).to.be.equal(42)
  })
})

describe("Statistics on arbitrary arrays", () => {
  const arbitraryArray = [42, 17, 84, 123, 100]
  const statistics = new Statistics(arbitraryArray)

  it("should return the maximum of an array as max", () => {
    expect(statistics.max).to.be.equal(123)
  })

  it("should return the minimum of an array as min", () => {
    expect(statistics.min).to.be.equal(17)
  })

  it("should return the sum of an array as a sum", () => {
    expect(statistics.sum).to.be.equal(366)
  })

  it("should return the average of an array as a average", () => {
    expect(statistics.average).to.be.equal(73.2)
  })
})
