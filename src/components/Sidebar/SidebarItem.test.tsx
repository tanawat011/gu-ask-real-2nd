import { renderWithProviders } from 'utils/jest'

import { SidebarItem } from './SidebarItem'

describe('<SidebarItem />', () => {
  test('should render without crashing and match snapshot', () => {
    expect.hasAssertions()

    const { asFragment } = renderWithProviders(
      <SidebarItem
        fullSidebar
        label='test'
        icon={<div>xxxx</div>}
        hasChildren
        onClick={jest.fn()}
      />,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  test('should render without crashing and mini sidebar', () => {
    expect.hasAssertions()

    const { container } = renderWithProviders(
      <SidebarItem
        fullSidebar={false}
        label='test'
        icon={<div>xxxx</div>}
        hasChildren
        onClick={jest.fn()}
        expanded
      />,
    )

    expect(container).toBeInTheDocument()
  })

  test('should render without crashing and expanded item', () => {
    expect.hasAssertions()

    const { container } = renderWithProviders(
      <SidebarItem
        fullSidebar
        label='test'
        icon={<div>xxxx</div>}
        hasChildren
        onClick={jest.fn()}
        expanded
      />,
    )

    expect(container).toBeInTheDocument()
  })

  test('should render without crashing and selected item', () => {
    expect.hasAssertions()

    const { container } = renderWithProviders(
      <SidebarItem
        fullSidebar
        label='test'
        icon={<div>xxxx</div>}
        hasChildren
        onClick={jest.fn()}
        selected
      />,
    )

    expect(container).toBeInTheDocument()
  })
})
