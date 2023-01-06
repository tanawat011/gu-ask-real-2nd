import { fireEvent, screen } from '@testing-library/react'

import { renderWithProviders } from 'utils/jest'

import { Sidebar } from './Sidebar'

describe('<Sidebar />', () => {
  test('should render without crashing and match snapshot', () => {
    expect.hasAssertions()

    const menuList = [
      {
        title: 'APPS',
        children: [
          {
            to: '/',
            label: 'Todo',
            icon: <div>xxx</div>,
          },
          {
            to: '/',
            label: 'Article',
            icon: <div>xxx</div>,
          },
        ],
      },
    ]

    const { asFragment } = renderWithProviders(
      <Sidebar menuList={menuList} setMenuList={jest.fn()} />,
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

    const menuList = [
      {
        title: 'APPS',
        children: [
          {
            to: '/',
            label: 'Todo',
            icon: <div>xxx</div>,
          },
          {
            to: '/',
            label: 'Article',
            icon: <div>xxx</div>,
          },
        ],
      },
    ]

    const { asFragment } = renderWithProviders(
      <Sidebar menuList={menuList} setMenuList={jest.fn()} />,
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
