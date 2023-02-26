import { generateRoutes } from './generateRoutes'

describe('utils/route', () => {
  test('generateRoutes with 1 level', () => {
    expect.assertions(4)

    const routes = generateRoutes({
      customer: {
        path: 'customer',
        element: <div />,
      },
      report: {
        path: 'report',
        element: <div />,
      },
    })

    expect(routes.length).toEqual(2)
    expect(routes[0].props.children.length).toEqual(2)
    expect(routes[0].props.children[0].props.index).toEqual(true)
    expect(routes[0].props.children[1].props.index).toEqual(undefined)
  })

  test('generateRoutes with 2 level', () => {
    expect.assertions(1)

    const routes = generateRoutes({
      customer: {
        path: 'customer',
        element: <div />,
      },
      report: {
        path: 'report',
        children: {
          lv2: {
            path: 'lv2',
            element: <div />,
          },
        },
      },
    })

    expect(routes.length).toEqual(2)
  })
})
