import { render } from '@testing-library/react'

import { IconBars } from '../IconBars'

describe('<IconBars />', () => {
  test('renders correctly', () => {
    expect.hasAssertions()

    const { container } = render(<IconBars />)

    expect(container).toBeInTheDocument()
  })
})
