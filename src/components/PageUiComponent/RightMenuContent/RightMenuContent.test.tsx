import { renderWithProviders } from 'utils/jest'

import { RightMenuContent } from './RightMenuContent'

jest.mock('../Title', () => ({
  Title: () => <div>Title</div>,
}))

describe('<RightMenuContent />', () => {
  test('renders correctly', () => {
    expect.assertions(1)

    const { asFragment } = renderWithProviders(
      <RightMenuContent title='Title' menuList={['1', '2', '3']} />,
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
