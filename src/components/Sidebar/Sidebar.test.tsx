import { renderWithProviders } from 'utils/jest'

import { Sidebar } from './Sidebar'

jest.mock('./SidebarHeader')
jest.mock('./SidebarContent')
jest.mock('./SidebarFooter')

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
      <Sidebar menuList={menuList} setMenuList={jest.fn()} fullSidebar />,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  test('should render without crashing and match snapshot with mini sidebar', () => {
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
      <Sidebar menuList={menuList} setMenuList={jest.fn()} fullSidebar={false} />,
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
