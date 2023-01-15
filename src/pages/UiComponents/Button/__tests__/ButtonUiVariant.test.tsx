import { renderWithProviders } from 'utils/jest'

import { ButtonUiVariant } from '../ButtonUiVariant'

jest.mock('@fortawesome/react-fontawesome')
jest.mock('components/PageUiComponent', () => ({
  ComponentDisplay: () => <div>ComponentDisplay</div>,
  Title: () => <div>Title</div>,
}))
jest.mock('components/Button', () => ({
  Button: () => <button>Button</button>,
}))

describe('<ButtonUiVariant />', () => {
  test('renders correctly', () => {
    expect.assertions(1)

    const { asFragment } = renderWithProviders(<ButtonUiVariant />)

    expect(asFragment()).toMatchSnapshot()
  })
})
