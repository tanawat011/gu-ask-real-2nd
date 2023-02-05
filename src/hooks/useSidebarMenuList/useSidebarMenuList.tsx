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
  const { main } = useRouteList()

  const { home, app, uiComponent, demoApp } = main.children
  const { todo, article } = app.children
  const { sudoku, todo: demoTodo, ticTacToe } = demoApp.children
  const { input } = uiComponent.children

  const [menuList, setMenuList] = useState<MenuItem[]>([
    {
      title: 'HOME',
      children: [
        {
          to: home.fullPath,
          label: 'Dashboard',
          icon: <IconHouse size='lg' />,
        },
      ],
    },
    {
      title: 'APPS',
      children: [
        {
          label: 'Todo',
          icon: <IconHouse size='lg' />,
          children: menuGenerator(todo.children),
        },
        {
          to: article.fullPath,
          label: 'Article',
          icon: <IconUser size='lg' />,
        },
      ],
    },
    {
      title: 'DEMO APPS',
      children: [
        {
          to: sudoku.fullPath,
          label: 'Sudoku',
          icon: <IconHouse size='lg' />,
        },
        {
          to: demoTodo.fullPath,
          label: 'Todo',
          icon: <IconHouse size='lg' />,
        },
        {
          to: ticTacToe.fullPath,
          label: 'Tic Tac Toe',
          icon: <IconHouse size='lg' />,
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
