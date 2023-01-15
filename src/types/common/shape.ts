import type { TwStyle } from 'twin.macro'

export type Shape = 'square' | 'rounded' | 'circle'

export type TwShapeObject = { [key in Shape]: TwStyle | TwStyle[] }
