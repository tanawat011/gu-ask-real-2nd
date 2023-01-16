import { render } from '@testing-library/react'

import { IconBell } from '../IconBell'

describe('<IconBell />', () => {
  test('renders correctly', () => {
    expect.hasAssertions()

    const { container } = render(<IconBell />)

    expect(container).toBeInTheDocument()
  })
})
