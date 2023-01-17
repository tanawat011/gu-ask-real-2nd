import type { TwColor, TwColorLevel, TwShapeObject, TwSizeObject, TwVariantObject } from 'types'

import colors from 'tailwindcss/colors'
import tw, { css } from 'twin.macro'

import { twColor } from 'utils/jest'

type TwVariantFn = ({
  themeColor,
  colorLevel,
}: {
  themeColor: TwColor
  colorLevel: TwColorLevel
}) => { bg: TwVariantObject; border: TwVariantObject }

export const twVariant: TwVariantFn = ({ themeColor, colorLevel }) => {
  return {
    bg: {
      primary: tw`bg-primary text-white hover:bg-opacity-80`,
      secondary: tw`bg-secondary text-white hover:bg-opacity-80`,
      tertiary: tw`bg-tertiary text-white hover:bg-opacity-80`,
      solid: css`
        --tw-bg-opacity: 1;
        background-color: ${twColor(colors[themeColor][colorLevel])};
        color: #ffffff;
        &:hover {
          --tw-bg-opacity: 0.8;
        }
      `,
      twoTone: css`
        --tw-bg-opacity: 0.2;
        background-color: ${twColor(colors[themeColor][colorLevel])};
        color: #ffffff;
        &:hover {
          --tw-bg-opacity: 0.3;
        }
      `,
      plain: tw`text-white hover:bg-independence`,
      link: tw`text-blue-500 hover:text-blue-600`,
    },
    border: {
      primary: tw`border-2 border-primary text-primary hover:(border-opacity-80 text-opacity-80)`,
      secondary: tw`border-2 border-secondary text-secondary hover:(border-opacity-80 text-opacity-80)`,
      tertiary: tw`border-2 border-tertiary text-tertiary hover:(border-opacity-80 text-opacity-80)`,
      solid: css`
        --tw-bg-opacity: 0.3;
        background-color: ${twColor(colors[themeColor][colorLevel])};
        --tw-border-opacity: 1;
        --tw-text-opacity: 0.8;
        border-width: 2px;
        border-color: ${twColor(colors[themeColor][colorLevel], 'border')};
        color: ${twColor(colors[themeColor][colorLevel], 'text')};
        &:hover {
          --tw-bg-opacity: 0.4;
          --tw-border-opacity: 0.8;
          --tw-text-opacity: 1;
        }
      `,
      twoTone: css`
        --tw-bg-opacity: 0.1;
        background-color: ${twColor(colors[themeColor][colorLevel])};
        --tw-border-opacity: 0.2;
        --tw-text-opacity: 1;
        border-width: 2px;
        border-color: ${twColor(colors[themeColor][colorLevel], 'border')};
        color: ${twColor(colors[themeColor][colorLevel], 'text')};
        &:hover {
          --tw-bg-opacity: 0.2;
          --tw-border-opacity: 0.3;
          --tw-text-opacity: 0.8;
        }
      `,
      plain: tw`border-2 border-transparent text-transparent hover:(border-independence text-independence)`,
      link: tw`text-blue-500 hover:text-blue-600`,
    },
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
