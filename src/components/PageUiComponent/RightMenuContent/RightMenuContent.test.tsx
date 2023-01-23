import { renderWithProviders } from 'utils/jest'

import { RightMenuContent } from './RightMenuContent'

jest.mock('./RightMenuContent', () => jest.requireActual('./RightMenuContent'))

describe('<RightMenuContent />', () => {
  test('renders correctly', () => {
    expect.assertions(1)

    const { asFragment } = renderWithProviders(
      <RightMenuContent
        title='Title'
        menuList={[{ title: 'Variant' }, { title: 'Color' }, { title: 'Size' }]}
      />,
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
