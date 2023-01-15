import type { Variant, Size, Shape } from 'types'

import type { MouseEvent } from 'react'

import tw, { styled } from 'twin.macro'

import { Loading } from 'components/Loading'

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
  loading?: boolean
  block?: boolean
}

type TwButtonProps = Omit<ButtonProps, 'label' | 'icon' | 'onClick' | 'disabled'> & {
  iconOnly?: boolean
  disabledOnly?: boolean
  isDisabled?: boolean
  isLoading?: boolean
  isBlocked?: boolean
}

const TwContainer = tw.div`relative`
const TwButton = styled.button(
  ({
    variant,
    size,
    outline,
    shape,
    iconOnly,
    disabledOnly,
    isDisabled,
    isLoading,
    isBlocked,
  }: TwButtonProps) => {
    return [
      variant && (outline ? twVariant.border[variant] : twVariant.bg[variant]),
      size && (iconOnly ? twSizeIcon[size] : twSize[size]),
      shape && twShape[shape],
      iconOnly && tw`rounded-full`,
      isDisabled && tw`cursor-not-allowed select-none`,
      disabledOnly && tw`(bg-charcoal text-anti-flash-white opacity-40)!`,
      isLoading && tw`text-opacity-30 opacity-50!`,
      isBlocked && tw`w-full`,
      tw`relative`,
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
  loading,
  block,
}) => {
  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    onClick && onClick(event)
  }

  const isIconOnly = !!icon && !label
  const disabledOnly = disabled && !loading
  const isDisabled = disabled || loading

  return (
    <TwContainer>
      <TwButton
        onClick={handleOnClick}
        variant={variant}
        size={size}
        outline={outline}
        iconOnly={isIconOnly}
        shape={shape}
        disabled={isDisabled}
        disabledOnly={disabledOnly}
        isDisabled={isDisabled}
        isLoading={loading}
        isBlocked={block}
      >
        {isIconOnly ? (
          icon
        ) : (
          <>
            <TwSpan>
              {icon}
              {label}
              {iconR}
            </TwSpan>
          </>
        )}
      </TwButton>

      {loading && <Loading />}
    </TwContainer>
  )
}
