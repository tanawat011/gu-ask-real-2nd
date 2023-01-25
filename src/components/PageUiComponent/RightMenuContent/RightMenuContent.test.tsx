import { renderWithProviders } from 'utils/jest'

import { RightMenuContent } from './RightMenuContent'

jest.mock('./RightMenuContent', () => jest.requireActual('./RightMenuContent'))

describe('<RightMenuContent />', () => {
  test('renders correctly', () => {
    expect.assertions(1)

    const { asFragment } = renderWithProviders(
      <RightMenuContent
        containerId='container-id'
        title='Title'
        menuList={['Variant', 'Color', 'Size']}
      />,
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
