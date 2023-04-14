import type { Shape } from './shape'
import type { Size } from './size'
import type { TwThemeColor } from './twThemeColor'

export type defaultEventProps<T = HTMLDivElement> = {
  onClick?: (event: React.MouseEvent<T, MouseEvent>) => void
  onBlur?: (event: React.FocusEvent<T>) => void
  onFocus?: (event: React.FocusEvent<T>) => void
  onMouseDown?: (event: React.MouseEvent<T, MouseEvent>) => void
  onMouseUp?: (event: React.MouseEvent<T, MouseEvent>) => void
  onMouseEnter?: (event: React.MouseEvent<T, MouseEvent>) => void
  onMouseLeave?: (event: React.MouseEvent<T, MouseEvent>) => void
}

export type defaultButtonEventProps = defaultEventProps<HTMLButtonElement>

export type defaultInputEventProps = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void
} & defaultEventProps<HTMLInputElement>

export type DefaultProps<T, K = Size> = {
  variant?: T
  size?: K
  label?: string
  color?: TwThemeColor
  className?: string
  width?: string
  block?: boolean
  dataTestid?: string
}

export type DefaultEffectProps = {
  shape?: Shape
  disabled?: boolean
  loading?: boolean | string
}

export type DefaultInputProps = {
  id?: string
  name?: string
  value?: string
  placeholder?: string
  required?: boolean
  error?: boolean | string
  forceColor?: boolean
}
