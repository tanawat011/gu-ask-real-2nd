import type { Children } from 'types'

import { mocked } from 'jest-mock'

import { useIsScrolled } from 'hooks/useIsScrolled'
import { renderWithProviders } from 'utils/jest'

import { ButtonUi } from './Button'

jest.mock('@fortawesome/react-fontawesome')
jest.mock('components/PageUiComponent', () => ({
  ComponentDisplay: ({ children }: Children) => <div>{children}</div>,
  RightMenuContent: ({ children }: Children) => <div>{children}</div>,
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
jest.mock('components/Button', () => ({
  Button: () => <button>Button</button>,
}))
jest.mock('hooks/useIsScrolled')

describe('PageUiComponent <ButtonUi />', () => {
  test('renders correctly', () => {
    expect.assertions(1)

    const { asFragment } = renderWithProviders(<ButtonUi />)

    expect(asFragment()).toMatchSnapshot()
  })

  test('renders with scrolled', () => {
    expect.assertions(1)

    mocked(useIsScrolled).mockReturnValue(true)

    const { asFragment } = renderWithProviders(<ButtonUi />)

    expect(asFragment()).toMatchSnapshot()
  })
})
