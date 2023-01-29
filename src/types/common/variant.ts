import type { FlattenSimpleInterpolation } from 'styled-components'
import type { TwStyle } from 'twin.macro'

export type VariantButton =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'outline'
  | 'shadow'
  | 'text'
  | 'link'

export type TwVariantButtonObject = {
  [key in VariantButton]: TwStyle | TwStyle[] | FlattenSimpleInterpolation
}

export type VariantInput = 'basic' | 'outline' | 'filled' | 'underline'

export type TwVariantInputObject = {
  [key in VariantInput]: TwStyle | TwStyle[] | FlattenSimpleInterpolation
}
