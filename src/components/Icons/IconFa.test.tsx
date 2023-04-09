import { render } from '@testing-library/react'

import { IconFa } from './IconFa'

jest.mock('./IconFa', () => jest.requireActual('./IconFa'))

describe('<IconFa />', () => {
  test('renders correctly', () => {
    expect.hasAssertions()

    const { container } = render(<IconFa icon='code' />)

    expect(container).toBeInTheDocument()
  })
})
