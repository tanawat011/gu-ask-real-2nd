/* eslint-disable jest/no-conditional-expect */
import type { Size, Variant } from 'types'

import { fireEvent, screen } from '@testing-library/react'

import { IconHome } from 'components/Icons'
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

    expect(button).toHaveStyleRule('background-color', `${twColor('#293341')} !important`)
    expect(button).toHaveStyleRule('color', `${twColor('#6a717a', 'text')} !important`)
    expect(button).toHaveStyle('cursor: not-allowed')
    expect(button).toHaveAttribute('disabled')
  })

  test('renders correctly and loading', async () => {
    expect.assertions(5)

    renderWithProviders(<Button label='button' loading />)

    const button = screen.getByRole('button')
    const loadingIcon = screen.getByText('Loading')

    expect(button).toHaveStyle('--tw-text-opacity: 0.3')
    expect(button).toHaveStyle('opacity: 0.5')
    expect(button).toHaveStyle('cursor: not-allowed')
    expect(button).toHaveAttribute('disabled')
    expect(loadingIcon).toBeInTheDocument()
  })

  test('renders correctly and blocked', async () => {
    expect.assertions(1)

    renderWithProviders(<Button label='button' block />)

    const button = screen.getByRole('button')

    expect(button).toHaveStyle('width: 100%')
  })

  test('renders correctly and display icon only', async () => {
    expect.assertions(1)

    renderWithProviders(<Button icon={<IconHome />} />)

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

  Object.entries(sizes).forEach(([key, { fontSize, lineHeight, height, paddingX, paddingY }]) => {
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
  })

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

  Object.entries(sizesIcon).forEach(([key, { fontSize, lineHeight, widthHeight }]) => {
    test(`renders correctly and display icon only with size \`${key}\``, () => {
      expect.assertions(6)

      renderWithProviders(<Button icon={<IconHome />} size={key as Size} />)

      const button = screen.getByRole('button')

      expect(button).toHaveStyle('border-radius: 9999px')
      expect(button).toHaveStyle(`height: ${widthHeight}`)
      expect(button).toHaveStyle(`width: ${widthHeight}`)
      expect(button).toHaveStyle('padding: 0')
      expect(button).toHaveStyle(`font-size: ${fontSize}`)
      expect(button).toHaveStyle(`line-height: ${lineHeight}`)
    })
  })

  type VariantOption = {
    bgColor?: string
    bgHoverColor?: string
    textColor?: string
    textHoverColor?: string
  }

  type TestVariant = { [key in Variant]: VariantOption }

  const variants: TestVariant = {
    primary: {
      bgColor: '#4F46E5',
      textColor: '#ffffff',
    },
    secondary: {
      bgColor: '#374151',
      textColor: '#ffffff',
    },
    tertiary: {
      bgColor: '#2d355c',
      textColor: '#ffffff',
    },
    solid: {
      bgColor: '#15803d',
      textColor: '#ffffff',
    },
    twoTone: {
      bgColor: '#b91c1c',
      textColor: '#ffffff',
    },
    plain: {
      bgHoverColor: '#4B5563',
      textColor: '#ffffff',
    },
    link: {
      textHoverColor: '#2563EB',
      textColor: '#3B82F6',
    },
  }

  Object.entries(variants).forEach(
    ([key, { bgColor, bgHoverColor, textColor, textHoverColor }]) => {
      test(`renders correctly and variant \`${key}\``, async () => {
        expect.hasAssertions()

        renderWithProviders(<Button label='button' variant={key as Variant} />)

        const button = screen.getByRole('button')

        if (bgColor) {
          expect(button).toHaveStyleRule('background-color', twColor(bgColor))
        }

        if (bgHoverColor) {
          expect(button).toHaveStyleRule('background-color', twColor(bgHoverColor), {
            modifier: ':hover',
          })
        }

        if (textColor) {
          expect(button).toHaveStyleRule('color', twColor(textColor, 'text'))
        }

        if (textHoverColor) {
          expect(button).toHaveStyleRule('color', twColor(textHoverColor, 'text'), {
            modifier: ':hover',
          })
        }

        if (!(['plain', 'link'] as Variant[]).includes(key as Variant)) {
          expect(button).toHaveStyleRule('--tw-bg-opacity', '0.8', { modifier: ':hover' })
        }
      })
    },
  )

  type OutlineVariantOption = {
    borderColor?: string
    borderHoverColor?: string
    textColor?: string
    textHoverColor?: string
  }

  type TestOutlineVariant = { [key in Variant]: OutlineVariantOption }

  const outlineVariants: TestOutlineVariant = {
    primary: {
      borderColor: '#4F46E5',
    },
    secondary: {
      borderColor: '#374151',
    },
    tertiary: {
      borderColor: '#2d355c',
    },
    solid: {
      borderColor: '#15803d',
    },
    twoTone: {
      borderColor: '#b91c1c',
    },
    plain: {
      borderColor: 'transparent',
      borderHoverColor: '#4B5563',
    },
    link: {
      textColor: '#3B82F6',
      textHoverColor: '#2563EB',
    },
  }

  Object.entries(outlineVariants).forEach(
    ([key, { borderColor, borderHoverColor, textColor, textHoverColor }]) => {
      test(`renders correctly and outline variant \`${key}\``, () => {
        expect.hasAssertions()

        renderWithProviders(<Button label='button' variant={key as Variant} outline />)

        const button = screen.getByRole('button')

        if (borderColor) {
          expect(button).toHaveStyleRule(
            'border-color',
            borderColor === 'transparent' ? borderColor : twColor(borderColor, 'border'),
          )
          expect(button).toHaveStyleRule(
            'color',
            borderColor === 'transparent' ? borderColor : twColor(borderColor, 'text'),
          )
        }

        if (borderHoverColor) {
          expect(button).toHaveStyleRule('border-color', twColor(borderHoverColor, 'border'), {
            modifier: ':hover',
          })
          expect(button).toHaveStyleRule('color', twColor(borderHoverColor, 'text'), {
            modifier: ':hover',
          })
        }

        if (key !== 'link') {
          expect(button).toHaveStyle('border-width: 2px')
        }

        if (textColor && textHoverColor) {
          expect(button).toHaveStyleRule('color', twColor(textColor, 'text'))
          expect(button).toHaveStyleRule('color', twColor(textHoverColor, 'text'), {
            modifier: ':hover',
          })
        }

        if (!(['plain', 'link'] as Variant[]).includes(key as Variant)) {
          expect(button).toHaveStyleRule('--tw-border-opacity', '0.8', { modifier: ':hover' })
          expect(button).toHaveStyleRule('--tw-text-opacity', '0.8', { modifier: ':hover' })
        }
      })
    },
  )

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
