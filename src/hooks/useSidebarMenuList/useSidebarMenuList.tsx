import type { MenuItem } from 'components/Sidebar'

import type { Dispatch, SetStateAction } from 'react'
import { useState } from 'react'

import { IconHouse, IconUser } from 'components/Icons'
import { useRouteList } from 'hooks/useRouteList'

export const useSidebarMenuList = (): [MenuItem[], Dispatch<SetStateAction<MenuItem[]>>] => {
  const { mainRoutes } = useRouteList()

  const { home, todo, article, component } = mainRoutes.children
  const { button, card, input } = component.children

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
          label: 'Common',
          icon: <IconHouse size='lg' />,
          children: [
            {
              to: card.fullPath,
              label: 'Card',
            },
          ],
        },
        {
          to: button.fullPath,
          label: 'Button',
          icon: <IconHouse size='lg' />,
        },
        {
          to: input.fullPath,
          label: 'Input',
          icon: <IconUser size='lg' />,
        },
      ],
    },
  ])

  return [menuList, setMenuList]
}
