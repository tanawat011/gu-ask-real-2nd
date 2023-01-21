import type {
  Variant,
  Size,
  Shape,
  TwColor,
  TwColorLevel,
  MultiMerged,
  ThemeMode,
} from 'types'

import type { MouseEvent } from 'react'

import { useRecoilValue } from 'recoil'
import tw, { styled } from 'twin.macro'

import { Loading } from 'components/Loading'
import { BG_THEME, BORDER_THEME, TEXT_THEME } from 'constants/twTheme'
import { localSettingAtom } from 'recoils/atoms'

import { twShape, twSize, twSizeIcon, twVariantFn, twColorFn } from './styles'

type ButtonProps = {
  label?: string
  icon?: string | React.ReactNode
  iconR?: string | React.ReactNode
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  variant?: Variant
  color?: MultiMerged<TwColor, TwColorLevel, '-'>
  size?: Size
  outline?: boolean
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
    outline,
    shape,
    iconOnly,
    isDisabled,
    isLoading,
    isBlocked,
    themeColor,
    colorLevel,
    themeMode,
  }: TwButtonProps) => {
    const [_color, _level] =
      (color?.split('-') as [TwColor, TwColorLevel]) || []
    const variantOptional = { themeColor, colorLevel, themeMode }
    const colorOption = { themeColor: _color, colorLevel: _level }

    return [
      !color &&
        variant &&
        (outline
          ? twVariantFn(variantOptional).border[variant]
          : twVariantFn(variantOptional).bg[variant]),
      color &&
        (outline ? twColorFn(colorOption).outline : twColorFn(colorOption).bg),
      size && (iconOnly ? twSizeIcon[size] : twSize[size]),
      shape && twShape[shape],
      iconOnly && tw`rounded-full`,
      isDisabled && tw`cursor-not-allowed`,
      isLoading && tw`text-opacity-30 opacity-50`,
      isBlocked && tw`w-full`,
      [BG_THEME.BTN_DISABLE, TEXT_THEME.BTN_DISABLE, BORDER_THEME.BTN_DISABLE],
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
  outline,
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

  const handleVariant = () => {
    if (variant === 'secondary') {
      return `border dark:border-0 ${BG_THEME.BTN} ${TEXT_THEME.BTN} ${BORDER_THEME.BTN}`
    }

    if (variant === 'plain') {
      return `${BG_THEME.BTN_PLAIN} ${TEXT_THEME.BTN_PLAIN}`
    }
  }

  return (
    <TwContainer>
      <TwButton
        className={handleVariant()}
        onClick={handleOnClick}
        variant={variant}
        color={color}
        size={size}
        outline={outline}
        iconOnly={isIconOnly}
        shape={shape}
        disabled={isDisabled}
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
