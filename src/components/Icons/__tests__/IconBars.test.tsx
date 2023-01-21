import { render } from '@testing-library/react'

import { IconBars } from '../IconBars'

jest.mock('../IconBars', () => jest.requireActual('../IconBars'))

describe('<IconBars />', () => {
  test('renders correctly', () => {
    expect.hasAssertions()

    const { container } = render(<IconBars />)

    expect(container).toBeInTheDocument()
  })
})
