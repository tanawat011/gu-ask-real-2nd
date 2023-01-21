import { render } from '@testing-library/react'

import { IconHome } from '../IconHome'

jest.mock('./IconHome', () => jest.requireActual('./IconHome'))

describe('<IconHome />', () => {
  test('renders correctly', () => {
    expect.hasAssertions()

    const { container } = render(<IconHome />)

    expect(container).toBeInTheDocument()
  })
})
