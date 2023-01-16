import { render } from '@testing-library/react'

import { IconCopy } from '../IconCopy'

describe('<IconCopy />', () => {
  test('renders correctly', () => {
    expect.hasAssertions()

    const { container } = render(<IconCopy />)

    expect(container).toBeInTheDocument()
  })
})
