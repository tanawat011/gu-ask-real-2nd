import { decideBetweenColor } from './decideBetweenColor'

describe('utils/color/decideBetweenColor', () => {
  test('should be white color', () => {
    expect.assertions(1)

    expect(decideBetweenColor('#000')).toBe('#fff')
  })

  test('should be black color', () => {
    expect.assertions(1)

    expect(decideBetweenColor('#fff')).toBe('#000')
  })
})
