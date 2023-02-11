import { menuGenerator } from './menuGenerator'

describe('utils/route', () => {
  test('menuGenerator with 1 level', () => {
    expect.assertions(1)

    const mock = {
      home: {
        fullPath: '/',
      },
    } as never

    const [item] = menuGenerator(mock)

    expect(item.title).toBe('HOME')
  })

  test('menuGenerator with 2 level', () => {
    expect.assertions(3)

    const mock = {
      home: {
        fullPath: '/',
        _: {
          dashboard: {
            fullPath: '/',
          },
        },
      },
    } as never

    const [item] = menuGenerator(mock)

    expect(item.title).toBe('HOME')
    expect(item.children.length).toBe(1)
    expect(item.children[0].label).toBe('Dashboard')
  })

  test('menuGenerator with 3 level', () => {
    expect.assertions(7)

    const mock = {
      ui: {
        fullPath: '/',
        _: {
          dashboard: {
            fullPath: '/',
          },
          input: {
            fullPath: '/',
            _: {
              btn: {
                fullPath: '/',
              },
              text: {
                fullPath: '/',
              },
            },
          },
        },
      },
    } as never

    const [item] = menuGenerator(mock)

    expect(item.title).toBe('UI')
    expect(item.children.length).toBe(2)
    expect(item.children[0].label).toBe('Dashboard')
    expect(item.children[1].label).toBe('Input')
    expect(item.children[1].children?.length).toBe(2)
    expect(item.children[1].children?.[0].label).toBe('Btn')
    expect(item.children[1].children?.[1].label).toBe('Text')
  })
})
