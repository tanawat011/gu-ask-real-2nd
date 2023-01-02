import { hex2rgb } from './hex2Rgb'

describe('utils/color/hex2Rgb', () => {
  test('converts hex to rgb 3 digit', () => {
    expect.assertions(1)

    expect(hex2rgb('#000')).toBe('0 0 0')
  })

  test('converts hex to rgb full digit', () => {
    expect.assertions(1)

    expect(hex2rgb('#ffffff')).toBe('255 255 255')
  })
})
