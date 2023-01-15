import { renderWithProviders } from 'utils/jest'

import { ButtonUiBlock } from '../ButtonUiBlock'

jest.mock('@fortawesome/react-fontawesome')
jest.mock('components/PageUiComponent', () => ({
  ComponentDisplay: () => <div>ComponentDisplay</div>,
  Title: () => <div>Title</div>,
}))
jest.mock('components/Button', () => ({
  Button: () => <button>Button</button>,
}))

describe('<ButtonUiBlock />', () => {
  test('renders correctly', () => {
    expect.assertions(1)

    const { asFragment } = renderWithProviders(<ButtonUiBlock />)

    expect(asFragment()).toMatchSnapshot()
  })
})
