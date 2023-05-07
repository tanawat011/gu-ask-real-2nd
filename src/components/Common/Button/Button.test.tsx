/* eslint-disable jest/no-conditional-expect */
import type { Size, ThemeMode, VariantButton } from 'types'

import { useEffect } from 'react'

import { fireEvent, screen } from '@testing-library/react'
import { useRecoilState } from 'recoil'

import { IconFa } from 'components/Icons'
import { localSettingAtom } from 'recoils/atoms'
import { renderWithProviders, twColor } from 'utils/jest'

import { Button } from './Button'

jest.mock('./Button', () => jest.requireActual('./Button'))

describe('<Button />', () => {
  test('renders correctly', async () => {
    expect.assertions(4)

    const onClick = jest.fn()

    const {
      asFragment,
      container: { firstChild },
    } = renderWithProviders(<Button label='button' onClick={onClick} />)

    expect(firstChild).toHaveStyle('position: relative')
    expect(firstChild).toHaveStyle('user-select: none')
    expect(onClick).toHaveBeenCalledTimes(0)
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders correctly and label with icon', async () => {
    expect.assertions(1)

    renderWithProviders(<Button label='button' icon='icon' />)

    const icon = screen.getByText(/icon/i)

    expect(icon).toBeInTheDocument()
  })

  test('renders correctly and label with icon right', async () => {
    expect.assertions(1)

    renderWithProviders(
      <Button label='button' icon='icon' iconPosition='right' />,
    )
    const icon = screen.getByText(/icon/i)

    expect(icon).toBeInTheDocument()
  })

  test('renders correctly and handle event `onClick`', async () => {
    expect.assertions(1)

    const onClick = jest.fn()

    renderWithProviders(<Button label='button' onClick={onClick} />)

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test('renders correctly and disabled', async () => {
    expect.assertions(6)

    renderWithProviders(<Button label='button' disabled />)

    const button = screen.getByRole('button')

    expect(button).toHaveStyleRule('background-color', `${twColor('#374151')}`)
    expect(button).toHaveStyleRule('color', `${twColor('#f3f4f6', 'text')}`)
    expect(button).toHaveStyle('cursor: not-allowed')
    expect(button).toHaveAttribute('disabled')
  })

  test('renders correctly and loading', async () => {
    expect.assertions(4)

    renderWithProviders(<Button label='button' loading />)

    const button = screen.getByRole('button')

    expect(button).toHaveStyle('--tw-bg-opacity: 0.5')
    expect(button).toHaveStyle('--tw-text-opacity: 0.5')
    expect(button).toHaveStyle('cursor: not-allowed')
    expect(button).toHaveAttribute('disabled')
  })

  test('renders correctly and loading with icon only', async () => {
    expect.assertions(4)

    renderWithProviders(<Button icon='button' loading />)

    const button = screen.getByRole('button')

    expect(button).toHaveStyle('--tw-bg-opacity: 0.5')
    expect(button).toHaveStyle('--tw-text-opacity: 0.5')
    expect(button).toHaveStyle('cursor: not-allowed')
    expect(button).toHaveAttribute('disabled')
  })

  test('renders correctly and loading with text', async () => {
    expect.assertions(4)

    renderWithProviders(<Button label='button' loading='Loading...' />)

    const button = screen.getByRole('button')

    expect(button).toHaveStyle('--tw-bg-opacity: 0.5')
    expect(button).toHaveStyle('--tw-text-opacity: 0.5')
    expect(button).toHaveStyle('cursor: not-allowed')
    expect(button).toHaveAttribute('disabled')
  })

  test('renders correctly and loading with label and icon', async () => {
    expect.assertions(4)

    renderWithProviders(<Button label='button' icon='icon' loading />)

    const button = screen.getByRole('button')

    expect(button).toHaveStyle('--tw-bg-opacity: 0.5')
    expect(button).toHaveStyle('--tw-text-opacity: 0.5')
    expect(button).toHaveStyle('cursor: not-allowed')
    expect(button).toHaveAttribute('disabled')
  })

  test('renders correctly and loading with label and icon right', async () => {
    expect.assertions(4)

    renderWithProviders(
      <Button label='button' icon='icon' loading iconPosition='right' />,
    )

    const button = screen.getByRole('button')

    expect(button).toHaveStyle('--tw-bg-opacity: 0.5')
    expect(button).toHaveStyle('--tw-text-opacity: 0.5')
    expect(button).toHaveStyle('cursor: not-allowed')
    expect(button).toHaveAttribute('disabled')
  })

  test('renders correctly and blocked', async () => {
    expect.assertions(1)

    renderWithProviders(<Button label='button' block />)

    const button = screen.getByRole('button')

    expect(button).toHaveStyle('width: 100%')
  })

  test('renders correctly and display icon only', async () => {
    expect.assertions(1)

    renderWithProviders(<Button icon={<IconFa icon='home' />} />)

    const button = screen.getByRole('button')

    expect(button).toHaveStyle('border-radius: 9999px')
  })

  type SizeOption = {
    height: string
    paddingX: string
    paddingY: string
    fontSize: string
    lineHeight: string
  }

  type TestSize = { [key in Size]: SizeOption }

  const sizes: TestSize = {
    xs: {
      fontSize: '0.75rem',
      lineHeight: '1rem',
      height: '1.75rem',
      paddingX: '0.75rem',
      paddingY: '0.25rem',
    },
    sm: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      height: '2.25rem',
      paddingX: '0.75rem',
      paddingY: '0.5rem',
    },
    md: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      height: '2.75rem',
      paddingX: '2rem',
      paddingY: '0.5rem',
    },
    lg: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      height: '3.5rem',
      paddingX: '2rem',
      paddingY: '0.5rem',
    },
  }

  Object.entries(sizes).forEach(
    ([key, { fontSize, lineHeight, height, paddingX, paddingY }]) => {
      test(`renders correctly and size \`${key}\``, () => {
        expect.assertions(7)

        renderWithProviders(<Button label='button' size={key as Size} />)

        const button = screen.getByRole('button')

        expect(button).toHaveStyle(`height: ${height}`)
        expect(button).toHaveStyle(`padding-top: ${paddingY}`)
        expect(button).toHaveStyle(`padding-bottom: ${paddingY}`)
        expect(button).toHaveStyle(`padding-left: ${paddingX}`)
        expect(button).toHaveStyle(`padding-right: ${paddingX}`)
        expect(button).toHaveStyle(`font-size: ${fontSize}`)
        expect(button).toHaveStyle(`line-height: ${lineHeight}`)
      })
    },
  )

  type SizeIconOption = {
    widthHeight: string
    fontSize: string
    lineHeight: string
  }

  type TestSizeIcon = { [key in Size]: SizeIconOption }

  const sizesIcon: TestSizeIcon = {
    xs: {
      fontSize: '0.75rem',
      lineHeight: '1rem',
      widthHeight: '1.75rem',
    },
    sm: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      widthHeight: '2.25rem',
    },
    md: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      widthHeight: '2.75rem',
    },
    lg: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      widthHeight: '3.5rem',
    },
  }

  Object.entries(sizesIcon).forEach(
    ([key, { fontSize, lineHeight, widthHeight }]) => {
      test(`renders correctly and display icon only with size \`${key}\``, () => {
        expect.assertions(6)

        renderWithProviders(
          <Button icon={<IconFa icon='home' />} size={key as Size} />,
        )

        const button = screen.getByRole('button')

        expect(button).toHaveStyle('border-radius: 9999px')
        expect(button).toHaveStyle(`height: ${widthHeight}`)
        expect(button).toHaveStyle(`width: ${widthHeight}`)
        expect(button).toHaveStyle('padding: 0')
        expect(button).toHaveStyle(`font-size: ${fontSize}`)
        expect(button).toHaveStyle(`line-height: ${lineHeight}`)
      })
    },
  )

  type ColorTestOption = {
    bgColor?: string
    bgHoverColor?: string
    bgActiveColor?: string
    bgOpacity?: string
    bgActiveOpacity?: string
    bgHoverOpacity?: string
    borderWidth?: string
    borderColor?: string
    borderHoverColor?: string
    borderOpacity?: string
    borderActiveOpacity?: string
    borderHoverOpacity?: string
    textColor?: string
    textHoverColor?: string
    textOpacity?: string
    textHoverOpacity?: string
    shadowColor?: string
    shadowActiveColor?: string
    shadowHoverColor?: string
  }

  type TestVariant = { [key in VariantButton]: ColorTestOption }

  const variantsDark: TestVariant = {
    primary: {
      bgColor: '#4f46e5',
      bgOpacity: '1',
      bgActiveOpacity: '0.7',
      bgHoverOpacity: '0.8',
      textColor: '#ffffff',
    },
    secondary: {
      bgColor: '#374151',
      bgHoverColor: '#4B5563',
      bgActiveColor: '#6b7280',
      borderWidth: '0',
      borderColor: '#374151',
      textColor: '#f3f4f6',
      textHoverColor: '#f3f4f6',
    },
    tertiary: {
      bgColor: '#4f46e5',
      bgOpacity: '0.2',
      bgActiveOpacity: '0.4',
      bgHoverOpacity: '0.3',
      textColor: '#ffffff',
    },
    outline: {
      bgHoverColor: '#4f46e5',
      bgHoverOpacity: '0.1',
      borderWidth: '2px',
      borderColor: '#4f46e5',
      borderOpacity: '0.5',
      borderHoverOpacity: '1',
      borderActiveOpacity: '0.7',
      textColor: '#4f46e5',
    },
    shadow: {
      bgColor: '#4f46e5',
      bgOpacity: '1',
      bgActiveOpacity: '0.7',
      bgHoverOpacity: '0.8',
      textColor: '#ffffff',
      shadowColor: '#4f46e5',
      shadowActiveColor: '#4f46e5b3',
      shadowHoverColor: '#4f46e5cc',
    },
    text: {
      bgColor: 'transparent',
      bgHoverColor: '#4B5563',
      bgActiveColor: '#6b7280',
      textColor: '#f3f4f6',
      textHoverColor: '#f3f4f6',
    },
    link: {
      textColor: '#3B82F6',
      textHoverColor: '#2563EB',
    },
  }

  const execTestCase = (
    key: VariantButton,
    {
      bgColor,
      bgHoverColor,
      bgActiveColor,
      bgOpacity,
      bgActiveOpacity,
      bgHoverOpacity,
      borderWidth,
      borderColor,
      borderHoverColor,
      borderOpacity,
      borderActiveOpacity,
      borderHoverOpacity,
      textColor,
      textHoverColor,
      textOpacity,
      textHoverOpacity,
      shadowColor,
      shadowActiveColor,
      shadowHoverColor,
    }: ColorTestOption,
    mode: ThemeMode = 'dark',
  ) => {
    const hover = { modifier: ':hover' }
    const active = { modifier: ':active' }

    const Component = () => {
      const [{ auth, theme, sidebar }, setTheme] =
        useRecoilState(localSettingAtom)

      useEffect(() => {
        setTheme({ auth, sidebar, theme: { ...theme, mode } })
      }, [])

      return <Button label='button' variant={key as VariantButton} />
    }

    renderWithProviders(<Component />)

    const button = screen.getByRole('button')

    if (bgColor) {
      expect(button).toHaveStyleRule('background-color', twColor(bgColor))
    }

    if (bgHoverColor) {
      expect(button).toHaveStyleRule(
        'background-color',
        twColor(bgHoverColor),
        hover,
      )
    }

    if (bgActiveColor) {
      expect(button).toHaveStyleRule(
        'background-color',
        twColor(bgActiveColor),
        active,
      )
    }

    if (bgOpacity) {
      expect(button).toHaveStyleRule('--tw-bg-opacity', bgOpacity)
    }

    if (bgHoverOpacity) {
      expect(button).toHaveStyleRule('--tw-bg-opacity', bgHoverOpacity, hover)
    }

    if (bgActiveOpacity) {
      expect(button).toHaveStyleRule('--tw-bg-opacity', bgActiveOpacity, active)
    }

    if (borderWidth) {
      expect(button).toHaveStyleRule('border-width', borderWidth)
    }

    if (borderColor) {
      expect(button).toHaveStyleRule(
        'border-color',
        twColor(borderColor, 'border'),
      )
    }

    if (borderOpacity) {
      expect(button).toHaveStyleRule('--tw-border-opacity', borderOpacity)
    }

    if (borderHoverColor) {
      expect(button).toHaveStyleRule(
        'border-color',
        twColor(borderHoverColor, 'border'),
        hover,
      )
    }

    if (borderActiveOpacity) {
      expect(button).toHaveStyleRule(
        '--tw-border-opacity',
        borderActiveOpacity,
        active,
      )
    }

    if (borderHoverOpacity) {
      expect(button).toHaveStyleRule(
        '--tw-border-opacity',
        borderHoverOpacity,
        hover,
      )
    }

    if (textColor) {
      expect(button).toHaveStyleRule('color', twColor(textColor, 'text'))
    }

    if (textOpacity) {
      expect(button).toHaveStyleRule('--tw-text-opacity', textOpacity)
    }

    if (textHoverColor) {
      expect(button).toHaveStyleRule(
        'color',
        twColor(textHoverColor, 'text'),
        hover,
      )
    }

    if (textHoverOpacity) {
      expect(button).toHaveStyleRule(
        '--tw-text-opacity',
        textHoverOpacity,
        hover,
      )
    }

    if (shadowColor) {
      expect(button).toHaveStyleRule('--tw-shadow-color', shadowColor)
    }

    if (shadowHoverColor) {
      expect(button).toHaveStyleRule(
        '--tw-shadow-color',
        shadowHoverColor,
        hover,
      )
    }

    if (shadowActiveColor) {
      expect(button).toHaveStyleRule(
        '--tw-shadow-color',
        shadowActiveColor,
        active,
      )
    }
  }

  Object.entries(variantsDark).forEach(([key, val]) => {
    test(`renders correctly with dark theme with variant \`${key}\``, () => {
      expect.hasAssertions()

      execTestCase(key as VariantButton, val)
    })
  })

  const variantsLight: TestVariant = {
    primary: {
      bgColor: '#4f46e5',
      bgOpacity: '1',
      bgActiveOpacity: '0.7',
      bgHoverOpacity: '0.8',
      textColor: '#ffffff',
    },
    secondary: {
      bgColor: '#ffffff',
      bgHoverColor: '#f9fafb',
      bgActiveColor: '#f3f4f6',
      borderWidth: '1px',
      borderColor: '#d1d5db',
      textColor: '#6b7280',
      textHoverColor: '#6b7280',
    },
    tertiary: {
      bgOpacity: '0.2',
      bgActiveOpacity: '0.4',
      bgHoverOpacity: '0.3',
      bgColor: '#4f46e5',
      textColor: '#4f46e5',
    },
    outline: {
      bgHoverColor: '#4f46e5',
      bgHoverOpacity: '0.1',
      borderWidth: '2px',
      borderColor: '#4f46e5',
      borderOpacity: '0.5',
      borderHoverOpacity: '1',
      borderActiveOpacity: '0.7',
      textColor: '#4f46e5',
    },
    shadow: {
      bgColor: '#4f46e5',
      bgOpacity: '1',
      bgActiveOpacity: '0.7',
      bgHoverOpacity: '0.8',
      textColor: '#ffffff',
      shadowColor: '#4f46e5',
      shadowActiveColor: '#4f46e5b3',
      shadowHoverColor: '#4f46e5cc',
    },
    text: {
      bgColor: 'transparent',
      bgActiveColor: '#f3f4f6',
      bgHoverColor: '#f9fafb',
      textColor: '#6b7280',
      textHoverColor: '#6b7280',
    },
    link: {
      textColor: '#3B82F6',
      textHoverColor: '#2563EB',
    },
  }

  Object.entries(variantsLight).forEach(([key, val]) => {
    test(`renders correctly with light theme with variant \`${key}\``, () => {
      expect.hasAssertions()

      execTestCase(key as VariantButton, val, 'light')
    })
  })

  test('renders correctly with custom color', () => {
    expect.hasAssertions()

    const hover = { modifier: ':hover' }

    renderWithProviders(<Button label='button' color='indigo-600' />)

    const button = screen.getByRole('button')

    expect(button).toHaveStyle('--tw-bg-opacity: 1')
    expect(button).toHaveStyleRule('background-color', twColor('#4f46e5'))
    expect(button).toHaveStyleRule('color', twColor('#ffffff', 'text'))
    expect(button).toHaveStyleRule('--tw-bg-opacity', '0.8', hover)
  })

  test('renders correctly and shape square', () => {
    expect.hasAssertions()

    renderWithProviders(<Button label='button' shape='square' />)

    const button = screen.getByRole('button')

    expect(button).toHaveStyle('border-radius: 0px')
  })

  test('renders correctly and shape rounded', () => {
    expect.hasAssertions()

    renderWithProviders(<Button label='button' shape='rounded' />)

    const button = screen.getByRole('button')

    expect(button).toHaveStyle('border-radius: 0.375rem')
  })

  test('renders correctly and shape circle', () => {
    expect.hasAssertions()

    renderWithProviders(<Button label='button' shape='circle' />)

    const button = screen.getByRole('button')

    expect(button).toHaveStyle('border-radius: 9999px')
  })
})
