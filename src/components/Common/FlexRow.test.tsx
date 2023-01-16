import { render } from '@testing-library/react'

import { FlexRow } from './FlexRow'

jest.mock('./FlexRow', () => jest.requireActual('./FlexRow'))

describe('<FlexRow />', () => {
  test('renders correctly', async () => {
    expect.assertions(4)

    const {
      container: { firstChild },
    } = render(<FlexRow />)

    expect(firstChild).toHaveStyleRule('display', 'flex')
    expect(firstChild).toHaveStyleRule('flex-direction', 'row')
  })
})
