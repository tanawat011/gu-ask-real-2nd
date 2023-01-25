import { menuGenerator } from './menuGenerator'

describe('utils/route', () => {
  test('menuGenerator', () => {
    expect.assertions(2)

    const [item] = menuGenerator({ test: { fullPath: '/test' } })

    expect(item.to).toBe('/test')
    expect(item.label).toBe('Test')
  })
})
