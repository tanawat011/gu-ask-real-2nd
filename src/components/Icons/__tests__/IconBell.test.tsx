import { render } from '@testing-library/react'

import { IconBell } from '../IconBell'

jest.mock('./IconBell', () => jest.requireActual('./IconBell'))

describe('<IconBell />', () => {
  test('renders correctly', () => {
    expect.hasAssertions()

    const { container } = render(<IconBell />)

    expect(container).toBeInTheDocument()
  })
})
