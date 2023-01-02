import { fireEvent, screen } from '@testing-library/react'

import { renderWithProviders } from 'utils/jest'

import { Sidebar } from './Sidebar'

describe('<Sidebar />', () => {
  test('should render without crashing and match snapshot', () => {
    expect.hasAssertions()

    const handleClickItem = jest.fn()
    const handleToggleSidebar = jest.fn()
    const menuList = [
      {
        label: 'menu-1',
        to: '/',
      },
      {
        label: 'menu-2',
        to: '/menu-2',
      },
    ]

    const { asFragment } = renderWithProviders(
      <Sidebar
        menuList={menuList}
        itemSelected=''
        fullSidebar
        handleToggleSidebar={handleToggleSidebar}
        handleClickItem={handleClickItem}
      />,
    )

    const menuItemButton1 = screen.getByText(/menu-2/i)
    fireEvent.click(menuItemButton1)

    const menuItemButton2 = screen.getByText(/menu-1/i)
    fireEvent.click(menuItemButton2)

    const toggleSidebarButton = screen.getByTestId('hamburger-btn')
    fireEvent.click(toggleSidebarButton)

    expect(asFragment()).toMatchSnapshot()
  })

  test('should render with mini sidebar', () => {
    expect.hasAssertions()

    const handleClickItem = jest.fn()
    const handleToggleSidebar = jest.fn()
    const menuList = [
      {
        label: 'menu-1',
        to: '/',
      },
      {
        label: 'menu-2',
        to: '/menu-2',
      },
    ]

    const { asFragment } = renderWithProviders(
      <Sidebar
        menuList={menuList}
        itemSelected='menu-2'
        fullSidebar={false}
        handleToggleSidebar={handleToggleSidebar}
        handleClickItem={handleClickItem}
      />,
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
