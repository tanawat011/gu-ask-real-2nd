import type { MenuItem } from 'components/Sidebar'

import type { Dispatch, SetStateAction } from 'react'
import { useState } from 'react'

import { IconFa } from 'components/Icons'
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
          icon: <IconFa icon='home' />,
        },
      ],
    },
    {
      title: 'APP',
      children: [
        {
          label: 'Todo',
          to: app.todo,
          icon: <IconFa icon='home' />,
        },
      ],
    },
    {
      title: 'GAME',
      children: [
        {
          label: 'Sudoku',
          to: game.sudoku,
          icon: <IconFa icon='home' />,
        },
        {
          label: 'Tic Tac Toe',
          to: game.ticTacToe,
          icon: <IconFa icon='home' />,
        },
      ],
    },
    {
      title: 'UI COMPONENT',
      children: [
        {
          label: 'Screen',
          icon: <IconFa icon='home' />,
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
          icon: <IconFa icon='home' />,
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
          icon: <IconFa icon='home' />,
          to: uiComponent.typography,
        },
        {
          label: 'Action',
          icon: <IconFa icon='home' />,
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
          icon: <IconFa icon='home' />,
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
          icon: <IconFa icon='home' />,
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
              to: uiComponent.input.textField,
            },
          ],
        },
        {
          label: 'Table',
          icon: <IconFa icon='home' />,
          to: uiComponent.table,
        },
        {
          label: 'Navigation',
          icon: <IconFa icon='home' />,
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
          icon: <IconFa icon='home' />,
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
          icon: <IconFa icon='home' />,
          children: [
            {
              label: 'Font Awesome',
              to: uiComponent.icon.fontAwesome,
            },
          ],
        },
      ],
    },
  ]

  const [menuList, setMenuList] = useState<MenuItem[]>(menuSidebar)

  return [menuList, setMenuList]
}
