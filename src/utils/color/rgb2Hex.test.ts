import { rgb2Hex } from './rgb2Hex'

describe('utils/color/rgb2Hex', () => {
  test('rgb(0, 0, 0) to #000000', () => {
    expect.assertions(1)

    expect(rgb2Hex('rgb(0, 0, 0)')).toBe('#000000')
  })

  test('rgb(255, 255, 255) to #ffffff', () => {
    expect.assertions(1)

    expect(rgb2Hex('rgb(255, 255, 255)')).toBe('#ffffff')
  })

  test('rgb(171, 202, 188) to #abcabc', () => {
    expect.assertions(1)

    expect(rgb2Hex('rgb(171, 202, 188)')).toBe('#abcabc')
  })

  test('rgb(203, 172, 186) to #cbacba', () => {
    expect.assertions(1)

    expect(rgb2Hex('rgb(203, 172, 186)')).toBe('#cbacba')
  })

  test('rgb(221, 170, 255) to #ddaaff', () => {
    expect.assertions(1)

    expect(rgb2Hex('rgb(221, 170, 255)')).toBe('#ddaaff')
  })

  test('rgba(221, 170, 255, 0.50) to #ddaaff80', () => {
    expect.assertions(1)

    expect(rgb2Hex('rgba(221, 170, 255, 0.50)')).toBe('#ddaaff80')
  })

  test('rgba(221, 170, 255, 0.80) to #ddaaffcc', () => {
    expect.assertions(1)

    expect(rgb2Hex('rgba(221, 170, 255, 0.80)')).toBe('#ddaaffcc')
  })

  test('rgba(221, 170, 255, 0.96) to #ddaafff5', () => {
    expect.assertions(1)

    expect(rgb2Hex('rgba(221, 170, 255, 0.96)')).toBe('#ddaafff5')
  })

  test('rgb(221, 170, 255) to [dd, aa, ff]', () => {
    expect.assertions(1)

    expect(rgb2Hex('rgb(221, 170, 255)', { isArray: true })).toEqual([
      'dd',
      'aa',
      'ff',
    ])
  })

  test('rgb(221, 170, 255, 0.96) to [dd, aa, ff, f5]', () => {
    expect.assertions(1)

    expect(rgb2Hex('rgb(221, 170, 255, 0.96)', { isArray: true })).toEqual([
      'dd',
      'aa',
      'ff',
      'f5',
    ])
  })

  test('rgba(221, 170, 255) to #ddaafff5', () => {
    expect.assertions(1)

    expect(rgb2Hex('rgba(221, 170, 255)', { opacity: 0.96 })).toBe('#ddaafff5')
  })

  test('rgba(221, 170, 255, 0.6) to #ddaaffcc', () => {
    expect.assertions(1)

    expect(rgb2Hex('rgba(221, 170, 255, 0.96)', { opacity: 0.8 })).toBe(
      '#ddaaffcc',
    )
  })
})
