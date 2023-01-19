import { betweenRange } from './betweenRange'

describe('utils/number', () => {
  test('betweenRange result `true`', () => {
    expect.assertions(1)
    expect(betweenRange(1, 0, 2)).toEqual(true)
  })

  test('betweenRange result `false`', () => {
    expect.assertions(1)
    expect(betweenRange(0, 0, 2)).toEqual(false)
  })
})
