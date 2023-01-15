import { mocked } from 'jest-mock'

import { useIsScrolled } from 'hooks/useIsScrolled'
import { renderWithProviders } from 'utils/jest'

import { RightMenuButtonUi } from '../RightMenuButtonUi'

jest.mock('@fortawesome/react-fontawesome')
jest.mock('components/PageUiComponent', () => ({
  RightMenuContent: () => <div>RightMenuContent</div>,
}))
jest.mock('hooks/useIsScrolled')

describe('<RightMenuButtonUi />', () => {
  test('renders correctly', () => {
    expect.assertions(1)

    const { asFragment } = renderWithProviders(<RightMenuButtonUi />)

    expect(asFragment()).toMatchSnapshot()
  })

  test('renders correctly and scrolled', () => {
    expect.assertions(1)

    mocked(useIsScrolled).mockReturnValue(true)

    const { asFragment } = renderWithProviders(<RightMenuButtonUi />)

    expect(asFragment()).toMatchSnapshot()
  })
})
