import type { Variant, Size, Shape } from 'types'

import type { MouseEvent } from 'react'

import tw, { styled } from 'twin.macro'

import { twShape, twSize, twVariant } from './data'

type ButtonProps = {
  label?: string
  icon?: React.ReactNode
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  variant?: Variant
  size?: Size
  outline?: boolean
  shape?: Shape
  disabled?: boolean
}

type TwButtonProps = Omit<ButtonProps, 'label' | 'icon' | 'onClick' | 'disabled'> & {
  hasIcon?: boolean
  isDisabled?: boolean
}

const TwButton = styled.button(
  ({ variant, size, outline, shape, isDisabled, hasIcon }: TwButtonProps) => {
    return [
      variant && (outline ? twVariant.border[variant] : twVariant.bg[variant]),
      size && twSize[size],
      shape && twShape[shape],
      hasIcon && tw`h-7 w-7 rounded-full p-0! hover:(rounded-full bg-independence)`,
      isDisabled && tw`cursor-not-allowed bg-charcoal! text-anti-flash-white! opacity-40!`,
    ]
  },
)

export const Button: React.FC<ButtonProps> = ({
  label,
  icon,
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

  if (icon && !label) {
    return (
      <TwButton onClick={handleOnClick} disabled={disabled} isDisabled={disabled} hasIcon>
        {icon}
      </TwButton>
    )
  }

  return (
    <TwButton
      onClick={handleOnClick}
      variant={variant}
      disabled={disabled}
      size={size}
      outline={outline}
      shape={shape}
      isDisabled={disabled}
    >
      {label}
    </TwButton>
  )
}
