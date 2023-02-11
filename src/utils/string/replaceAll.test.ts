import { replaceAll } from './replaceAll'

describe('utils/string', () => {
  test('replaceAll', () => {
    expect.assertions(3)

    expect(replaceAll('//path', '//', '/')).toBe('/path')
    expect(replaceAll('xxx', 'xxx', 'z')).toBe('z')
    expect(replaceAll('a-z', '-', ' to ')).toBe('a to z')
  })
})
