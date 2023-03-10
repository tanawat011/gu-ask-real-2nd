import { render } from '@testing-library/react'

import { IconHouse } from '../IconHouse'

jest.mock('../IconHouse', () => jest.requireActual('../IconHouse'))

describe('<IconHouse />', () => {
  test('renders correctly', () => {
    expect.hasAssertions()

    const { container } = render(<IconHouse />)

    expect(container).toBeInTheDocument()
  })
})
