import { render } from '@testing-library/react'

import { IconCaretLeft } from '../IconCaretLeft'

jest.mock('./IconCaretLeft', () => jest.requireActual('./IconCaretLeft'))

describe('<IconCaretLeft />', () => {
  test('renders correctly', () => {
    expect.hasAssertions()

    const { container } = render(<IconCaretLeft />)

    expect(container).toBeInTheDocument()
  })
})
