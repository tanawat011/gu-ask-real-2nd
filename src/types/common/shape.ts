import type { TwStyle } from 'twin.macro'

export type Shape = 'none' | 'rounded' | 'circle'

export type TwShapeObject = { [key in Shape]: TwStyle | TwStyle[] }
