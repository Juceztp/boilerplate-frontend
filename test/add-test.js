import { describe, it } from 'mocha'
import { expect } from 'chai'
import { add } from '../src/js/add'

describe('adding 2 numbers', () => {
  it('should return 3 when adding 1 + 2', () => {
    const sum = add(1, 2)
    const resultado = 3
    expect(sum).to.equal(resultado)
  })
})
