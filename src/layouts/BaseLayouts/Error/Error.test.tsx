import { renderWithProviders } from 'utils/jest'

import { ErrorLayout } from './Error'

describe('<ErrorLayout />', () => {
  test('match snapshot', () => {
    expect.assertions(1)

    const { asFragment } = renderWithProviders(<ErrorLayout />)

    expect(asFragment()).toMatchSnapshot()
  })
})
