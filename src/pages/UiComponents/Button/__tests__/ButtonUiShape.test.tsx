import { renderWithProviders } from 'utils/jest'

import { ButtonUiShape } from '../ButtonUiShape'

jest.mock('@fortawesome/react-fontawesome')
jest.mock('components/PageUiComponent', () => ({
  ComponentDisplay: () => <div>ComponentDisplay</div>,
  Title: () => <div>Title</div>,
}))
jest.mock('components/Button', () => ({
  Button: () => <button>Button</button>,
}))

describe('<ButtonUiShape />', () => {
  test('renders correctly', () => {
    expect.assertions(1)

    const { asFragment } = renderWithProviders(<ButtonUiShape />)

    expect(asFragment()).toMatchSnapshot()
  })
})
