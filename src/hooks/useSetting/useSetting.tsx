import type { LocalSettingState } from 'recoils/atoms'

import { useEffect } from 'react'

import { useRecoilState } from 'recoil'

import { defaultLocalSetting, localSettingAtom } from 'recoils/atoms'

type TypeHandler = 'mode' | 'themeColor' | 'colorLevel'

type UseSettingHook = (typeHandler?: TypeHandler) => [LocalSettingState, () => void]

export const useSetting: UseSettingHook = (typeHandler) => {
  const [localSetting, setLocalSetting] = useRecoilState(localSettingAtom)

  useEffect(() => {
    const _defaultLocalSetting = JSON.stringify(defaultLocalSetting)
    const oldLocalSetting = JSON.parse(
      localStorage.getItem('setting') || _defaultLocalSetting,
    ) as LocalSettingState

    setLocalSetting(oldLocalSetting)
  }, [])

  const setDarkMode = () => {
    const _defaultLocalSetting = JSON.stringify(defaultLocalSetting)
    const oldLocalSetting = JSON.parse(
      localStorage.getItem('setting') || _defaultLocalSetting,
    ) as LocalSettingState

    const mode = oldLocalSetting.theme.mode

    oldLocalSetting.theme.mode = mode === 'light' ? 'dark' : 'light'

    setLocalSetting(oldLocalSetting)
    localStorage.setItem('setting', JSON.stringify(oldLocalSetting))
  }

  const handler = () => {
    switch (typeHandler) {
      case 'mode':
        return setDarkMode

      default:
        return () => void 0
    }
  }

  return [localSetting, handler()]
}
