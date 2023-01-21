import { render } from '@testing-library/react'

import { IconSpinner } from '../IconSpinner'

jest.mock('../IconSpinner', () => jest.requireActual('../IconSpinner'))

describe('<IconSpinner />', () => {
  test('renders correctly', () => {
    expect.hasAssertions()

    const { container } = render(<IconSpinner />)

    expect(container).toBeInTheDocument()
  })
})
