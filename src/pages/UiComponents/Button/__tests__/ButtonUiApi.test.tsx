import { renderWithProviders } from 'utils/jest'

import { ButtonUiApi } from '../ButtonUiApi'

jest.mock('components/PageUiComponent', () => ({
  Title: () => <div>Title</div>,
}))
jest.mock('components/Table', () => ({
  Table: () => (
    <table>
      <thead>
        <tr>
          <th>1</th>
          <th>2</th>
          <th>3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>x</td>
          <td>y</td>
          <td>z</td>
        </tr>
      </tbody>
    </table>
  ),
}))

describe('<ButtonUiApi />', () => {
  test('renders correctly', () => {
    expect.assertions(1)

    const { asFragment } = renderWithProviders(<ButtonUiApi />)

    expect(asFragment()).toMatchSnapshot()
  })
})
