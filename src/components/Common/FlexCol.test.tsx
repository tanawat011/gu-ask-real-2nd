import { render } from '@testing-library/react'

import { FlexCol } from './FlexCol'

jest.mock('./FlexCol', () => jest.requireActual('./FlexCol'))

describe('<FlexCol />', () => {
  test('renders correctly', async () => {
    expect.assertions(4)

    const {
      container: { firstChild },
    } = render(<FlexCol />)

    expect(firstChild).toHaveStyleRule('display', 'flex')
    expect(firstChild).toHaveStyleRule('flex-direction', 'column')
  })
})
