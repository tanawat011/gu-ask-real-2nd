import type { LocalSettingState } from 'recoils/atoms'

import { renderHook } from '@testing-library/react'
import { RecoilRoot } from 'recoil'

import { defaultLocalSetting } from 'recoils/atoms'

import { useLocalSetting } from './useLocalSetting'

jest.mock('./useLocalSetting', () => jest.requireActual('./useLocalSetting'))

describe('useLocalSetting', () => {
  test('should return correctly result', () => {
    expect.hasAssertions()

    const { result } = renderHook(() => useLocalSetting(), {
      wrapper: RecoilRoot,
    })

    expect('theme' in result.current[0]).toEqual(true)
  })

  test('should return correctly result, but it`s old data', () => {
    expect.hasAssertions()

    localStorage.setItem('setting', JSON.stringify(defaultLocalSetting))

    const { result } = renderHook(() => useLocalSetting(), {
      wrapper: RecoilRoot,
    })

    expect('theme' in result.current[0]).toEqual(true)
  })

  test('should return correctly result, but it`s old data and no `theme` key', () => {
    expect.hasAssertions()

    const mockData = { ...defaultLocalSetting } as Partial<LocalSettingState>

    delete mockData.theme

    localStorage.setItem('setting', JSON.stringify(mockData))

    const { result } = renderHook(() => useLocalSetting(), {
      wrapper: RecoilRoot,
    })

    expect('theme' in result.current[0]).toEqual(true)
  })

  test('should return correctly result, but it`s old data and no `auth` key', () => {
    expect.hasAssertions()

    const mockData = { ...defaultLocalSetting } as Partial<LocalSettingState>

    delete mockData.auth

    localStorage.setItem('setting', JSON.stringify(mockData))

    const { result } = renderHook(() => useLocalSetting(), {
      wrapper: RecoilRoot,
    })

    expect('theme' in result.current[0]).toEqual(true)
  })
})
