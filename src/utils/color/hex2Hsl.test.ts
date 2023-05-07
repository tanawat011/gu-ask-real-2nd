import { hex2Hsl } from './hex2Hsl'

describe('utils/color/hex2Hsl', () => {
  test('#000 to hsl(0, 0%, 0%)', () => {
    expect.assertions(1)

    expect(hex2Hsl('#000')).toBe('hsl(0, 0%, 0%)')
  })

  test('#000000 to hsl(0, 0%, 0%)', () => {
    expect.assertions(1)

    expect(hex2Hsl('#000000')).toBe('hsl(0, 0%, 0%)')
  })

  test('#fff to hsl(0, 0%, 100%)', () => {
    expect.assertions(1)

    expect(hex2Hsl('#fff')).toBe('hsl(0, 0%, 100%)')
  })

  test('#ffffff to hsl(0, 0%, 100%)', () => {
    expect.assertions(1)

    expect(hex2Hsl('#ffffff')).toBe('hsl(0, 0%, 100%)')
  })

  test('#abcabc to hsl(153, 22.6%, 73.1%)', () => {
    expect.assertions(1)

    expect(hex2Hsl('#abcabc')).toBe('hsl(153, 22.6%, 73.1%)')
  })

  test('#cbacba to hsl(333, 23%, 73.5%)', () => {
    expect.assertions(1)

    expect(hex2Hsl('#cbacba')).toBe('hsl(333, 23%, 73.5%)')
  })

  test('#ddaaff to hsl(276, 100%, 83.3%)', () => {
    expect.assertions(1)

    expect(hex2Hsl('#ddaaff')).toBe('hsl(276, 100%, 83.3%)')
  })

  test('#ddaaff80 to hsla(276, 100%, 83.3%, 0.50)', () => {
    expect.assertions(1)

    expect(hex2Hsl('#ddaaff80')).toBe('hsla(276, 100%, 83.3%, 0.50)')
  })

  test('#ddaaffcc to hsla(276, 100%, 83.3%, 0.80)', () => {
    expect.assertions(1)

    expect(hex2Hsl('#ddaaffcc')).toBe('hsla(276, 100%, 83.3%, 0.80)')
  })

  test('#ddaafff5 to hsla(276, 100%, 83.3%, 0.96)', () => {
    expect.assertions(1)

    expect(hex2Hsl('#ddaafff5')).toBe('hsla(276, 100%, 83.3%, 0.96)')
  })

  test('#ddaaff to [276, 100%, 83.3%]', () => {
    expect.assertions(1)

    expect(hex2Hsl('#ddaaff', { isArray: true })).toEqual([
      '276',
      '100%',
      '83.3%',
    ])
  })

  test('#ddaafff5 to [276, 100%, 83.3%, 0.96]', () => {
    expect.assertions(1)

    expect(hex2Hsl('#ddaafff5', { isArray: true })).toEqual([
      '276',
      '100%',
      '83.3%',
      '0.96',
    ])
  })

  test('#ddaaff to hsla(276, 100%, 83.3%, 0.6)', () => {
    expect.assertions(1)

    expect(hex2Hsl('#ddaaff', { opacity: 0.6 })).toBe(
      'hsla(276, 100%, 83.3%, 0.6)',
    )
  })

  test('#ddaafff5 to hsla(276, 100%, 83.3%, 0.6)', () => {
    expect.assertions(1)

    expect(hex2Hsl('#ddaafff5', { opacity: 0.6 })).toBe(
      'hsla(276, 100%, 83.3%, 0.6)',
    )
  })
})
