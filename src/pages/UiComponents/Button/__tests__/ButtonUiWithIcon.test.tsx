import { renderWithProviders } from 'utils/jest'

import { ButtonUiWithIcon } from '../ButtonUiWithIcon'

jest.mock('@fortawesome/react-fontawesome')
jest.mock('components/PageUiComponent', () => ({
  ComponentDisplay: () => <div>ComponentDisplay</div>,
  Title: () => <div>Title</div>,
}))
jest.mock('components/Button', () => ({
  Button: () => <button>Button</button>,
}))

describe('<ButtonUiWithIcon />', () => {
  test('renders correctly', () => {
    expect.assertions(1)

    const { asFragment } = renderWithProviders(<ButtonUiWithIcon />)

    expect(asFragment()).toMatchSnapshot()
  })
})
