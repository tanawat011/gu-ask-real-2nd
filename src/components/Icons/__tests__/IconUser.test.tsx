import { render } from '@testing-library/react'

import { IconUser } from '../IconUser'

describe('<IconUser />', () => {
  test('renders correctly', () => {
    expect.hasAssertions()

    const { container } = render(<IconUser />)

    expect(container).toBeInTheDocument()
  })
})
