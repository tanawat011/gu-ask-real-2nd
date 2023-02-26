import { generatePaths } from './generatePaths'

describe('utils/route', () => {
  test('generatePaths with 1 level', () => {
    expect.assertions(1)

    const paths = generatePaths<{ customer: string; report: string }>({
      customer: {
        path: 'customer',
        element: <div />,
      },
      report: {
        path: 'report',
        element: <div />,
      },
    })

    expect(paths.customer).toEqual('/customer')
  })

  test('generatePaths with 2 level', () => {
    expect.assertions(1)

    const paths = generatePaths<{ customer: string; report: { lv2: string } }>({
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

    expect(paths.report.lv2).toEqual('/report/lv2')
  })

  test('generatePaths with 2 level and level 2 is root path', () => {
    expect.assertions(1)

    const paths = generatePaths<{ customer: string; report: { lv2: string } }>({
      customer: {
        path: 'customer',
        element: <div />,
      },
      report: {
        path: 'report',
        children: {
          lv2: {
            path: '',
            element: <div />,
          },
        },
      },
    })

    expect(paths.report.lv2).toEqual('/report')
  })

  test('generatePaths with *', () => {
    expect.assertions(1)

    const paths = generatePaths<{ customer: string }>({
      customer: {
        path: 'customer',
        element: <div />,
      },
      '*': {
        path: '*',
        element: <div />,
      },
    } as never)

    expect(paths).toEqual({
      customer: '/customer',
    })
  })
})
