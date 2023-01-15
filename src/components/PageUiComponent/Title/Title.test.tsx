import { renderWithProviders } from 'utils/jest'

import { Title } from './Title'

describe('<Title />', () => {
  test('renders correctly', () => {
    expect.assertions(1)

    const { asFragment } = renderWithProviders(<Title title='Title' />)

    expect(asFragment()).toMatchSnapshot()
  })
})
