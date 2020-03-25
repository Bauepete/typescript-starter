import { hello } from './hello'
import { expect } from 'chai'
import 'mocha'

describe('Hello function', () => {
  it('should return hello world if called without any parameters', () => {
    const result = hello();
    expect(result).to.equal('Hello world!')
  })
})
