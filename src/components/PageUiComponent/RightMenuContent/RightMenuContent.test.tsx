import { renderWithProviders } from 'utils/jest'

import { RightMenuContent } from './RightMenuContent'

jest.mock('./RightMenuContent', () => jest.requireActual('./RightMenuContent'))

describe('<RightMenuContent />', () => {
  test('renders correctly', () => {
    expect.assertions(1)

    const { asFragment } = renderWithProviders(
      <RightMenuContent
        title='Title'
        currentScrollPosition={0}
        menuList={[
          { id: '', title: 'Variant', scroll: { min: 0, max: 0 } },
          { id: '', title: 'Color', scroll: { min: 0, max: 0 } },
          { id: '', title: 'Size', scroll: { min: 0, max: 0 } },
        ]}
      />,
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
