import { renderWithProviders } from 'utils/jest'

import { SidebarHeader } from './SidebarHeader'

describe('<SidebarHeader />', () => {
  test('should render without crashing and match snapshot', () => {
    expect.hasAssertions()

    const { asFragment } = renderWithProviders(<SidebarHeader fullSidebar />)

    expect(asFragment()).toMatchSnapshot()
  })
})
