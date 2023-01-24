import { renderHook } from '@testing-library/react'

import { useRouteList } from './useRouteList'

jest.mock('./useRouteList', () => ({
  ...jest.requireActual('./useRouteList'),
}))
jest.mock('layouts/Authentication')
jest.mock('layouts/Error')
jest.mock('layouts/Main')

describe('useRouteList', () => {
  test('should return all routes', () => {
    expect.hasAssertions()

    const { result } = renderHook(() => useRouteList())

    expect(Object.keys(result.current.all).length).toEqual(3)
  })
})
