import { fireEvent, screen } from '@testing-library/react'

import { renderWithProviders } from 'utils/jest'

import { CodeDisplay } from './CodeDisplay'

jest.mock('@fortawesome/react-fontawesome')
jest.mock('react-syntax-highlighter')
jest.mock('react-syntax-highlighter/dist/esm/styles/prism', () => ({
  oneDark: {},
}))
jest.mock('components/Button', () => ({
  Button: ({ onClick }: any) => <button onClick={onClick}>Button</button>,
}))

describe('<CodeDisplay />', () => {
  test('renders correctly', () => {
    expect.assertions(1)

    const { asFragment } = renderWithProviders(<CodeDisplay code='' />)

    const buttonShowCode = screen.getAllByRole('button')[1]
    fireEvent.click(buttonShowCode)

    expect(asFragment()).toMatchSnapshot()
  })
})
