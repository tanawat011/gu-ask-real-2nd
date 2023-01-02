import { rgb2Hex } from './rgb2Hex'

describe('utils/color/rgb2Hex', () => {
  test('converts rgb to hex 3 digit', () => {
    expect.assertions(1)

    expect(rgb2Hex(0, 0, 0)).toBe('#000000')
  })

  test('converts rgb to hex full digit', () => {
    expect.assertions(1)

    expect(rgb2Hex(255, 255, 255)).toBe('#ffffff')
  })

  test('converts rgb to hex incase over than 255', () => {
    expect.assertions(1)

    expect(rgb2Hex(256, 255, 300)).toBe('#ffffff')
  })

  test('converts rgb to hex incase less than 0', () => {
    expect.assertions(1)

    expect(rgb2Hex(-1, 0, -120)).toBe('#000000')
  })
})
