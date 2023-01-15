import { renderWithProviders } from 'utils/jest'

import { ButtonUi } from '../ButtonUi'

jest.mock('components/PageUiComponent', () => ({
  Title: () => <div>Title</div>,
}))
jest.mock('../ButtonUiApi')
jest.mock('../ButtonUiBlock')
jest.mock('../ButtonUiDisabled')
jest.mock('../ButtonUiIcon')
jest.mock('../ButtonUiLoading')
jest.mock('../ButtonUiOutline')
jest.mock('../ButtonUiShape')
jest.mock('../ButtonUiSize')
jest.mock('../ButtonUiVariant')
jest.mock('../ButtonUiWithIcon')
jest.mock('../RightMenuButtonUi')

describe('<ButtonUi />', () => {
  test('renders correctly', () => {
    expect.assertions(1)

    const { asFragment } = renderWithProviders(<ButtonUi />)

    expect(asFragment()).toMatchSnapshot()
  })
})
