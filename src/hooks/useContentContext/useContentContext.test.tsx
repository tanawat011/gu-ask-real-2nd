import { renderHook } from '@testing-library/react'
import { mocked } from 'jest-mock'
import { useOutletContext } from 'react-router-dom'

import { useContentContext } from './useContentContext'

jest.mock('./useContentContext', () =>
  jest.requireActual('./useContentContext'),
)
jest.mock('react-router-dom')

describe('useContentContext', () => {
  test('should return correctly result', () => {
    expect.hasAssertions()

    mocked(useOutletContext).mockReturnValue({ scroll: { top: 0 } })

    const { result } = renderHook(() => useContentContext())

    expect(result.current.scroll.top).toEqual(0)
  })
})
