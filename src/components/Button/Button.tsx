import type { TwVariantObject, Variant, Size, TwSizeObject } from 'types'

import type { MouseEvent } from 'react'

import tw, { styled } from 'twin.macro'

import {
  TwBgDanger,
  TwBgDark,
  TwBgInfo,
  TwBgLight,
  TwBgPrimary,
  TwBgSecondary,
  TwBgSuccess,
  TwBgTertiary,
  TwBgWarning,
} from 'components/Variant'

type ButtonProps = {
  label?: string
  icon?: React.ReactNode
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  variant?: Variant
  size?: Size
  disabled?: boolean
}

type TwButtonProps = Pick<ButtonProps, 'variant' | 'size'> & { hasIcon?: boolean }

const twVariant: TwVariantObject = {
  primary: [TwBgPrimary, tw`text-white`],
  secondary: [TwBgSecondary, tw`text-white`],
  tertiary: [TwBgTertiary, tw`text-white`],
  success: [TwBgSuccess, tw`text-white`],
  danger: [TwBgDanger, tw`text-white`],
  warning: [TwBgWarning, tw`text-white`],
  info: [TwBgInfo, tw`text-white`],
  light: [TwBgLight, tw`text-gray-800`],
  dark: [TwBgDark, tw`text-white`],
  link: tw`text-blue-500 hover:text-blue-600`,
}

const twSize: TwSizeObject = {
  xs: tw`h-7 px-3 py-1 text-xs`,
  sm: tw`h-9 px-3 py-2 text-sm`,
  md: tw`h-11 px-8 py-2 text-sm`,
  lg: tw`h-14 px-8 py-2 text-base`,
  xl: tw`h-20 px-8 py-2 text-lg`,
}

const TwButton = styled.button(({ variant, size, hasIcon }: TwButtonProps) => {
  return [
    variant && twVariant[variant],
    size && twSize[size],
    hasIcon && tw`h-7 w-7 rounded-full p-0! hover:(rounded-full bg-independence)`,
    tw`rounded-md`,
  ]
})

export const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled,
}) => {
  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    onClick && onClick(event)
  }

  if (icon && !label) {
    return (
      <TwButton onClick={handleOnClick} hasIcon disabled={disabled}>
        {icon}
      </TwButton>
    )
  }

  return (
    <TwButton onClick={handleOnClick} variant={variant} disabled={disabled} size={size}>
      {label}
    </TwButton>
  )
}
