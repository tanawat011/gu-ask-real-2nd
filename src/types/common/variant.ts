import type { FlattenSimpleInterpolation } from 'styled-components'
import type { TwStyle } from 'twin.macro'

export type Variant = 'primary' | 'secondary' | 'tertiary' | 'solid' | 'twoTone' | 'plain' | 'link'

export type TwVariantObject = {
  [key in Variant]: TwStyle | TwStyle[] | FlattenSimpleInterpolation
}
