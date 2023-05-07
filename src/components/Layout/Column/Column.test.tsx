import { render } from '@testing-library/react'

import { Column } from './Column'

jest.mock('./Column', () => jest.requireActual('./Column'))

describe('<Column />', () => {
  test('renders correctly', async () => {
    expect.assertions(4)

    const {
      container: { firstChild },
    } = render(<Column />)

    expect(firstChild).toHaveStyleRule('display', 'flex')
    expect(firstChild).toHaveStyleRule('flex-direction', 'column')
  })
})
