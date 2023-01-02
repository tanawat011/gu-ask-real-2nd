import { renderWithProviders } from 'utils/jest'

import { AuthenticationLayout } from './Authentication'

describe('<AuthenticationLayout />', () => {
  test('should render', () => {
    expect.assertions(1)

    const { container } = renderWithProviders(<AuthenticationLayout />)

    expect(container).toBeInTheDocument()
  })

  test('match snapshot', () => {
    expect.assertions(1)

    window.location.assign('http://localhost:3000/auth')
    const { asFragment } = renderWithProviders(<AuthenticationLayout />, {
      router: { route: '/auth' },
    })

    expect(asFragment()).toMatchSnapshot()
  })
})
