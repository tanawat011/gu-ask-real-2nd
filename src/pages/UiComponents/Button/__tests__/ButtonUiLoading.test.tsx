import { renderWithProviders } from 'utils/jest'

import { ButtonUiLoading } from '../ButtonUiLoading'

jest.mock('@fortawesome/react-fontawesome')
jest.mock('components/PageUiComponent', () => ({
  ComponentDisplay: () => <div>ComponentDisplay</div>,
  Title: () => <div>Title</div>,
}))
jest.mock('components/Button', () => ({
  Button: () => <button>Button</button>,
}))

describe('<ButtonUiLoading />', () => {
  test('renders correctly', () => {
    expect.assertions(1)

    const { asFragment } = renderWithProviders(<ButtonUiLoading />)

    expect(asFragment()).toMatchSnapshot()
  })
})
