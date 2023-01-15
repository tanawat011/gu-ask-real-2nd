import { renderWithProviders } from 'utils/jest'

import { Loading } from './Loading'

jest.mock('@fortawesome/react-fontawesome')

describe('<Loading />', () => {
  test('renders correctly', () => {
    expect.assertions(1)

    const { asFragment } = renderWithProviders(<Loading />)

    expect(asFragment()).toMatchSnapshot()
  })
})
