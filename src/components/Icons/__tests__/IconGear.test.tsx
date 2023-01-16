import { render } from '@testing-library/react'

import { IconGear } from '../IconGear'

describe('<IconGear />', () => {
  test('renders correctly', () => {
    expect.hasAssertions()

    const { container } = render(<IconGear />)

    expect(container).toBeInTheDocument()
  })
})
