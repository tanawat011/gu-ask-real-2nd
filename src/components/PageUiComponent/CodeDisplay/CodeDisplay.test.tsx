import { fireEvent, screen } from '@testing-library/react'

import { renderWithProviders } from 'utils/jest'

import { CodeDisplay } from './CodeDisplay'

jest.mock('./CodeDisplay', () => jest.requireActual('./CodeDisplay'))

describe('<CodeDisplay />', () => {
  test('renders correctly', () => {
    expect.assertions(1)

    const { asFragment } = renderWithProviders(<CodeDisplay code='xxx' />)

    const buttonShowCode = screen.getAllByRole('button')[1]
    fireEvent.click(buttonShowCode)

    expect(asFragment()).toMatchSnapshot()
  })
})
