import type { TwShapeObject, TwSizeObject, TwVariantObject } from 'types'

import tw from 'twin.macro'

export const twVariant: { bg: TwVariantObject; border: TwVariantObject } = {
  bg: {
    primary: tw`bg-primary text-white hover:bg-opacity-80`,
    secondary: tw`bg-secondary text-white hover:bg-opacity-80`,
    tertiary: tw`bg-tertiary text-white hover:bg-opacity-80`,
    success: tw`bg-success text-white hover:bg-opacity-80`,
    danger: tw`bg-danger text-white hover:bg-opacity-80`,
    warning: tw`bg-warning text-white hover:bg-opacity-80`,
    info: tw`bg-info text-white hover:bg-opacity-80`,
    light: tw`bg-light text-dark hover:bg-opacity-80`,
    dark: tw`bg-dark text-white hover:bg-opacity-80`,
    plain: tw`text-white hover:bg-independence`,
    link: tw`text-blue-500 hover:text-blue-600`,
  },
  border: {
    primary: tw`border-2 border-primary text-primary hover:(border-opacity-80 text-opacity-80)`,
    secondary: tw`border-2 border-secondary text-secondary hover:(border-opacity-80 text-opacity-80)`,
    tertiary: tw`border-2 border-tertiary text-tertiary hover:(border-opacity-80 text-opacity-80)`,
    success: tw`border-2 border-success text-success hover:(border-opacity-80 text-opacity-80)`,
    danger: tw`border-2 border-danger text-danger hover:(border-opacity-80 text-opacity-80)`,
    warning: tw`border-2 border-warning text-warning hover:(border-opacity-80 text-opacity-80)`,
    info: tw`border-2 border-info text-info hover:(border-opacity-80 text-opacity-80)`,
    light: tw`border-2 border-light text-light hover:(border-opacity-80 text-opacity-80)`,
    dark: tw`border-2 border-dark text-dark hover:(border-opacity-80 text-opacity-80)`,
    plain: tw`border-2 border-transparent text-transparent hover:(border-independence text-independence)`,
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

export const twSizeIcon: TwSizeObject = {
  xs: tw`h-7 w-7 p-0 text-xs`,
  sm: tw`h-9 w-9 p-0 text-sm`,
  md: tw`h-11 w-11 p-0 text-sm`,
  lg: tw`h-14 w-14 p-0 text-base`,
  xl: tw`h-20 w-20 p-0 text-lg`,
}

export const twShape: TwShapeObject = {
  square: tw`rounded-none`,
  rounded: tw`rounded-md`,
  circle: tw`rounded-full`,
}
