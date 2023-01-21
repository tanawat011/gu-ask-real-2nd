import { fireEvent, screen } from '@testing-library/react'

import { renderWithProviders } from 'utils/jest'

import { CodeDisplay } from './CodeDisplay'

jest.mock('./CodeDisplay', () => jest.requireActual('./CodeDisplay'))

describe('<CodeDisplay />', () => {
  test('renders correctly', () => {
    expect.assertions(2)

    const callback = jest.fn()

    const { asFragment } = renderWithProviders(
      <CodeDisplay code='xxx' callback={callback} />,
    )

    const buttonShowCode = screen.getAllByRole('button')[1]
    fireEvent.click(buttonShowCode)

    expect(callback).toHaveBeenCalledTimes(1)
    expect(asFragment()).toMatchSnapshot()
  })
})
