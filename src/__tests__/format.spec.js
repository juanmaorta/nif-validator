/* global describe, it, expect */
import { format } from '../format.js'

describe('format', () => {
  it('should properly format an id number', () => {
    const formattedString = '94640119H'

    expect(format('94,640.119-h')).toEqual(formattedString)
  })
})
