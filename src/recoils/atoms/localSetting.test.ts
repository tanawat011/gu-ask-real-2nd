import { renderHook } from '@testing-library/react'
import { RecoilRoot, useRecoilValue } from 'recoil'

import { localSettingAtom } from './localSetting'

describe('recoils/atoms/localSetting', () => {
  test('localSettingAtom', () => {
    expect.assertions(1)

    const { result } = renderHook(() => useRecoilValue(localSettingAtom), {
      wrapper: RecoilRoot,
    })

    expect(result.current.theme.color).toEqual('indigo')
  })
})
