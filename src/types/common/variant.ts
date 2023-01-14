import type { TwStyle } from 'twin.macro'

export type Variant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'link'

export type TwVariantObject = { [key in Variant]: TwStyle | TwStyle[] }
