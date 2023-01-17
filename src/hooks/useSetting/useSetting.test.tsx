import { renderHook } from '@testing-library/react'
import { mocked } from 'jest-mock'
import { useOutletContext } from 'react-router-dom'

import { useSetting } from './useSetting'

jest.mock('./useSetting', () => jest.requireActual('./useSetting'))

describe('useSetting', () => {
  test('should return correctly result', () => {
    expect.hasAssertions()

    mocked(useOutletContext).mockReturnValue({ scroll: { top: 0 } })

    const { result } = renderHook(() => useSetting())

    expect('theme' in result.current[0]).toEqual(true)
  })
})
