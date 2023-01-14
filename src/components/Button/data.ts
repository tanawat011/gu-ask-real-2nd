import type { TwShapeObject, TwSizeObject, TwVariantObject } from 'types'

import tw from 'twin.macro'

import {
  TwBgDanger,
  TwBgDark,
  TwBgInfo,
  TwBgLight,
  TwBgPrimary,
  TwBgSecondary,
  TwBgSuccess,
  TwBgTertiary,
  TwBgWarning,
  TwBorderDanger,
  TwBorderDark,
  TwBorderInfo,
  TwBorderLight,
  TwBorderPrimary,
  TwBorderSecondary,
  TwBorderSuccess,
  TwBorderTertiary,
  TwBorderWarning,
  TwTextDanger,
  TwTextDark,
  TwTextInfo,
  TwTextLight,
  TwTextPrimary,
  TwTextSecondary,
  TwTextSuccess,
  TwTextTertiary,
  TwTextWarning,
} from 'components/Variant'

export const twVariant: { bg: TwVariantObject; border: TwVariantObject } = {
  bg: {
    primary: [TwBgPrimary, tw`text-white`],
    secondary: [TwBgSecondary, tw`text-white`],
    tertiary: [TwBgTertiary, tw`text-white`],
    success: [TwBgSuccess, tw`text-white`],
    danger: [TwBgDanger, tw`text-white`],
    warning: [TwBgWarning, tw`text-white`],
    info: [TwBgInfo, tw`text-white`],
    light: [TwBgLight, tw`text-gray-800`],
    dark: [TwBgDark, tw`text-white`],
    link: tw`text-blue-500 hover:text-blue-600`,
  },
  border: {
    primary: [TwBorderPrimary, TwTextPrimary, tw`border-2`],
    secondary: [TwBorderSecondary, TwTextSecondary, tw`border-2`],
    tertiary: [TwBorderTertiary, TwTextTertiary, tw`border-2`],
    success: [TwBorderSuccess, TwTextSuccess, tw`border-2`],
    danger: [TwBorderDanger, TwTextDanger, tw`border-2`],
    warning: [TwBorderWarning, TwTextWarning, tw`border-2`],
    info: [TwBorderInfo, TwTextInfo, tw`border-2`],
    light: [TwBorderLight, TwTextLight, tw`border-2`],
    dark: [TwBorderDark, TwTextDark, tw`border-2`],
    link: tw`text-blue-500 hover:text-blue-600`,
  },
}

export const twSize: TwSizeObject = {
  xs: tw`h-7 px-3 py-1 text-xs`,
  sm: tw`h-9 px-3 py-2 text-sm`,
  md: tw`h-11 px-8 py-2 text-sm`,
  lg: tw`h-14 px-8 py-2 text-base`,
  xl: tw`h-20 px-8 py-2 text-lg`,
}

export const twShape: TwShapeObject = {
  none: tw`rounded-none`,
  rounded: tw`rounded-md`,
  circle: tw`rounded-full`,
}
