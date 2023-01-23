import { hexToOpacity } from './hexToOpacity'

describe('utils/color/hexToOpacity', () => {
  test('00 to 0', () => {
    expect.assertions(1)

    expect(hexToOpacity('00')).toBe(0)
  })

  test('ff to 100', () => {
    expect.assertions(1)

    expect(hexToOpacity('ff')).toBe(100)
  })

  test('e8 to 91', () => {
    expect.assertions(1)

    expect(hexToOpacity('e8')).toBe(91)
  })

  test('8f to 56', () => {
    expect.assertions(1)

    expect(hexToOpacity('8f')).toBe(56)
  })

  test('1f to 12', () => {
    expect.assertions(1)

    expect(hexToOpacity('1f')).toBe(12)
  })

  test('000 to error', () => {
    expect.assertions(2)

    expect(() => hexToOpacity('000')).toThrow(Error)
    expect(() => hexToOpacity('000')).toThrow(
      'Hex opacity must be between 00 and ff',
    )
  })

  test('zzz to error', () => {
    expect.assertions(2)

    expect(() => hexToOpacity('zzz')).toThrow(Error)
    expect(() => hexToOpacity('zzz')).toThrow(
      'Hex opacity must be between 00 and ff',
    )
  })

  test('zz to error', () => {
    expect.assertions(2)

    expect(() => hexToOpacity('zz')).toThrow(Error)
    expect(() => hexToOpacity('zz')).toThrow(
      'Opacity must be between 0 and 255',
    )
  })
})
