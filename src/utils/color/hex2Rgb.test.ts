import { hex2Rgb } from './hex2Rgb'

describe('utils/color/hex2Rgb', () => {
  test('#000 to rgb(0, 0, 0)', () => {
    expect.assertions(1)

    expect(hex2Rgb('#000')).toBe('rgb(0, 0, 0)')
  })

  test('#000000 to rgb(0, 0, 0)', () => {
    expect.assertions(1)

    expect(hex2Rgb('#000000')).toBe('rgb(0, 0, 0)')
  })

  test('#fff to rgb(255, 255, 255)', () => {
    expect.assertions(1)

    expect(hex2Rgb('#fff')).toBe('rgb(255, 255, 255)')
  })

  test('#ffffff to rgb(255, 255, 255)', () => {
    expect.assertions(1)

    expect(hex2Rgb('#ffffff')).toBe('rgb(255, 255, 255)')
  })

  test('#abcabc to rgb(171, 202, 188)', () => {
    expect.assertions(1)

    expect(hex2Rgb('#abcabc')).toBe('rgb(171, 202, 188)')
  })

  test('#cbacba to rgb(203, 172, 186)', () => {
    expect.assertions(1)

    expect(hex2Rgb('#cbacba')).toBe('rgb(203, 172, 186)')
  })

  test('#ddaaff to rgb(221, 170, 255)', () => {
    expect.assertions(1)

    expect(hex2Rgb('#ddaaff')).toBe('rgb(221, 170, 255)')
  })

  test('#ddaaff80 to rgba(221, 170, 255, 0.50)', () => {
    expect.assertions(1)

    expect(hex2Rgb('#ddaaff80')).toBe('rgba(221, 170, 255, 0.50)')
  })

  test('#ddaaffcc to rgba(221, 170, 255, 0.80)', () => {
    expect.assertions(1)

    expect(hex2Rgb('#ddaaffcc')).toBe('rgba(221, 170, 255, 0.80)')
  })

  test('#ddaafff5 to rgba(221, 170, 255, 0.96)', () => {
    expect.assertions(1)

    expect(hex2Rgb('#ddaafff5')).toBe('rgba(221, 170, 255, 0.96)')
  })

  test('#ddaaff to [221, 170, 255]', () => {
    expect.assertions(1)

    expect(hex2Rgb('#ddaaff', { isArray: true })).toEqual(['221', '170', '255'])
  })

  test('#ddaafff5 to [221, 170, 255, 0.96]', () => {
    expect.assertions(1)

    expect(hex2Rgb('#ddaafff5', { isArray: true })).toEqual([
      '221',
      '170',
      '255',
      '0.96',
    ])
  })

  test('#ddaaff to rgba(221, 170, 255, 0.6)', () => {
    expect.assertions(1)

    expect(hex2Rgb('#ddaaff', { opacity: 0.6 })).toBe(
      'rgba(221, 170, 255, 0.6)',
    )
  })

  test('#ddaafff5 to rgba(221, 170, 255, 0.6)', () => {
    expect.assertions(1)

    expect(hex2Rgb('#ddaafff5', { opacity: 0.6 })).toBe(
      'rgba(221, 170, 255, 0.6)',
    )
  })
})
