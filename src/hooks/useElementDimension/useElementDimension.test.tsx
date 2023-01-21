import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { useElementDimension } from './useElementDimension'

jest.mock('./useElementDimension', () => jest.requireActual('./useElementDimension'))

describe('useElementDimension', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  test('should return correctly result', async () => {
    expect.hasAssertions()

    const { result } = renderHook(() => useElementDimension())

    result.current[2]()

    await act(async () => {
      jest.runAllTimers()
    })

    expect(result.current[0].current.clientHeight).toEqual(0)
  })
})
