import { renderWithProviders } from 'utils/jest'

import { Popover } from './Popover'

describe('<Popover />', () => {
  test('should render without crashing and match snapshot', () => {
    expect.hasAssertions()

    const { asFragment } = renderWithProviders(<Popover text='xxx' />)

    expect(asFragment()).toMatchSnapshot()
  })

  test('should render without crashing with mini sidebar', () => {
    expect.hasAssertions()

    const { asFragment } = renderWithProviders(
      <Popover>
        <div>xxx</div>
      </Popover>,
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
