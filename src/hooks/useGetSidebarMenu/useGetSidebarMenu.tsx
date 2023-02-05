import type { MenuItem } from 'components/Sidebar'

import type { Dispatch, SetStateAction } from 'react'
import { useState } from 'react'

import { useGetRoutes } from 'hooks/useGetRoutes'
import { menuGenerator } from 'utils/route'

export const useGetSidebarMenu = (): [
  MenuItem[],
  Dispatch<SetStateAction<MenuItem[]>>,
] => {
  const { main } = useGetRoutes()

  const [menuList, setMenuList] = useState<MenuItem[]>(menuGenerator(main._))

  return [menuList, setMenuList]
}
