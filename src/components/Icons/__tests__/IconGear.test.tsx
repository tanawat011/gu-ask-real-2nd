import { render } from '@testing-library/react'

import { IconGear } from '../IconGear'

jest.mock('../IconGear', () => jest.requireActual('../IconGear'))

describe('<IconGear />', () => {
  test('renders correctly', () => {
    expect.hasAssertions()

    const { container } = render(<IconGear />)

    expect(container).toBeInTheDocument()
  })
})
