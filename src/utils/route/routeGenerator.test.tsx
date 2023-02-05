import { routeGenerator } from './routeGenerator'

describe('utils/route', () => {
  test('routeGenerator', () => {
    expect.assertions(1)

    const route = routeGenerator({ test: <div>xxx</div> })

    expect(route).toEqual({
      test: {
        element: <div>xxx</div>,
        fullPath: '/test',
        isIndex: true,
        path: 'test',
      },
    })
  })

  test('routeGenerator by 2 route', () => {
    expect.assertions(1)

    const route = routeGenerator({
      test: <div>xxx</div>,
      test2: <div>xxx</div>,
    })

    expect(route).toEqual({
      test: {
        element: <div>xxx</div>,
        fullPath: '/test',
        isIndex: true,
        path: 'test',
      },
      test2: {
        element: <div>xxx</div>,
        fullPath: '/test2',
        path: 'test2',
      },
    })
  })

  // test('routeGenerator by 3 route and have children', () => {
  //   expect.assertions(1)

  //   const route = routeGenerator({
  //     test: <div>xxx</div>,
  //     test2: <div>xxx</div>,
  //     test3: {
  //       test33: <div>xxx</div>,
  //     },
  //   })

  //   expect(route).toEqual({
  //     test: {
  //       element: <div>xxx</div>,
  //       fullPath: '/test',
  //       isIndex: true,
  //       path: 'test',
  //     },
  //     test2: {
  //       element: <div>xxx</div>,
  //       fullPath: '/test2',
  //       path: 'test2',
  //     },
  //     test3: {
  //       fullPath: '/test3',
  //       path: 'test3',
  //       children: {
  //         test33: {
  //           element: <div>xxx</div>,
  //           fullPath: '/test3/test33',
  //           isIndex: true,
  //           path: 'test33',
  //         },
  //       },
  //     },
  //   })
  // })
})
