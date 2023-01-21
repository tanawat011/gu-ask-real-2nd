import { render } from '@testing-library/react'

import { Popover } from './Popover'

jest.mock('./Popover', () => jest.requireActual('./Popover'))

describe('<Popover />', () => {
  test('should render without crashing and match snapshot', () => {
    expect.hasAssertions()

    const { asFragment } = render(<Popover text='xxx' />)

    expect(asFragment()).toMatchSnapshot()
  })

  test('should render without crashing with mini sidebar', () => {
    expect.hasAssertions()

    const { asFragment } = render(
      <Popover>
        <div>xxx</div>
      </Popover>,
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
