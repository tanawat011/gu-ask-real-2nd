import { renderWithProviders } from 'utils/jest'

import { SidebarFooter } from './SidebarFooter'

jest.mock('./SidebarFooter', () => jest.requireActual('./SidebarFooter'))

describe('<SidebarFooter />', () => {
  test('should render without crashing and match snapshot', () => {
    expect.hasAssertions()

    const { asFragment } = renderWithProviders(<SidebarFooter />)

    expect(asFragment()).toMatchSnapshot()
  })
})
