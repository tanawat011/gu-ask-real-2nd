import type {
  Variant,
  Size,
  Shape,
  TwColor,
  TwColorLevel,
  ThemeMode,
  WithRequired,
  TwThemeColor,
} from 'types'

import type { MouseEvent } from 'react'

import { useRecoilValue } from 'recoil'
import tw, { css, styled } from 'twin.macro'

import { IconLoadingSign } from 'components/Icons'
import { localSettingAtom } from 'recoils/atoms'

import { twShape, twSize, twSizeIcon, twVariantFn } from './styles'

export type ButtonProps = {
  label?: string
  icon?: string | React.ReactNode
  iconPosition?: 'left' | 'right'
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  variant?: Variant
  color?: TwThemeColor
  size?: Size
  shape?: Shape
  disabled?: boolean
  loading?: boolean | string
  width?: string
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
    shape,
    iconOnly,
    isDisabled,
    isLoading,
    isBlocked,
    width,
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
      isDisabled,
      isLoading,
    }

    return [
      twVariantFn(variant, variantOptional),
      twShape[shape],
      iconOnly
        ? twSizeIcon[size]
        : [
            twSize[size],
            css`
              min-width: ${width};
            `,
          ],
      iconOnly && tw`rounded-full`,
      isDisabled && tw`cursor-not-allowed`,
      isLoading && tw`bg-opacity-50 text-opacity-50`,
      isBlocked && tw`w-full`,
      tw`flex items-center justify-center`,
    ]
  },
)
const TwSpan = tw.span`flex items-center justify-center gap-2`

export const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  iconPosition = 'left',
  onClick,
  variant = 'primary',
  color,
  size = 'md',
  shape = 'rounded',
  disabled,
  loading,
  width = '120px',
  block,
}) => {
  const { theme } = useRecoilValue(localSettingAtom)

  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(event)
  }

  const isIconOnly = !!icon && !label
  const isLoading = !!loading
  const isDisabled = disabled || isLoading
  const isIconLeft = iconPosition === 'left'

  const RenderContent = () => {
    if (isIconOnly) {
      return loading ? <IconLoadingSign /> : <>{icon}</>
    }

    if (loading && typeof loading === 'string') {
      return <TwSpan>{loading}</TwSpan>
    }

    if (loading && !icon) {
      return (
        <TwSpan>
          <IconLoadingSign />
        </TwSpan>
      )
    }

    return (
      <TwSpan>
        {isIconLeft && (loading ? <IconLoadingSign /> : icon)}
        {label}
        {!isIconLeft && (loading ? <IconLoadingSign /> : icon)}
      </TwSpan>
    )
  }

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
        isDisabled={isDisabled}
        isLoading={isLoading}
        width={width}
        isBlocked={block}
        themeColor={theme.color}
        colorLevel={theme.colorLevel}
        themeMode={theme.mode}
      >
        <RenderContent />
      </TwButton>
    </TwContainer>
  )
}
