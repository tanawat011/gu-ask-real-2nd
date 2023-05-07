import { screen } from '@testing-library/react'

import { Button } from 'components/Common'
import { renderWithProviders } from 'utils/jest'

import { ButtonGroup } from './ButtonGroup'

jest.mock('./ButtonGroup', () => jest.requireActual('./ButtonGroup'))

describe('<ButtonGroup />', () => {
  test('renders correctly', async () => {
    expect.assertions(15)

    const {
      asFragment,
      container: { firstChild },
    } = renderWithProviders(
      <ButtonGroup color='amber-200'>
        <Button label='First' />
        <Button label='Second' />
        <Button label='Third' />
      </ButtonGroup>,
    )

    const buttons = screen.getAllByRole('button')

    buttons.forEach((button) => {
      expect(button).toHaveAttribute('color', 'amber-200')
      expect(button).toHaveStyle('border-radius: 0px')
    })

    expect(buttons[0]).toHaveStyle('border-top-left-radius: 0.375rem')
    expect(buttons[0]).toHaveStyle('border-bottom-left-radius: 0.375rem')
    expect(buttons[2]).toHaveStyle('border-top-right-radius: 0.375rem')
    expect(buttons[2]).toHaveStyle('border-bottom-right-radius: 0.375rem')
    expect(buttons.length).toEqual(3)

    expect(firstChild).toHaveStyle('display: flex')
    expect(firstChild).toHaveAttribute('shape', 'rounded')
    expect(firstChild?.hasChildNodes()).toEqual(true)
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders correctly without children element', async () => {
    expect.assertions(1)

    const {
      container: { firstChild },
    } = renderWithProviders(<ButtonGroup>x</ButtonGroup>)

    expect(firstChild?.hasChildNodes()).toEqual(false)
  })

  test('renders correctly with other variant', async () => {
    expect.assertions(4)

    renderWithProviders(
      <ButtonGroup variant='outline'>
        <Button label='First' />
        <Button label='Second' />
        <Button label='Third' />
      </ButtonGroup>,
    )

    const buttons = screen.getAllByRole('button')

    buttons.forEach((button) => {
      expect(button).toHaveAttribute('variant', 'outline')
    })

    expect(buttons.length).toEqual(3)
  })

  test('renders correctly with other variant in each item', async () => {
    expect.assertions(4)

    renderWithProviders(
      <ButtonGroup variant='outline'>
        <Button label='First' variant='tertiary' />
        <Button label='Second' />
        <Button label='Third' variant='primary' />
      </ButtonGroup>,
    )

    const buttons = screen.getAllByRole('button')

    expect(buttons[0]).toHaveAttribute('variant', 'tertiary')
    expect(buttons[1]).toHaveAttribute('variant', 'outline')
    expect(buttons[2]).toHaveAttribute('variant', 'primary')

    expect(buttons.length).toEqual(3)
  })

  test('renders correctly with `shadow` variant', async () => {
    expect.assertions(21)

    const {
      container: { firstChild },
    } = renderWithProviders(
      <ButtonGroup variant='shadow'>
        <Button label='First' />
        <Button label='Second' />
        <Button label='Third' />
      </ButtonGroup>,
    )

    const buttons = screen.getAllByRole('button')

    buttons.forEach((button) => {
      expect(button).toHaveAttribute('variant', 'shadow')
      expect(button).toHaveStyle('--tw-shadow: 0 0 #0000')
      expect(button).toHaveStyle('--tw-shadow-colored: 0 0 #0000')
    })

    expect(buttons.length).toEqual(3)

    expect(buttons[0]).toHaveStyle('border-top-left-radius: 0.375rem')
    expect(buttons[0]).toHaveStyle('border-bottom-left-radius: 0.375rem')
    expect(buttons[2]).toHaveStyle('border-top-right-radius: 0.375rem')
    expect(buttons[2]).toHaveStyle('border-bottom-right-radius: 0.375rem')

    expect(firstChild).toHaveStyle('border-radius: 0.375rem')
    expect(firstChild).toHaveStyle('--tw-shadow-color: #4f46e5')
    expect(firstChild).toHaveStyle('--tw-shadow: var(--tw-shadow-colored)')
    expect(firstChild).toHaveStyleRule('--tw-shadow-color', '#4f46e5cc', {
      modifier: ':hover',
    })
    expect(firstChild).toHaveStyleRule('--tw-shadow-color', '#4f46e5b3', {
      modifier: ':active',
    })
  })

  test('renders correctly with other color', async () => {
    expect.assertions(4)

    renderWithProviders(
      <ButtonGroup color='amber-900'>
        <Button label='First' />
        <Button label='Second' />
        <Button label='Third' />
      </ButtonGroup>,
    )

    const buttons = screen.getAllByRole('button')

    expect(buttons[0]).toHaveAttribute('color', 'amber-900')
    expect(buttons[1]).toHaveAttribute('color', 'amber-900')
    expect(buttons[2]).toHaveAttribute('color', 'amber-900')

    expect(buttons.length).toEqual(3)
  })

  test('renders correctly with other color in each item', async () => {
    expect.assertions(4)

    renderWithProviders(
      <ButtonGroup color='amber-900'>
        <Button label='First' color='cyan-50' />
        <Button label='Second' />
        <Button label='Third' color='green-500' />
      </ButtonGroup>,
    )

    const buttons = screen.getAllByRole('button')

    expect(buttons[0]).toHaveAttribute('color', 'cyan-50')
    expect(buttons[1]).toHaveAttribute('color', 'amber-900')
    expect(buttons[2]).toHaveAttribute('color', 'green-500')

    expect(buttons.length).toEqual(3)
  })

  test('renders correctly with other color together with `shadow` variant', async () => {
    expect.assertions(14)

    const {
      container: { firstChild },
    } = renderWithProviders(
      <ButtonGroup variant='shadow' color='amber-900'>
        <Button label='First' />
        <Button label='Second' />
        <Button label='Third' />
      </ButtonGroup>,
    )

    const buttons = screen.getAllByRole('button')

    buttons.forEach((button) => {
      expect(button).toHaveAttribute('variant', 'shadow')
      expect(button).toHaveAttribute('color', 'amber-900')
    })

    expect(buttons.length).toEqual(3)

    expect(firstChild).toHaveStyle('border-radius: 0.375rem')
    expect(firstChild).toHaveStyle('--tw-shadow-color: #78350f')
    expect(firstChild).toHaveStyle('--tw-shadow: var(--tw-shadow-colored)')
    expect(firstChild).toHaveStyleRule('--tw-shadow-color', '#78350fcc', {
      modifier: ':hover',
    })
    expect(firstChild).toHaveStyleRule('--tw-shadow-color', '#78350fb3', {
      modifier: ':active',
    })
  })

  test('renders correctly with other size', async () => {
    expect.assertions(4)

    renderWithProviders(
      <ButtonGroup size='sm'>
        <Button label='First' />
        <Button label='Second' />
        <Button label='Third' />
      </ButtonGroup>,
    )

    const buttons = screen.getAllByRole('button')

    buttons.forEach((button) => {
      expect(button).toHaveAttribute('data-size', 'sm')
    })

    expect(buttons.length).toEqual(3)
  })

  test('renders correctly with shape `square`', async () => {
    expect.assertions(5)

    const {
      container: { firstChild },
    } = renderWithProviders(
      <ButtonGroup shape='square'>
        <Button label='First' />
        <Button label='Second' />
        <Button label='Third' />
      </ButtonGroup>,
    )

    const buttons = screen.getAllByRole('button')

    buttons.forEach((button) => {
      expect(button).toHaveStyle('border-radius: 0px')
    })

    expect(buttons.length).toEqual(3)
    expect(firstChild).toHaveAttribute('shape', 'square')
  })

  test('renders correctly with shape `circle`', async () => {
    expect.assertions(9)

    const {
      container: { firstChild },
    } = renderWithProviders(
      <ButtonGroup shape='circle'>
        <Button label='First' />
        <Button label='Second' />
        <Button label='Third' />
      </ButtonGroup>,
    )

    const buttons = screen.getAllByRole('button')

    buttons.forEach((button) => {
      expect(button).toHaveStyle('border-radius: 0px')
    })

    expect(buttons[0]).toHaveStyle('border-top-left-radius: 9999px')
    expect(buttons[0]).toHaveStyle('border-bottom-left-radius: 9999px')
    expect(buttons[2]).toHaveStyle('border-top-right-radius: 9999px')
    expect(buttons[2]).toHaveStyle('border-bottom-right-radius: 9999px')

    expect(buttons.length).toEqual(3)
    expect(firstChild).toHaveAttribute('shape', 'circle')
  })

  test('renders correctly with all disabled', async () => {
    expect.assertions(4)

    renderWithProviders(
      <ButtonGroup disabled>
        <Button label='First' />
        <Button label='Second' />
        <Button label='Third' />
      </ButtonGroup>,
    )

    const buttons = screen.getAllByRole('button')

    buttons.forEach((button) => {
      expect(button).toHaveAttribute('disabled', '')
    })

    expect(buttons.length).toEqual(3)
  })

  test('renders correctly with disabled some item', async () => {
    expect.assertions(4)

    renderWithProviders(
      <ButtonGroup>
        <Button label='First' disabled />
        <Button label='Second' />
        <Button label='Third' />
      </ButtonGroup>,
    )

    const buttons = screen.getAllByRole('button')

    expect(buttons[0]).toHaveAttribute('disabled', '')
    expect(buttons[1]).not.toHaveAttribute('disabled', '')
    expect(buttons[2]).not.toHaveAttribute('disabled', '')
    expect(buttons.length).toEqual(3)
  })

  test('renders correctly with all loading', async () => {
    expect.assertions(4)

    renderWithProviders(
      <ButtonGroup loading>
        <Button label='First' />
        <Button label='Second' />
        <Button label='Third' />
      </ButtonGroup>,
    )

    const buttons = screen.getAllByRole('button')

    expect(buttons[0]).toHaveAttribute('loading', 'true')
    expect(buttons[1]).toHaveAttribute('loading', 'true')
    expect(buttons[2]).toHaveAttribute('loading', 'true')
    expect(buttons.length).toEqual(3)
  })

  test('renders correctly with loading some item', async () => {
    expect.assertions(4)

    renderWithProviders(
      <ButtonGroup>
        <Button label='First' loading />
        <Button label='Second' />
        <Button label='Third' />
      </ButtonGroup>,
    )

    const buttons = screen.getAllByRole('button')

    expect(buttons[0]).toHaveAttribute('loading', 'true')
    expect(buttons[1]).not.toHaveAttribute('loading', 'true')
    expect(buttons[2]).not.toHaveAttribute('loading', 'true')
    expect(buttons.length).toEqual(3)
  })

  test('renders correctly with loading by variant is `shadow`', async () => {
    expect.assertions(6)

    const {
      container: { firstChild },
    } = renderWithProviders(
      <ButtonGroup variant='shadow' loading>
        <Button label='First' />
        <Button label='Second' />
        <Button label='Third' />
      </ButtonGroup>,
    )

    const buttons = screen.getAllByRole('button')

    expect(buttons[0]).toHaveAttribute('loading', 'true')
    expect(buttons[1]).toHaveAttribute('loading', 'true')
    expect(buttons[2]).toHaveAttribute('loading', 'true')
    expect(buttons.length).toEqual(3)

    expect(firstChild).toHaveStyle('--tw-shadow: var(--tw-shadow-colored)')
    expect(firstChild).toHaveStyle('--tw-shadow-color: #4f46e580')
  })

  test('renders correctly with block', async () => {
    expect.assertions(4)

    renderWithProviders(
      <ButtonGroup block>
        <Button label='First' />
        <Button label='Second' />
        <Button label='Third' />
      </ButtonGroup>,
    )

    const buttons = screen.getAllByRole('button')

    expect(buttons[0]).toHaveAttribute('block', 'true')
    expect(buttons[1]).toHaveAttribute('block', 'true')
    expect(buttons[2]).toHaveAttribute('block', 'true')
    expect(buttons.length).toEqual(3)
  })

  test('renders correctly with vertical', async () => {
    expect.assertions(3)

    const {
      container: { firstChild },
    } = renderWithProviders(
      <ButtonGroup vertical>
        <Button label='First' />
        <Button label='Second' />
        <Button label='Third' />
      </ButtonGroup>,
    )

    const buttons = screen.getAllByRole('button')

    expect(buttons.length).toEqual(3)

    expect(firstChild).toHaveStyle('flex-direction: column')
    expect(firstChild).toHaveStyle('width: fit-content')
  })
})
