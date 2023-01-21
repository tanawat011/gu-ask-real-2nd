import { render } from '@testing-library/react'

import { IconCode } from '../IconCode'

jest.mock('./IconCode', () => jest.requireActual('./IconCode'))

describe('<IconCode />', () => {
  test('renders correctly', () => {
    expect.hasAssertions()

    const { container } = render(<IconCode />)

    expect(container).toBeInTheDocument()
  })
})
