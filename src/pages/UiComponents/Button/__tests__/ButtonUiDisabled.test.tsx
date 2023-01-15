import { renderWithProviders } from 'utils/jest'

import { ButtonUiDisabled } from '../ButtonUiDisabled'

jest.mock('@fortawesome/react-fontawesome')
jest.mock('components/PageUiComponent', () => ({
  ComponentDisplay: () => <div>ComponentDisplay</div>,
  Title: () => <div>Title</div>,
}))
jest.mock('components/Button', () => ({
  Button: () => <button>Button</button>,
}))

describe('<ButtonUiDisabled />', () => {
  test('renders correctly', () => {
    expect.assertions(1)

    const { asFragment } = renderWithProviders(<ButtonUiDisabled />)

    expect(asFragment()).toMatchSnapshot()
  })
})
