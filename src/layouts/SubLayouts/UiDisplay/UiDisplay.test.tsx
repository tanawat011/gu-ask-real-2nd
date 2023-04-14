import { renderWithProviders } from 'utils/jest'

import { UiDisplayLayout } from './UiDisplay'

describe('<UiDisplayLayout />', () => {
  test('should render', () => {
    expect.assertions(1)

    const { container } = renderWithProviders(<UiDisplayLayout />)

    expect(container).toBeInTheDocument()
  })

  test('match snapshot', () => {
    expect.assertions(1)

    window.location.assign('http://localhost:3000/auth')
    const { asFragment } = renderWithProviders(<UiDisplayLayout />, {
      router: { route: '/ui-component' },
    })

    expect(asFragment()).toMatchSnapshot()
  })
})
