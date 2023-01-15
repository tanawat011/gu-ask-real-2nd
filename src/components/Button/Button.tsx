import type { Variant, Size, Shape } from 'types'

import type { MouseEvent } from 'react'

import tw, { styled } from 'twin.macro'

import { twShape, twSize, twSizeIcon, twVariant } from './styles'

type ButtonProps = {
  label?: string
  icon?: React.ReactNode
  iconR?: React.ReactNode
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  variant?: Variant
  size?: Size
  outline?: boolean
  shape?: Shape
  disabled?: boolean
}

type TwButtonProps = Omit<ButtonProps, 'label' | 'icon' | 'onClick' | 'disabled'> & {
  iconOnly?: boolean
  isDisabled?: boolean
}

const TwButton = styled.button(
  ({ variant, size, outline, shape, isDisabled, iconOnly }: TwButtonProps) => {
    return [
      variant && (outline ? twVariant.border[variant] : twVariant.bg[variant]),
      size && (iconOnly ? twSizeIcon[size] : twSize[size]),
      shape && twShape[shape],
      iconOnly && tw`rounded-full`,
      isDisabled && tw`cursor-not-allowed bg-charcoal! text-anti-flash-white! opacity-40!`,
    ]
  },
)
const TwSpan = tw.span`flex items-center justify-center gap-2`

export const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  iconR,
  onClick,
  variant = 'primary',
  size = 'md',
  outline,
  shape = 'rounded',
  disabled,
}) => {
  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    onClick && onClick(event)
  }

  const isIconOnly = !!icon && !label

  return (
    <TwButton
      onClick={handleOnClick}
      variant={variant}
      size={size}
      outline={outline}
      iconOnly={isIconOnly}
      shape={shape}
      disabled={disabled}
      isDisabled={disabled}
    >
      {isIconOnly ? (
        icon
      ) : (
        <TwSpan>
          {icon}
          {label}
          {iconR}
        </TwSpan>
      )}
    </TwButton>
  )
}
