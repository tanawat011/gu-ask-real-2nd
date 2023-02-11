import { routeGenerator } from './routeGenerator'

describe('utils/route', () => {
  test('routeGenerator with 1 level', () => {
    expect.assertions(1)

    const mock = {
      test: {
        element: <div>xxx</div>,
      },
      lv1: {
        element: <div>xxx</div>,
      },
    }

    const route = routeGenerator(mock)

    expect(route).toEqual({
      test: {
        element: <div>xxx</div>,
        fullPath: '/',
        path: '/',
        _: undefined,
      },
      lv1: {
        element: <div>xxx</div>,
        fullPath: '/lv1',
        path: 'lv1',
        _: undefined,
      },
    })
  })

  test('routeGenerator with 2 level', () => {
    expect.assertions(1)

    const mock = {
      test: {
        element: <div>xxx</div>,
      },
      lv1: {
        element: <div>xxx</div>,
        _: {
          lv2: {
            element: <div>xxx</div>,
          },
        },
      },
    }

    const route = routeGenerator(mock)

    expect(route).toEqual({
      test: {
        element: <div>xxx</div>,
        fullPath: '/',
        path: '/',
        _: undefined,
      },
      lv1: {
        element: <div>xxx</div>,
        fullPath: '/lv1',
        path: 'lv1',
        _: {
          lv2: {
            element: <div>xxx</div>,
            fullPath: '/lv1/lv2',
            isIndex: true,
            path: 'lv2',
          },
        },
      },
    })
  })

  test('routeGenerator with 3 level', () => {
    expect.assertions(1)

    const mock = {
      test: {
        element: <div>xxx</div>,
      },
      lv1: {
        element: <div>xxx</div>,
        _: {
          lv2: {
            element: <div>xxx</div>,
            _: {
              lv3: {
                element: <div>xxx</div>,
              },
            },
          },
        },
      },
    }

    const route = routeGenerator(mock)

    expect(route).toEqual({
      test: {
        element: <div>xxx</div>,
        fullPath: '/',
        path: '/',
        _: undefined,
      },
      lv1: {
        element: <div>xxx</div>,
        fullPath: '/lv1',
        path: 'lv1',
        _: {
          lv2: {
            element: <div>xxx</div>,
            fullPath: '/lv1/lv2',
            isIndex: true,
            path: 'lv2',
            _: {
              lv3: {
                element: <div>xxx</div>,
                fullPath: '/lv1/lv2/lv3',
                isIndex: true,
                path: 'lv3',
              },
            },
          },
        },
      },
    })
  })

  test('routeGenerator with 2 level and no object element', () => {
    expect.assertions(1)

    const mock = {
      test: {
        element: <div>xxx</div>,
      },
      lv1: {
        element: <div>xxx</div>,
        _: {
          lv2: <div>xxx</div>,
        },
      },
    }

    const route = routeGenerator(mock)

    expect(route).toEqual({
      test: {
        element: <div>xxx</div>,
        fullPath: '/',
        path: '/',
        _: undefined,
      },
      lv1: {
        element: <div>xxx</div>,
        fullPath: '/lv1',
        path: 'lv1',
        _: {
          lv2: {
            element: <div>xxx</div>,
            fullPath: '/lv1/lv2',
            isIndex: true,
            path: 'lv2',
          },
        },
      },
    })
  })
})
