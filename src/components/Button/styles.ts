import type { FlattenSimpleInterpolation } from 'styled-components'
import type {
  ThemeMode,
  TwColor,
  TwColorLevel,
  TwShapeObject,
  TwSizeObject,
  TwVariantObject,
} from 'types'

import colors from 'tailwindcss/colors'
import tw, { css } from 'twin.macro'

import { twColor } from 'utils/jest'

type TwVariantFn = ({
  themeColor,
  colorLevel,
  themeMode,
}: {
  themeColor: TwColor
  colorLevel: TwColorLevel
  themeMode: ThemeMode
}) => { bg: TwVariantObject; border: TwVariantObject }

export const twVariantFn: TwVariantFn = ({
  themeColor,
  colorLevel,
  themeMode,
}) => {
  const isDarkMode = themeMode === 'dark'
  const color = colors[themeColor][colorLevel]
  const bgColor = twColor(color)
  const borderColor = twColor(color, 'border')
  const textWhiteColor = twColor(colors.white, 'text')
  const textColor = twColor(color, 'text')

  const tertiaryBgColor = isDarkMode ? `${textWhiteColor}` : `${textColor}`

  return {
    bg: {
      primary: css`
        --tw-bg-opacity: 1;
        background-color: ${bgColor};
        color: ${textWhiteColor};
        &:hover {
          --tw-bg-opacity: 0.8;
        }
      `,
      secondary: tw``,
      tertiary: css`
        --tw-bg-opacity: 0.2;
        background-color: ${bgColor};
        color: ${tertiaryBgColor};
        &:hover {
          --tw-bg-opacity: 0.3;
        }
      `,
      plain: tw``,
      link: tw`text-blue-500 hover:text-blue-600`,
    },

    border: {
      primary: css`
        --tw-bg-opacity: 0.3;
        --tw-border-opacity: 1;
        --tw-text-opacity: 0.8;
        background-color: ${bgColor};
        border-width: 2px;
        border-color: ${borderColor};
        color: ${textColor};
        &:hover {
          --tw-bg-opacity: 0.4;
          --tw-border-opacity: 0.8;
          --tw-text-opacity: 1;
        }
      `,
      secondary: tw``,
      tertiary: css`
        --tw-bg-opacity: 0.1;
        --tw-border-opacity: 0.2;
        --tw-text-opacity: 1;
        background-color: ${bgColor};
        border-width: 2px;
        border-color: ${borderColor};
        color: ${textColor};
        &:hover {
          --tw-bg-opacity: 0.2;
          --tw-border-opacity: 0.3;
          --tw-text-opacity: 0.8;
        }
      `,
      plain: tw``,
      link: tw`text-blue-500 hover:text-blue-600`,
    },
  }
}

type TwColorFn = ({
  themeColor,
  colorLevel,
}: {
  themeColor: TwColor
  colorLevel: TwColorLevel
}) => { bg: FlattenSimpleInterpolation; outline: FlattenSimpleInterpolation }

export const twColorFn: TwColorFn = ({ themeColor, colorLevel }) => {
  const color = colors[themeColor][colorLevel]
  const bgColor = twColor(color)
  const borderColor = twColor(color, 'border')
  const textWhiteColor = twColor(colors.white, 'text')
  const textColor = twColor(color, 'text')

  return {
    bg: css`
      --tw-bg-opacity: 1;
      background-color: ${bgColor};
      color: ${textWhiteColor};
      &:hover {
        --tw-bg-opacity: 0.8;
      }
    `,
    outline: css`
      --tw-border-opacity: 1;
      border-width: 2px;
      border-color: ${borderColor};
      color: ${textColor};
      &:hover {
        --tw-border-opacity: 0.8;
        --tw-text-opacity: 0.8;
      }
    `,
  }
}

export const twSize: TwSizeObject = {
  xs: tw`h-7 px-3 py-1 text-xs`,
  sm: tw`h-9 px-3 py-2 text-sm`,
  md: tw`h-11 px-8 py-2 text-sm`,
  lg: tw`h-14 px-8 py-2 text-base`,
}

export const twSizeIcon: TwSizeObject = {
  xs: tw`h-7 w-7 p-0 text-xs`,
  sm: tw`h-9 w-9 p-0 text-sm`,
  md: tw`h-11 w-11 p-0 text-sm`,
  lg: tw`h-14 w-14 p-0 text-base`,
}

export const twShape: TwShapeObject = {
  square: tw`rounded-none`,
  rounded: tw`rounded-md`,
  circle: tw`rounded-full`,
}