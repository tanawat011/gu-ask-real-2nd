import { opacity2Hex } from './opacity2Hex'

describe('utils/color/opacity2Hex', () => {
  test('0.0 to 00', () => {
    expect.assertions(1)

    expect(opacity2Hex(0.0)).toBe('00')
  })

  test('0 to 00', () => {
    expect.assertions(1)

    expect(opacity2Hex(0)).toBe('00')
  })

  test('1.0 to ff', () => {
    expect.assertions(1)

    expect(opacity2Hex(1.0)).toBe('ff')
  })

  test('1 to ff', () => {
    expect.assertions(1)

    expect(opacity2Hex(1)).toBe('ff')
  })

  test('100 to ff', () => {
    expect.assertions(1)

    expect(opacity2Hex(1)).toBe('ff')
  })

  test('0.07 to 12', () => {
    expect.assertions(1)

    expect(opacity2Hex(0.07)).toBe('12')
  })

  test('57 to 91', () => {
    expect.assertions(1)

    expect(opacity2Hex(57)).toBe('91')
  })

  test('89 to e3', () => {
    expect.assertions(1)

    expect(opacity2Hex(89)).toBe('e3')
  })

  test('-1 to error', () => {
    expect.assertions(2)

    expect(() => opacity2Hex(-1)).toThrow(Error)
    expect(() => opacity2Hex(-1)).toThrow('Opacity must be between 0 and 100')
  })

  test('102 to error', () => {
    expect.assertions(2)

    expect(() => opacity2Hex(-1)).toThrow(Error)
    expect(() => opacity2Hex(-1)).toThrow('Opacity must be between 0 and 100')
  })
})
