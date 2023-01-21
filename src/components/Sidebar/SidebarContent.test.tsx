import type { MenuItem } from './Sidebar'

import { fireEvent, screen, waitFor } from '@testing-library/react'

import { renderWithProviders } from 'utils/jest'

import { SidebarContent } from './SidebarContent'

jest.mock('./SidebarContent', () => jest.requireActual('./SidebarContent'))
jest.mock('./SidebarItem', () => ({
  SidebarItem: ({ onClick }: { onClick: () => void }) => (
    <div onClick={onClick}>sidebar item</div>
  ),
}))
jest.mock('./SidebarItemChild', () => ({
  SidebarItemChild: ({ onClick }: { onClick: () => void }) => (
    <div onClick={onClick}>sidebar item child</div>
  ),
}))

let menuList: MenuItem[] = [
  {
    title: 'APPS',
    children: [
      {
        to: '/todo',
        label: 'Todo',
        icon: <div>xxx</div>,
      },
      {
        label: 'Article',
        icon: <div>xxx</div>,
        expanded: true,
        children: [
          {
            to: '/sub-article',
            label: 'Sub Article',
          },
        ],
      },
    ],
  },
]

let menuListNoRoute: MenuItem[] = [
  {
    title: 'APPS',
    children: [
      {
        to: '',
        label: 'Todo',
        icon: <div>xxx</div>,
      },
      {
        label: 'Article',
        icon: <div>xxx</div>,
        children: [
          {
            to: '',
            label: 'Sub Article',
          },
        ],
      },
    ],
  },
]

describe('<SidebarContent />', () => {
  test('should render without crashing and match snapshot', async () => {
    expect.hasAssertions()

    const setMenuList = (newList: MenuItem[]) => {
      menuList = newList
    }

    const { asFragment } = renderWithProviders(
      <SidebarContent
        fullSidebar
        menuList={menuList}
        setMenuList={setMenuList}
      />,
    )

    const item = screen.getAllByText(/sidebar item/i)
    fireEvent.click(item[0])
    fireEvent.click(item[1])

    const itemChild = screen.getByText(/sidebar item child/i)
    fireEvent.click(itemChild)

    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot()
    })
  })

  test('should render without crashing and mini sidebar', async () => {
    expect.hasAssertions()

    const setMenuList = (newList: MenuItem[]) => {
      menuList = newList
    }

    const { asFragment } = renderWithProviders(
      <SidebarContent
        fullSidebar={false}
        menuList={menuList}
        setMenuList={setMenuList}
      />,
    )

    const item2 = screen.getAllByText(/sidebar item/i)[1]
    fireEvent.click(item2)

    const itemChild = screen.getByText(/sidebar item child/i)
    fireEvent.click(itemChild)

    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot()
    })
  })

  test('should render without crashing and full sidebar but no route', async () => {
    expect.hasAssertions()

    const setMenuList = (newList: MenuItem[]) => {
      menuListNoRoute = newList
    }

    const { asFragment } = renderWithProviders(
      <SidebarContent
        fullSidebar
        menuList={menuListNoRoute}
        setMenuList={setMenuList}
      />,
    )

    const item = screen.getAllByText(/sidebar item/i)
    fireEvent.click(item[0])
    fireEvent.click(item[1])

    const itemChild = screen.getByText(/sidebar item child/i)
    fireEvent.click(itemChild)

    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot()
    })
  })

  test('should render without crashing and mini sidebar but no route', async () => {
    expect.hasAssertions()

    const setMenuList = (newList: MenuItem[]) => {
      menuListNoRoute = newList
    }

    const { asFragment } = renderWithProviders(
      <SidebarContent
        fullSidebar={false}
        menuList={menuListNoRoute}
        setMenuList={setMenuList}
      />,
    )

    const item2 = screen.getAllByText(/sidebar item/i)[1]
    fireEvent.click(item2)

    const itemChild = screen.getByText(/sidebar item child/i)
    fireEvent.click(itemChild)

    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot()
    })
  })
})
