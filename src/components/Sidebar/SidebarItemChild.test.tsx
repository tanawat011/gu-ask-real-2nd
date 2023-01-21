import { renderWithProviders } from 'utils/jest'

import { SidebarItemChild } from './SidebarItemChild'

jest.mock('./SidebarItemChild', () => jest.requireActual('./SidebarItemChild'))

describe('<SidebarItemChild />', () => {
  test('should render without crashing and match snapshot', () => {
    expect.hasAssertions()

    const { asFragment } = renderWithProviders(
      <SidebarItemChild label='test' onClick={jest.fn()} fullSidebar />,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  test('should render without crashing and mini sidebar', () => {
    expect.hasAssertions()

    const { container } = renderWithProviders(
      <SidebarItemChild label='test' onClick={jest.fn()} fullSidebar={false} />,
    )

    expect(container).toBeInTheDocument()
  })

  test('should render without crashing and selected item', () => {
    expect.hasAssertions()

    const { container } = renderWithProviders(
      <SidebarItemChild
        label='test'
        onClick={jest.fn()}
        selected
        fullSidebar
      />,
    )

    expect(container).toBeInTheDocument()
  })
})
