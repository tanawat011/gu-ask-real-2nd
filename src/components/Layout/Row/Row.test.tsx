import { render } from '@testing-library/react'

import { Row } from './Row'

jest.mock('./Row', () => jest.requireActual('./Row'))

describe('<Row />', () => {
  test('renders correctly', async () => {
    expect.assertions(4)

    const {
      container: { firstChild },
    } = render(<Row />)

    expect(firstChild).toHaveStyleRule('display', 'flex')
    expect(firstChild).toHaveStyleRule('flex-direction', 'row')
  })
})
