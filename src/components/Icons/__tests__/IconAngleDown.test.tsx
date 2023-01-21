import { render } from '@testing-library/react'

import { IconAngleDown } from '../IconAngleDown'

jest.mock('../IconAngleDown', () => jest.requireActual('../IconAngleDown'))

describe('<IconAngleDown />', () => {
  test('renders correctly', () => {
    expect.hasAssertions()

    const { container } = render(<IconAngleDown />)

    expect(container).toBeInTheDocument()
  })
})
