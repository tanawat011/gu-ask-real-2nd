import type { TwStyle } from 'twin.macro'

export type Size = 'xs' | 'sm' | 'md' | 'lg'

export type TwSizeObject = { [key in Size]: TwStyle | TwStyle[] }
