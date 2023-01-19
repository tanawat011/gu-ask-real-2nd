import { renderHook } from '@testing-library/react'
import { mocked } from 'jest-mock'

import { useContentContext } from 'hooks/useContentContext'

import { useIsScrolled } from './useIsScrolled'

jest.mock('./useIsScrolled', () => jest.requireActual('./useIsScrolled'))
jest.mock('hooks/useContentContext')

describe('useIsScrolled', () => {
  test('should return correctly result is false when no scroll', () => {
    expect.hasAssertions()

    mocked(useContentContext).mockReturnValue({ scroll: { top: 0, left: 0, height: 0, width: 0 } })

    const { result } = renderHook(() => useIsScrolled())

    expect(result.current).toEqual(false)
  })

  test('should return correctly result is false when scrolled', () => {
    expect.hasAssertions()

    mocked(useContentContext).mockReturnValue({ scroll: { top: 10, left: 0, height: 0, width: 0 } })

    const { result } = renderHook(() => useIsScrolled())

    expect(result.current).toEqual(true)
  })
})
