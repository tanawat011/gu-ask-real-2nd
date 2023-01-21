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
  const bgWhiteColor = twColor(colors.white)
  const borderColor = twColor(color, 'border')
  const textColor = twColor(color, 'text')
  const textWhiteColor = twColor(colors.white, 'text')

  const tertiaryBgColor = isDarkMode ? `${textWhiteColor}` : `${textColor}`

  const secondary = {
    light: css`
      background-color: ${bgWhiteColor};
      border-width: 1px;
      border-color: ${twColor(colors.gray[300], 'border')};
      color: ${twColor(colors.gray[500], 'text')};
      &:hover {
        background-color: ${twColor(colors.gray[50])};
        color: ${twColor(colors.gray[500], 'text')};
      }
      &:active {
        background-color: ${twColor(colors.gray[100])};
      }
    `,
    dark: css`
      background-color: ${twColor(colors.gray[700])};
      border-width: 0;
      border-color: ${twColor(colors.gray[700], 'border')};
      color: ${twColor(colors.gray[100], 'text')};
      &:hover {
        background-color: ${twColor(colors.gray[600])};
        color: ${twColor(colors.gray[100], 'text')};
      }
      &:active {
        background-color: ${twColor(colors.gray[500])};
      }
    `,
  }

  const plain = {
    light: css`
      background-color: transparent;
      color: ${twColor(colors.gray[500], 'text')};
      &:hover {
        background-color: ${twColor(colors.gray[50])};
        color: ${twColor(colors.gray[500], 'text')};
      }
      &:active {
        background-color: ${twColor(colors.gray[100])};
      }
    `,
    dark: css`
      background-color: transparent;
      color: ${twColor(colors.gray[100], 'text')};
      &:hover {
        background-color: ${twColor(colors.gray[600])};
        color: ${twColor(colors.gray[100], 'text')};
      }
      &:active {
        background-color: ${twColor(colors.gray[500])};
      }
    `,
  }

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
      secondary: secondary[themeMode],
      tertiary: css`
        --tw-bg-opacity: 0.2;
        background-color: ${bgColor};
        color: ${tertiaryBgColor};
        &:hover {
          --tw-bg-opacity: 0.3;
        }
      `,
      plain: plain[themeMode],
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

export const twDisabledOnly = tw`bg-gray-700 text-gray-100 opacity-50 hover:bg-gray-700`

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
