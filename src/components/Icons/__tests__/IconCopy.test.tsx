import { render } from '@testing-library/react'

import { IconCopy } from '../IconCopy'

jest.mock('../IconCopy', () => jest.requireActual('../IconCopy'))

describe('<IconCopy />', () => {
  test('renders correctly', () => {
    expect.hasAssertions()

    const { container } = render(<IconCopy />)

    expect(container).toBeInTheDocument()
  })
})
