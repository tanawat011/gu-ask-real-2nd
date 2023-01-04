import type { MenuItem } from 'components/Sidebar'

import type { Dispatch, SetStateAction } from 'react'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { mainRoutes } from 'Routes'

export const useSidebarMenuList = (): [MenuItem[], Dispatch<SetStateAction<MenuItem[]>>] => {
  const { home, todo, article, component } = mainRoutes.children
  const { button, card, input } = component.children

  const [menuList, setMenuList] = useState<MenuItem[]>([
    {
      title: 'APPS',
      children: [
        {
          to: home.fullPath,
          label: 'Home',
          icon: <FontAwesomeIcon icon='house' size='lg' />,
        },
        {
          label: 'Todo',
          icon: <FontAwesomeIcon icon='house' size='lg' />,
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
          icon: <FontAwesomeIcon icon='user' size='lg' />,
        },
      ],
    },
    {
      title: 'UI COMPONENTS',
      children: [
        {
          label: 'Common',
          icon: <FontAwesomeIcon icon='house' size='lg' />,
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
          icon: <FontAwesomeIcon icon='house' size='lg' />,
        },
        {
          to: input.fullPath,
          label: 'Input',
          icon: <FontAwesomeIcon icon='user' size='lg' />,
        },
      ],
    },
  ])

  return [menuList, setMenuList]
}
