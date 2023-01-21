import { renderHook } from '@testing-library/react'
import { RecoilRoot, useRecoilValue } from 'recoil'

import { sidebarAtom } from './sidebar'

describe('recoils/atoms/sidebar', () => {
  test('sidebarAtom', () => {
    expect.assertions(1)

    const { result } = renderHook(() => useRecoilValue(sidebarAtom), {
      wrapper: RecoilRoot,
    })

    expect(result.current.fullSidebar).toEqual(true)
  })
})
