import { renderWithProviders } from 'utils/jest'

import { IconCaretLeft } from './IconCaretLeft'

describe('<IconCaretLeft />', () => {
  test('should render without crashing and match snapshot', () => {
    expect.hasAssertions()

    const { asFragment } = renderWithProviders(<IconCaretLeft />)

    expect(asFragment()).toMatchSnapshot()
  })
})
