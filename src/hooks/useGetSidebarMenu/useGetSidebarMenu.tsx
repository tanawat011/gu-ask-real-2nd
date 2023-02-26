import type { MenuItem } from 'components/Sidebar'

import type { Dispatch, SetStateAction } from 'react'
import { useState } from 'react'

import { IconHome } from 'components/Icons'
import { mainRoute } from 'routes'

export const useGetSidebarMenu = (): [
  MenuItem[],
  Dispatch<SetStateAction<MenuItem[]>>,
] => {
  const { app, game, home, uiComponent } = mainRoute

  const menuSidebar: MenuItem[] = [
    {
      title: ' HOME',
      children: [
        {
          label: 'Dashboard',
          to: home.dashboard,
          icon: <IconHome />,
        },
      ],
    },
    {
      title: 'APP',
      children: [
        {
          label: 'Todo',
          to: app.todo,
          icon: <IconHome />,
        },
      ],
    },
    {
      title: 'GAME',
      children: [
        {
          label: 'Sudoku',
          to: game.sudoku,
          icon: <IconHome />,
        },
        {
          label: 'Tic Tac Toe',
          to: game.ticTacToe,
          icon: <IconHome />,
        },
      ],
    },
    {
      title: 'UI COMPONENT',
      children: [
        {
          label: 'Screen',
          icon: <IconHome />,
          children: [
            {
              label: 'Breakpoint',
              to: uiComponent.screen.breakpoint,
            },
            {
              label: 'Display',
              to: uiComponent.screen.display,
            },
            {
              label: 'Box',
              to: uiComponent.screen.box,
            },
            {
              label: 'Position',
              to: uiComponent.screen.position,
            },
            {
              label: 'Overflow',
              to: uiComponent.screen.overflow,
            },
          ],
        },
        {
          label: 'Flexbox / Grid',
          icon: <IconHome />,
          children: [
            {
              label: 'Flexbox',
              to: uiComponent.flexboxAndGrid.flex,
            },
            {
              label: 'Grid',
              to: uiComponent.flexboxAndGrid.grid,
            },
            {
              label: 'Gap',
              to: uiComponent.flexboxAndGrid.gap,
            },
            {
              label: 'Justify',
              to: uiComponent.flexboxAndGrid.justify,
            },
            {
              label: 'Align',
              to: uiComponent.flexboxAndGrid.align,
            },
            {
              label: 'Place',
              to: uiComponent.flexboxAndGrid.place,
            },
          ],
        },
        {
          label: 'Typography',
          icon: <IconHome />,
          to: uiComponent.typography,
        },
        {
          label: 'Action',
          icon: <IconHome />,
          children: [
            {
              label: 'Button',
              to: uiComponent.action.button,
            },
            {
              label: 'Button Group',
              to: uiComponent.action.buttonGroup,
            },
            {
              label: 'Dropdown',
              to: uiComponent.action.dropdown,
            },
            {
              label: 'Modal',
              to: uiComponent.action.modal,
            },
            {
              label: 'Swap',
              to: uiComponent.action.swap,
            },
          ],
        },
        {
          label: 'Data Display',
          icon: <IconHome />,
          children: [
            {
              label: 'Alert',
              to: uiComponent.dataDisplay.alert,
            },
            {
              label: 'Avatar',
              to: uiComponent.dataDisplay.avatar,
            },
            {
              label: 'Badge',
              to: uiComponent.dataDisplay.badge,
            },
            {
              label: 'Card',
              to: uiComponent.dataDisplay.card,
            },
            {
              label: 'Carousel',
              to: uiComponent.dataDisplay.carousel,
            },
            {
              label: 'Chat Bubble',
              to: uiComponent.dataDisplay.chatBubble,
            },
            {
              label: 'Collapse',
              to: uiComponent.dataDisplay.collapse,
            },
            {
              label: 'Countdown',
              to: uiComponent.dataDisplay.countdown,
            },
            {
              label: 'KBD',
              to: uiComponent.dataDisplay.kbd,
            },
            {
              label: 'Progress',
              to: uiComponent.dataDisplay.progress,
            },
            {
              label: 'Radial Progress',
              to: uiComponent.dataDisplay.radialProgress,
            },
            {
              label: 'Stat',
              to: uiComponent.dataDisplay.stat,
            },
            {
              label: 'Tooltip',
              to: uiComponent.dataDisplay.tooltip,
            },
          ],
        },
        {
          label: 'Input',
          icon: <IconHome />,
          children: [
            {
              label: 'Calendar',
              to: uiComponent.input.calendar,
            },
            {
              label: 'Checkbox',
              to: uiComponent.input.checkbox,
            },
            {
              label: 'Date And Time',
              to: uiComponent.input.dateTimeInput,
            },
            {
              label: 'Radio Button',
              to: uiComponent.input.radioButton,
            },
            {
              label: 'Rating',
              to: uiComponent.input.rating,
            },
            {
              label: 'Select',
              to: uiComponent.input.select,
            },
            {
              label: 'Range',
              to: uiComponent.input.range,
            },
            {
              label: 'Switch',
              to: uiComponent.input.switch,
            },
            {
              label: 'Text Field',
              to: uiComponent.input.textInput,
            },
          ],
        },
        {
          label: 'Table',
          icon: <IconHome />,
          to: uiComponent.table,
        },
        {
          label: 'Navigation',
          icon: <IconHome />,
          children: [
            {
              label: 'Bottom Navigation',
              to: uiComponent.navigation.bottomNavigation,
            },
            {
              label: 'Breadcrumb',
              to: uiComponent.navigation.breadcrumb,
            },
            {
              label: 'Link',
              to: uiComponent.navigation.link,
            },
            {
              label: 'Menu',
              to: uiComponent.navigation.menu,
            },
            {
              label: 'Navbar',
              to: uiComponent.navigation.navbar,
            },
            {
              label: 'Pagination',
              to: uiComponent.navigation.pagination,
            },
            {
              label: 'Steps',
              to: uiComponent.navigation.steps,
            },
            {
              label: 'Tab',
              to: uiComponent.navigation.tab,
            },
          ],
        },
        {
          label: 'Mockup',
          icon: <IconHome />,
          children: [
            {
              label: 'Code',
              to: uiComponent.mockup.code,
            },
            {
              label: 'Phone',
              to: uiComponent.mockup.phone,
            },
            {
              label: 'Window',
              to: uiComponent.mockup.window,
            },
          ],
        },
        {
          label: 'Icon',
          icon: <IconHome />,
          children: [
            {
              label: 'A',
              to: uiComponent.icon.a,
            },
            {
              label: 'B',
              to: uiComponent.icon.b,
            },
            {
              label: 'C',
              to: uiComponent.icon.c,
            },
          ],
        },
      ],
    },
  ]

  const [menuList, setMenuList] = useState<MenuItem[]>(menuSidebar)

  return [menuList, setMenuList]
}
