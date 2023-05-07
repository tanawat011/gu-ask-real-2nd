import { getContrastColor } from './getContrastColor'

describe('utils/color/getContrastColor', () => {
  test('should be white color', () => {
    expect.assertions(1)

    expect(getContrastColor('#000')).toBe('#fff')
  })

  test('should be black color', () => {
    expect.assertions(1)

    expect(getContrastColor('#fff')).toBe('#000')
  })
})
