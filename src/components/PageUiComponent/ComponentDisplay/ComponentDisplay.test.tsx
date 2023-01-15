import { renderWithProviders } from 'utils/jest'

import { ComponentDisplay } from './ComponentDisplay'

jest.mock('../CodeDisplay', () => ({
  CodeDisplay: () => <div>CodeDisplay</div>,
}))

describe('<ComponentDisplay />', () => {
  test('renders correctly', () => {
    expect.assertions(1)

    const { asFragment } = renderWithProviders(
      <ComponentDisplay code='' components={<div>xxx</div>} />,
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
