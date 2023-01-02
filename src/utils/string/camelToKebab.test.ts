import { camelToKebab } from './camelToKebab'

describe('utils/string', () => {
  test('camelToKebab', () => {
    expect.assertions(2)
    expect(camelToKebab('cameltokebab')).toBe('cameltokebab')
    expect(camelToKebab('camelToKebab')).toBe('camel-to-kebab')
  })
})
