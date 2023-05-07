import { render } from '@testing-library/react'

import { Card } from '.'

jest.mock('./Card', () => jest.requireActual('./Card'))

describe('<Card />', () => {
  test('renders correctly', async () => {
    expect.assertions(4)

    const {
      container: { firstChild },
    } = render(<Card />)

    expect(firstChild).toHaveStyleRule('border-radius', '0.5rem')
    expect(firstChild).toHaveStyleRule('padding', '1rem')
  })
})
