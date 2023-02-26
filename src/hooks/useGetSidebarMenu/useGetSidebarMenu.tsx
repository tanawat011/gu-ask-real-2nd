import type { MenuItem } from 'components/Sidebar'

import type { Dispatch, SetStateAction } from 'react'
import { useState } from 'react'

import { IconHome } from 'components/Icons'
import { mainRoute } from 'routes'

export const useGetSidebarMenu = (): [
  MenuItem[],
  Dispatch<SetStateAction<MenuItem[]>>,
] => {
  const menuSidebar: MenuItem[] = [
    {
      title: ' HOME',
      children: [
        {
          label: 'Dashboard',
          to: mainRoute.home.dashboard,
          icon: <IconHome />,
        },
      ],
    },
    {
      title: 'APP',
      children: [
        {
          label: 'Todo',
          to: mainRoute.app.todo,
          icon: <IconHome />,
        },
      ],
    },
    {
      title: 'GAME',
      children: [
        {
          label: 'Sudoku',
          to: mainRoute.game.sudoku,
          icon: <IconHome />,
        },
        {
          label: 'Tic Tac Toe',
          to: mainRoute.game.ticTacToe,
          icon: <IconHome />,
        },
      ],
    },
    {
      title: 'UI COMPONENT',
      children: [
        {
          label: 'Input',
          icon: <IconHome />,
          children: [
            {
              label: 'Button',
              to: mainRoute.uiComponent.input.button,
            },
            {
              label: 'Button Group',
              to: mainRoute.uiComponent.input.buttonGroup,
            },
            {
              label: 'Calendar',
              to: mainRoute.uiComponent.input.calendar,
            },
            {
              label: 'Checkbox',
              to: mainRoute.uiComponent.input.checkbox,
            },
            {
              label: 'Date And Time',
              to: mainRoute.uiComponent.input.dateAndTime,
            },
            {
              label: 'Radio Button',
              to: mainRoute.uiComponent.input.radioButton,
            },
            {
              label: 'Rating',
              to: mainRoute.uiComponent.input.rating,
            },
            {
              label: 'Select',
              to: mainRoute.uiComponent.input.select,
            },
            {
              label: 'Slider',
              to: mainRoute.uiComponent.input.slider,
            },
            {
              label: 'Switch',
              to: mainRoute.uiComponent.input.switch,
            },
            {
              label: 'Text Field',
              to: mainRoute.uiComponent.input.textField,
            },
          ],
        },
      ],
    },
  ]

  const [menuList, setMenuList] = useState<MenuItem[]>(menuSidebar)

  return [menuList, setMenuList]
}
