import { renderHook } from '@testing-library/react'
import { RecoilRoot } from 'recoil'

import { useLocalSetting } from './useLocalSetting'

jest.mock('./useLocalSetting', () => jest.requireActual('./useLocalSetting'))

describe('useLocalSetting', () => {
  test('should return correctly result', () => {
    expect.hasAssertions()

    const { result } = renderHook(() => useLocalSetting(), { wrapper: RecoilRoot })

    expect('theme' in result.current[0]).toEqual(true)
  })
})
