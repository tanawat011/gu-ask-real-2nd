import type { ButtonProps } from './Button'
import type { FlattenSimpleInterpolation } from 'styled-components'
import type { TwStyle } from 'twin.macro'
import type {
  ThemeMode,
  TwColor,
  TwColorLevel,
  TwShapeObject,
  TwSizeObject,
  Variant,
  WithRequired,
} from 'types'

import colors from 'tailwindcss/colors'
import tw, { styled, css } from 'twin.macro'

import { twColor } from 'utils/jest'

type TwThemeOption = {
  themeColor: TwColor
  colorLevel: TwColorLevel
  themeMode: ThemeMode
  isDisabled?: boolean
  isLoading?: boolean
}

type TwVariantFn = (
  variant: Variant,
  { themeColor, colorLevel, themeMode, isDisabled, isLoading }: TwThemeOption,
) => TwStyle | TwStyle[] | FlattenSimpleInterpolation

const twVariantFn: TwVariantFn = (
  variant,
  { themeColor, colorLevel, themeMode, isDisabled, isLoading },
) => {
  const isDarkMode = themeMode === 'dark'
  const color = colors[themeColor][colorLevel]
  const bgColor = twColor(color)
  const bgWhiteColor = twColor(colors.white)
  const borderColor = twColor(color, 'border')
  const textColor = twColor(color, 'text')
  const textWhiteColor = twColor(colors.white, 'text')
  const shadowColor = color

  const tertiaryBgColor = isDarkMode ? `${textWhiteColor}` : `${textColor}`

  if (isDisabled && !isLoading) {
    return tw`bg-gray-700 text-gray-100 opacity-50 hover:bg-gray-700`
  }

  switch (variant) {
    case 'secondary':
      return isDarkMode
        ? css`
            background-color: ${twColor(colors.gray[700])};
            border-width: 0;
            border-color: ${twColor(colors.gray[700], 'border')};
            color: ${twColor(colors.gray[100], 'text')};
            ${!isLoading &&
            `
              &:hover {
                background-color: ${twColor(colors.gray[600])};
                color: ${twColor(colors.gray[100], 'text')};
              }
              &:active {
                background-color: ${twColor(colors.gray[500])};
              }
            `}
          `
        : css`
            background-color: ${bgWhiteColor};
            border-width: 1px;
            border-color: ${twColor(colors.gray[300], 'border')};
            color: ${twColor(colors.gray[500], 'text')};
            ${!isLoading &&
            `
              &:hover {
                background-color: ${twColor(colors.gray[50])};
                color: ${twColor(colors.gray[500], 'text')};
              }
              &:active {
                background-color: ${twColor(colors.gray[100])};
              }
            `}
          `

    case 'tertiary':
      return css`
        --tw-bg-opacity: 0.2;
        background-color: ${bgColor};
        color: ${tertiaryBgColor};
        ${!isLoading &&
        `
          &:hover {
            --tw-bg-opacity: 0.3;
          }
          &:active {
            --tw-bg-opacity: 0.4;
          }
        `}
      `

    case 'outline':
      return css`
        --tw-border-opacity: 0.5;
        border-width: 2px;
        border-color: ${borderColor};
        color: ${textColor};
        ${!isLoading &&
        `
          &:hover {
            --tw-bg-opacity: 0.1;
            --tw-border-opacity: 1;
            background-color: ${bgColor};
          }
          &:active {
            --tw-border-opacity: 0.7;
          }
        `}
      `

    case 'shadow':
      return [
        tw`shadow-md`,
        css`
          --tw-bg-opacity: 1;
          --tw-shadow-color: ${shadowColor};
          --tw-shadow: var(--tw-shadow-colored);
          background-color: ${bgColor};
          color: ${textWhiteColor};
          ${!isLoading &&
          `
            &:hover {
              --tw-bg-opacity: 0.8;
              --tw-shadow-color: ${shadowColor}cc;
            }
            &:active {
              --tw-bg-opacity: 0.7;
              --tw-shadow-color: ${shadowColor}b3;
            }
          `}
        `,
      ]

    case 'text':
      return isDarkMode
        ? css`
            background-color: transparent;
            color: ${twColor(colors.gray[100], 'text')};
            ${!isLoading &&
            `
              &:hover {
                background-color: ${twColor(colors.gray[600])};
                color: ${twColor(colors.gray[100], 'text')};
              }
              &:active {
                background-color: ${twColor(colors.gray[500])};
              }
            `}
          `
        : css`
            background-color: transparent;
            color: ${twColor(colors.gray[500], 'text')};
            ${!isLoading &&
            `
              &:hover {
                background-color: ${twColor(colors.gray[50])};
                color: ${twColor(colors.gray[500], 'text')};
              }
              &:active {
                background-color: ${twColor(colors.gray[100])};
              }
            `}
          `

    case 'link':
      return tw`text-blue-500 hover:text-blue-600`

    case 'primary':
    default:
      return css`
        --tw-bg-opacity: 1;
        background-color: ${bgColor};
        color: ${textWhiteColor};
        ${!isLoading &&
        `
          &:hover {
            --tw-bg-opacity: 0.8;
          }
          &:active {
            --tw-bg-opacity: 0.7;
          }
        `}
      `
  }
}

const twSize: TwSizeObject = {
  xs: tw`h-7 px-3 py-1 text-xs`,
  sm: tw`h-9 px-3 py-2 text-sm`,
  md: tw`h-11 px-8 py-2 text-sm`,
  lg: tw`h-14 px-8 py-2 text-base`,
}

const twSizeIcon: TwSizeObject = {
  xs: tw`h-7 w-7 p-0 text-xs`,
  sm: tw`h-9 w-9 p-0 text-sm`,
  md: tw`h-11 w-11 p-0 text-sm`,
  lg: tw`h-14 w-14 p-0 text-base`,
}

const twShape: TwShapeObject = {
  square: tw`rounded-none`,
  rounded: tw`rounded-md`,
  circle: tw`rounded-full`,
}

type TwButtonProps = Omit<
  ButtonProps,
  'label' | 'icon' | 'onClick' | 'disabled'
> & {
  iconOnly?: boolean
  isDisabled?: boolean
  isLoading?: boolean
  isBlocked?: boolean
  themeColor: TwColor
  colorLevel: TwColorLevel
  themeMode: ThemeMode
}

export const TwSpan = tw.span`flex items-center justify-center gap-2`

export const TwButton = styled.button(
  ({
    variant,
    color,
    size,
    shape,
    iconOnly,
    isDisabled,
    isLoading,
    isBlocked,
    width,
    themeColor,
    colorLevel,
    themeMode,
  }: WithRequired<TwButtonProps, 'variant' | 'size' | 'shape'>) => {
    const [_color, _level] = (color?.split('-') as [TwColor, TwColorLevel]) || [
      themeColor,
      colorLevel,
    ]

    const variantOption = {
      themeColor: _color,
      colorLevel: _level,
      themeMode,
      isDisabled,
      isLoading,
    }

    return [
      twVariantFn(variant, variantOption),
      twShape[shape],
      iconOnly
        ? twSizeIcon[size]
        : [
            twSize[size],
            css`
              min-width: ${width};
            `,
          ],
      iconOnly && tw`rounded-full`,
      isDisabled && tw`cursor-not-allowed`,
      isLoading && tw`bg-opacity-50 text-opacity-50`,
      isBlocked && tw`w-full`,
      tw`relative flex select-none items-center justify-center`,
    ]
  },
)
