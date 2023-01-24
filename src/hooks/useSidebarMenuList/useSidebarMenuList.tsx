import type { MenuItem } from 'components/Sidebar'

import type { Dispatch, SetStateAction } from 'react'
import { useState } from 'react'

import { IconHouse, IconUser } from 'components/Icons'
import { useRouteList } from 'hooks/useRouteList'
import { menuGenerator } from 'utils/route'

export const useSidebarMenuList = (): [
  MenuItem[],
  Dispatch<SetStateAction<MenuItem[]>>,
] => {
  const { mainRootRoute } = useRouteList()

  const { home, app, uiComponent } = mainRootRoute.children
  const { todo, article } = app.children
  const { input } = uiComponent.children

  const [menuList, setMenuList] = useState<MenuItem[]>([
    {
      title: 'APPS',
      children: [
        {
          to: home.fullPath,
          label: 'Home',
          icon: <IconHouse size='lg' />,
        },
        {
          label: 'Todo',
          icon: <IconHouse size='lg' />,
          children: [
            {
              to: todo.fullPath,
              label: 'Dashboard',
            },
          ],
        },
        {
          to: article.fullPath,
          label: 'Article',
          icon: <IconUser size='lg' />,
        },
      ],
    },
    {
      title: 'UI COMPONENTS',
      children: [
        {
          label: 'Input',
          icon: <IconHouse size='lg' />,
          children: menuGenerator(input.children),
        },
      ],
    },
  ])

  return [menuList, setMenuList]
}
