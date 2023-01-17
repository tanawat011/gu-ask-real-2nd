import { renderHook } from '@testing-library/react'
import { mocked } from 'jest-mock'
import { useOutletContext } from 'react-router-dom'

import { useLocalSetting } from './useLocalSetting'

jest.mock('./useLocalSetting', () => jest.requireActual('./useLocalSetting'))

describe('useLocalSetting', () => {
  test('should return correctly result', () => {
    expect.hasAssertions()

    mocked(useOutletContext).mockReturnValue({ scroll: { top: 0 } })

    const { result } = renderHook(() => useLocalSetting())

    expect('theme' in result.current[0]).toEqual(true)
  })
})
