import type { TwStyle } from 'twin.macro'

export type TwColorLevel =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'

export type TwColorLevelObject = { [key in TwColorLevel]: TwStyle | TwStyle[] }
