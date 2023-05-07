import type { LocalSettingState } from 'recoils/atoms'

import { useEffect } from 'react'

import { useRecoilState } from 'recoil'

import { defaultLocalSetting, localSettingAtom } from 'recoils/atoms'

type UseSettingHook = () => [
  LocalSettingState,
  (localSetting: LocalSettingState) => void,
]

export const useLocalSetting: UseSettingHook = () => {
  const [localSetting, setLocalSetting] = useRecoilState(localSettingAtom)

  useEffect(() => {
    const _defaultLocalSetting = JSON.stringify(defaultLocalSetting)
    const strOldLocalSetting = localStorage.getItem('setting')
    const oldLocalSetting = JSON.parse(
      strOldLocalSetting || _defaultLocalSetting,
    ) as LocalSettingState

    if (strOldLocalSetting) {
      const localSettingKeys = Object.keys(oldLocalSetting)

      if (
        !localSettingKeys.includes('theme') ||
        !localSettingKeys.includes('auth')
      ) {
        setLocalSetting(defaultLocalSetting)
        localStorage.setItem('setting', JSON.stringify(defaultLocalSetting))

        return
      }
    }

    setLocalSetting(oldLocalSetting)
    localStorage.setItem('setting', JSON.stringify(oldLocalSetting))
  }, [])

  return [localSetting, setLocalSetting]
}
