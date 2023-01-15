import { renderHook } from '@testing-library/react'
import { mocked } from 'jest-mock'
import { useOutletContext } from 'react-router-dom'

import { useIsScrolled } from './useIsScrolled'

jest.mock('./useIsScrolled', () => ({
  ...jest.requireActual('./useIsScrolled'),
}))
jest.mock('react-router-dom')

describe('useIsScrolled', () => {
  test('should return correctly result', () => {
    expect.hasAssertions()

    mocked(useOutletContext).mockReturnValue({ scroll: { top: 0 } })

    const { result } = renderHook(() => useIsScrolled())

    expect(result.current).toEqual(false)
  })
})
