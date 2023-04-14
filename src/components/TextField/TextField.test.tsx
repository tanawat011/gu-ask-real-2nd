import type { Size, ThemeMode, VariantInput } from 'types'

import { useEffect } from 'react'

import { screen } from '@testing-library/react'
import { useRecoilState } from 'recoil'

import { localSettingAtom } from 'recoils/atoms'
import { renderWithProviders, twColor } from 'utils/jest'

import { TextField } from './TextField'

jest.mock('./TextField', () => jest.requireActual('./TextField'))

describe('<TextField />', () => {
  test('renders correctly and match snapshot', async () => {
    expect.assertions(1)

    const { asFragment } = renderWithProviders(<TextField />)

    expect(asFragment()).toMatchSnapshot()
  })

  test('should render with label', async () => {
    expect.assertions(1)

    renderWithProviders(<TextField label='Label' />)

    const label = screen.getByText(/Label/i)

    expect(label).toBeInTheDocument()
  })

  test('should render with field required option', async () => {
    expect.assertions(1)

    renderWithProviders(<TextField label='Label' required />)

    const label = screen.getByText(/\*/i)

    expect(label).toBeInTheDocument()
  })

  test('should render with placeholder', async () => {
    expect.assertions(1)

    renderWithProviders(<TextField label='Label' placeholder='placeholder' />)

    const input = screen.queryByPlaceholderText(/placeholder/i)

    expect(input).toBeInTheDocument()
  })

  test('should render with placeholder but not basic variant', async () => {
    expect.assertions(1)

    renderWithProviders(
      <TextField label='Label' placeholder='placeholder' variant='outline' />,
    )

    const input = screen.queryByPlaceholderText('')

    expect(input).toBeInTheDocument()
  })

  test('should render with error message', async () => {
    expect.assertions(3)

    renderWithProviders(<TextField label='Label' error='Please enter' />)

    const labelError = screen.getByText('Please enter')
    const input = screen.getByRole('textbox')

    expect(labelError).toBeInTheDocument()
    expect(input).toHaveStyleRule('padding-right', '0.75rem')
  })

  test('should render with error message but no label', async () => {
    expect.assertions(3)

    renderWithProviders(<TextField error='Please enter' />)

    const labelError = screen.getByText('Please enter')
    const input = screen.getByRole('textbox')

    expect(labelError).toBeInTheDocument()
    expect(input).toHaveStyleRule('padding-right', '2.25rem')
  })

  test('should render with error but not `basic` or `underline` variant', async () => {
    expect.assertions(3)

    renderWithProviders(
      <TextField label='Label' variant='outline' error='Please enter' />,
    )

    const iconError = screen.getByTestId('text-field-error-icon')
    const input = screen.getByRole('textbox')

    expect(iconError).toBeInTheDocument()
    expect(input).toHaveStyleRule('padding-right', '2.25rem')
  })

  test('should render with error with `underline` variant', async () => {
    expect.assertions(3)

    renderWithProviders(
      <TextField label='Label' variant='underline' error='Please enter' />,
    )

    const iconError = screen.getByTestId('text-field-error-icon')
    const input = screen.getByRole('textbox')

    expect(iconError).toBeInTheDocument()
    expect(input).toHaveStyleRule('padding-right', '1.75rem')
  })

  test('should render with block option', async () => {
    expect.assertions(1)

    renderWithProviders(<TextField label='text field' block />)

    const button = screen.getByRole('textbox')

    expect(button).toHaveStyle('width: 100%')
  })

  test('should render with force color', async () => {
    expect.assertions(2)

    renderWithProviders(
      <TextField label='text field' color='emerald-500' forceColor />,
    )

    const input = screen.getByRole('textbox')

    expect(input).toHaveStyleRule('border-color', twColor('#10B981', 'border'))
  })

  test('should render with no force color', async () => {
    expect.assertions(2)

    renderWithProviders(
      <TextField label='text field' color='emerald-500' forceColor={false} />,
    )

    const input = screen.getByRole('textbox')

    expect(input).toHaveStyleRule('border-color', twColor('#4B5563', 'border'))
  })

  test('should render with disabled input', async () => {
    expect.assertions(6)

    renderWithProviders(<TextField label='text field' disabled />)

    const input = screen.getByRole('textbox')

    expect(input).toHaveStyleRule('background-color', twColor('#374151'))
    expect(input).toHaveStyleRule('cursor', 'not-allowed', {
      modifier: ':disabled',
    })
    expect(input).toHaveStyleRule('opacity', '0.7', {
      modifier: ':disabled::placeholder',
    })
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
      paddingX: '0.75rem',
      paddingY: '0.5rem',
    },
    lg: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      height: '3.5rem',
      paddingX: '0.75rem',
      paddingY: '0.5rem',
    },
  }

  Object.entries(sizes).forEach(
    ([key, { fontSize, lineHeight, height, paddingX, paddingY }]) => {
      test(`renders correctly and size \`${key}\``, () => {
        expect.assertions(7)

        renderWithProviders(
          <TextField label='text field size' size={key as Size} />,
        )

        const button = screen.getByRole('textbox')

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

  type ColorTestOption = {
    bgColor?: string
    bgOpacity?: string
    borderWidth?: string
    borderBottomWidth?: string
    borderColor?: string
    borderColorFocus?: string
    borderOpacity?: string
    ringColorFocus?: string
    ringOpacityFocus?: string
    textColor?: string
    textOpacity?: string
  }

  const execTestCase = (
    key: VariantInput,
    {
      bgColor,
      bgOpacity,
      borderWidth,
      borderBottomWidth,
      borderColor,
      borderColorFocus,
      borderOpacity,
      ringColorFocus,
      ringOpacityFocus,
      textColor,
      textOpacity,
    }: ColorTestOption,
    mode: ThemeMode = 'dark',
  ) => {
    const Component = () => {
      const [{ auth, theme, sidebar }, setTheme] =
        useRecoilState(localSettingAtom)

      useEffect(() => {
        setTheme({ auth, sidebar, theme: { ...theme, mode } })
      }, [])

      return <TextField label='Text Field' variant={key as VariantInput} />
    }

    renderWithProviders(<Component />)

    const input = screen.getByRole('textbox')

    if (bgColor) {
      expect(input).toHaveStyleRule('background-color', twColor(bgColor))
    }

    if (bgOpacity) {
      expect(input).toHaveStyleRule('--tw-bg-opacity', bgOpacity)
    }

    if (borderWidth) {
      expect(input).toHaveStyleRule('border-width', borderWidth)
    }

    if (borderBottomWidth) {
      expect(input).toHaveStyleRule('border-bottom-width', borderBottomWidth)
    }

    if (borderColor) {
      expect(input).toHaveStyleRule(
        'border-color',
        twColor(borderColor, 'border'),
      )
    }

    if (borderColorFocus) {
      expect(input).toHaveStyleRule(
        'border-color',
        twColor(borderColorFocus, 'border'),
        { modifier: ':focus:focus-within' },
      )
    }

    if (borderOpacity) {
      expect(input).toHaveStyleRule('--tw-border-opacity', borderOpacity)
    }

    if (ringColorFocus) {
      expect(input).toHaveStyleRule(
        '--tw-ring-color',
        twColor(ringColorFocus, 'border'),
        {
          modifier: ':focus:focus-within',
        },
      )
    }

    if (ringOpacityFocus) {
      expect(input).toHaveStyleRule('--tw-ring-opacity', ringOpacityFocus, {
        modifier: ':focus:focus-within',
      })
    }

    if (textColor) {
      expect(input).toHaveStyleRule('color', twColor(textColor, 'text'))
    }

    if (textOpacity) {
      expect(input).toHaveStyleRule('--tw-text-opacity', textOpacity)
    }
  }

  type TestVariant = { [key in VariantInput]?: ColorTestOption }

  const variantsDark: TestVariant = {
    basic: {
      bgColor: 'transparent',
      borderColor: '#4B5563',
      borderColorFocus: '#4f46e5',
      borderOpacity: '1',
      borderWidth: '1px',
      ringColorFocus: '#4f46e5',
      ringOpacityFocus: '1',
      textColor: '#ffffff',
    },
    outline: {
      bgColor: 'transparent',
      borderColor: '#4B5563',
      borderColorFocus: '#4f46e5',
      borderOpacity: '1',
      borderWidth: '1px',
      ringColorFocus: '#4f46e5',
      ringOpacityFocus: '1',
      textColor: '#ffffff',
    },
    underline: {
      bgColor: 'transparent',
      borderColor: '#4B5563',
      borderColorFocus: '#4f46e5',
      borderOpacity: '1',
      borderBottomWidth: '1px',
      ringColorFocus: '#4f46e5',
      ringOpacityFocus: '1',
      textColor: '#ffffff',
    },
    filled: {
      bgColor: '#111827',
      borderColor: '#4B5563',
      borderColorFocus: '#4f46e5',
      borderOpacity: '1',
      borderBottomWidth: '1px',
      ringColorFocus: '#4f46e5',
      ringOpacityFocus: '1',
      textColor: '#ffffff',
    },
  }

  Object.entries(variantsDark).forEach(([key, val]) => {
    test(`renders correctly with dark theme with variant \`${key}\``, () => {
      expect.hasAssertions()

      execTestCase(key as VariantInput, val)
    })
  })

  const variantsLight: TestVariant = {
    basic: {
      bgColor: 'transparent',
      borderColor: '#D1D5DB',
      borderColorFocus: '#4f46e5',
      borderOpacity: '1',
      borderWidth: '1px',
      ringColorFocus: '#4f46e5',
      ringOpacityFocus: '1',
      textColor: '#6b7280',
    },
    outline: {
      bgColor: 'transparent',
      borderColor: '#D1D5DB',
      borderColorFocus: '#4f46e5',
      borderOpacity: '1',
      borderWidth: '1px',
      ringColorFocus: '#4f46e5',
      ringOpacityFocus: '1',
      textColor: '#6b7280',
    },
    underline: {
      bgColor: 'transparent',
      borderColor: '#D1D5DB',
      borderColorFocus: '#4f46e5',
      borderOpacity: '1',
      borderBottomWidth: '1px',
      ringColorFocus: '#4f46e5',
      ringOpacityFocus: '1',
      textColor: '#6b7280',
    },
    filled: {
      bgColor: '#F3F4F6',
      borderColor: '#D1D5DB',
      borderColorFocus: '#4f46e5',
      borderOpacity: '1',
      borderBottomWidth: '1px',
      ringColorFocus: '#4f46e5',
      ringOpacityFocus: '1',
      textColor: '#6b7280',
    },
  }

  Object.entries(variantsLight).forEach(([key, val]) => {
    test(`renders correctly with light theme with variant \`${key}\``, () => {
      expect.hasAssertions()

      execTestCase(key as VariantInput, val, 'light')
    })
  })
})
