import { render } from '@testing-library/react'

import { IconHome } from '../IconHome'

describe('<IconHome />', () => {
  test('renders correctly', () => {
    expect.hasAssertions()

    const { container } = render(<IconHome />)

    expect(container).toBeInTheDocument()
  })
})
