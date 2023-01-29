import { useRecoilValue } from 'recoil'

import { localSettingAtom } from 'recoils/atoms'

export const useGetTheme = () => {
  const { theme } = useRecoilValue(localSettingAtom)

  return theme
}
