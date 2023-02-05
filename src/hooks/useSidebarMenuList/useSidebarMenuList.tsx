import type { MenuItem } from 'components/Sidebar'

import type { Dispatch, SetStateAction } from 'react'
import { useState } from 'react'

import { useRouteList } from 'hooks/useRouteList'
import { menuGenerator } from 'utils/route'

export const useSidebarMenuList = (): [
  MenuItem[],
  Dispatch<SetStateAction<MenuItem[]>>,
] => {
  const { main } = useRouteList()

  const [menuList, setMenuList] = useState<MenuItem[]>(menuGenerator(main._))

  return [menuList, setMenuList]
}
