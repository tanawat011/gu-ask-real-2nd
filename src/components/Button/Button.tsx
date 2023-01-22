import type {
  Variant,
  Size,
  Shape,
  TwColor,
  TwColorLevel,
  MultiMerged,
  ThemeMode,
  WithRequired,
} from 'types'

import type { MouseEvent } from 'react'

import { useRecoilValue } from 'recoil'
import tw, { styled } from 'twin.macro'

import { Loading } from 'components/Loading'
import { localSettingAtom } from 'recoils/atoms'

import {
  twShape,
  twSize,
  twSizeIcon,
  twVariantFn,
  twDisabledOnly,
} from './styles'

type ButtonProps = {
  label?: string
  icon?: string | React.ReactNode
  iconR?: string | React.ReactNode
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  variant?: Variant
  color?: MultiMerged<TwColor, TwColorLevel, '-'>
  size?: Size
  shape?: Shape
  disabled?: boolean
  loading?: boolean
  block?: boolean
}

type TwButtonProps = Omit<
  ButtonProps,
  'label' | 'icon' | 'onClick' | 'disabled'
> & {
  iconOnly?: boolean
  isDisabled?: boolean
  disabledOnly?: boolean
  isLoading?: boolean
  isBlocked?: boolean
  themeColor: TwColor
  colorLevel: TwColorLevel
  themeMode: ThemeMode
}

const TwContainer = tw.div`relative select-none`
const TwButton = styled.button(
  ({
    variant,
    color,
    size,
    shape,
    iconOnly,
    isDisabled,
    disabledOnly,
    isLoading,
    isBlocked,
    themeColor,
    colorLevel,
    themeMode,
  }: WithRequired<TwButtonProps, 'variant' | 'size' | 'shape'>) => {
    const [_color, _level] =
      (color?.split('-') as [TwColor, TwColorLevel]) || []
    const variantOptional = {
      themeColor: _color || themeColor,
      colorLevel: _level || colorLevel,
      themeMode,
    }

    return [
      twVariantFn(variant, variantOptional),
      twShape[shape],
      iconOnly ? twSizeIcon[size] : twSize[size],
      iconOnly && tw`rounded-full`,
      isDisabled && tw`cursor-not-allowed`,
      disabledOnly && twDisabledOnly,
      isLoading && tw`text-opacity-30 opacity-50`,
      isBlocked && tw`w-full`,
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
  color,
  size = 'md',
  shape = 'rounded',
  disabled,
  loading,
  block,
}) => {
  const { theme } = useRecoilValue(localSettingAtom)

  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(event)
  }

  const isIconOnly = !!icon && !label
  const isDisabled = disabled || loading
  const disabledOnly = disabled && !loading

  return (
    <TwContainer>
      <TwButton
        onClick={handleOnClick}
        variant={variant}
        color={color}
        size={size}
        iconOnly={isIconOnly}
        shape={shape}
        disabled={isDisabled}
        disabledOnly={disabledOnly}
        isDisabled={isDisabled}
        isLoading={loading}
        isBlocked={block}
        themeColor={theme.color}
        colorLevel={theme.colorLevel}
        themeMode={theme.mode}
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
