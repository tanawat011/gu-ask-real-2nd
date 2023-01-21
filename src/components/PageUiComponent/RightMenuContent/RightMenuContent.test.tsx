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
        pageHeight={100}
        menuList={[
          { title: 'Variant', scroll: 0 },
          { title: 'Color', scroll: 12 },
          { title: 'Size', scroll: 32 },
        ]}
      />,
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
