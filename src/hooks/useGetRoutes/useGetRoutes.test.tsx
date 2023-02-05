import { renderHook } from '@testing-library/react'

import { useGetRoutes } from './useGetRoutes'

jest.mock('./useGetRoutes', () => ({
  ...jest.requireActual('./useGetRoutes'),
}))
jest.mock('layouts/Authentication')
jest.mock('layouts/Error')
jest.mock('layouts/Main')
jest.mock('utils/route', () => ({
  routeGenerator: () => ({
    test: {
      path: 'test',
      fullPath: '/test',
      component: 'Test',
    },
  }),
}))

describe('useGetRoutes', () => {
  test('should return all routes', () => {
    expect.hasAssertions()

    const { result } = renderHook(() => useGetRoutes())

    expect(Object.keys(result.current.all).length).toEqual(3)
  })
})
