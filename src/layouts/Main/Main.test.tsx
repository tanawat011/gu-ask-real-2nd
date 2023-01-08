import { fireEvent, screen } from '@testing-library/react'

import { renderWithProviders } from 'utils/jest'

import { MainLayout } from './Main'

jest.mock('components/Sidebar', () => ({
  Sidebar: ({ setMenuList }: { setMenuList: () => void }) => {
    return (
      <div>
        <button data-testid='btn2' onClick={setMenuList}>
          Menu Item
        </button>
      </div>
    )
  },
}))

jest.mock('components/Navbar', () => ({
  Navbar: ({ handleToggleSidebar }: { handleToggleSidebar: () => void }) => {
    return (
      <div>
        <button data-testid='btn1' onClick={handleToggleSidebar}>
          Toggle Sidebar
        </button>
      </div>
    )
  },
}))

describe('<MainLayout />', () => {
  test('should render to match snapshot', () => {
    expect.assertions(1)

    const { asFragment } = renderWithProviders(<MainLayout />)

    const toggleSidebarButton = screen.getByTestId(/btn1/i)

    fireEvent.click(toggleSidebarButton)

    const menuItemButton = screen.getByTestId(/btn2/i)

    fireEvent.click(menuItemButton)

    expect(asFragment()).toMatchSnapshot()
  })

  test('should render to wrong location path', () => {
    expect.assertions(1)

    window.location.assign('http://localhost:3000/xxx')

    const { asFragment } = renderWithProviders(<MainLayout />)

    expect(asFragment()).toMatchSnapshot()
  })
})
