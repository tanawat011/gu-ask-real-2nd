import { render } from '@testing-library/react'

import { IconCode } from '../IconCode'

describe('<IconCode />', () => {
  test('renders correctly', () => {
    expect.hasAssertions()

    const { container } = render(<IconCode />)

    expect(container).toBeInTheDocument()
  })
})
