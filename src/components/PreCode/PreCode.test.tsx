import { render } from '@testing-library/react'

import { PreCode } from '../PreCode'

jest.mock('./PreCode', () => jest.requireActual('./PreCode'))

describe('<PreCode />', () => {
  test('renders correctly', () => {
    expect.hasAssertions()

    const { container } = render(<PreCode text='xxx' />)

    expect(container).toBeInTheDocument()
  })
})
