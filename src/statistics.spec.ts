import { Statistics } from "./Statistics"
import { expect } from "chai"
import "mocha"

describe("Statistics", () => {
  it("should return 0 when asked for the sum on an empty set", () => {
    const x = new Statistics([])
    expect(x.sum).to.be.equal(0)
  })

  it("should return the element of a one-element array as max", () => {
    let anyNumber = 42
    const x = new Statistics([anyNumber])
    expect(x.max).to.be.equal(42)
  })

  it("should return the element of a one-element array as min", () => {
    let anyNumber = 42
    const x = new Statistics([anyNumber])
    expect(x.min).to.be.equal(42)
  })

    it("should return the element of a one element array as a sum", () => {
      let anyNumber = 42
      const x = new Statistics([anyNumber])
      expect(x.sum).to.be.equal(42)
    })

    it("should return the element of a one element array as a avg", () => {
      let anyNumber = 42
      const x = new Statistics([anyNumber])
      expect(x.avg).to.be.equal(42)
    })

    it("should return first + second element as a sum for a 2-element array", () => {
      let anyTwoNumbers = [42, 17]
      const x = new Statistics(anyTwoNumbers)
      expect(x.sum).to.be.equal(42 + 17)
    })
})
