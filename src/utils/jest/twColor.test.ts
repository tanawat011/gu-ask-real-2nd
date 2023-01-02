import { twColor } from './twColor'

describe('utils/jest/twColor', () => {
  test('should match rgb color tailwind', () => {
    expect.assertions(1)
    expect(twColor('#ffffff')).toBe('rgb(255 255 255 / var(--tw-bg-opacity))')
  })
})
