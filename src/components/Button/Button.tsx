import type { Variant, Size, Shape, TwColor, TwColorLevel, MultiMerged } from 'types'

import type { MouseEvent } from 'react'

import { useRecoilValue } from 'recoil'
import colors from 'tailwindcss/colors'
import tw, { css, styled } from 'twin.macro'

import { Loading } from 'components/Loading'
import { useLocalSetting } from 'hooks/useLocalSetting'
import { localSettingAtom } from 'recoils/atoms'
import { twColor } from 'utils/jest'

import { twShape, twSize, twSizeIcon, twVariant } from './styles'

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

type TwButtonProps = Omit<ButtonProps, 'label' | 'icon' | 'onClick' | 'disabled'> & {
  iconOnly?: boolean
  disabledOnly?: boolean
  isDisabled?: boolean
  isLoading?: boolean
  isBlocked?: boolean
  themeColor: TwColor
  colorLevel: TwColorLevel
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
    disabledOnly,
    isDisabled,
    isLoading,
    isBlocked,
    themeColor,
    colorLevel,
  }: TwButtonProps) => {
    const [_color, _level] = (color?.split('-') as [TwColor, TwColorLevel]) || []
    const themeSetting = { themeColor, colorLevel }

    return [
      !color &&
        variant &&
        (outline ? twVariant(themeSetting).border[variant] : twVariant(themeSetting).bg[variant]),
      color &&
        (outline
          ? css`
              --tw-border-opacity: 1;
              border-width: 2px;
              border-color: ${twColor(colors[_color][_level], 'border')};
              color: ${twColor(colors[_color][_level], 'text')};
              &:hover {
                --tw-border-opacity: 0.8;
                --tw-text-opacity: 0.8;
              }
            `
          : css`
              --tw-bg-opacity: 1;
              background-color: ${twColor(colors[_color][_level])};
              color: ${colors.white};
              &:hover {
                --tw-bg-opacity: 0.8;
              }
            `),
      size && (iconOnly ? twSizeIcon[size] : twSize[size]),
      shape && twShape[shape],
      iconOnly && tw`rounded-full`,
      isDisabled && tw`cursor-not-allowed`,
      disabledOnly && tw`(bg-disabled text-nickel)!`,
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
  outline,
  shape = 'rounded',
  disabled,
  loading,
  block,
}) => {
  const localSetting = useRecoilValue(localSettingAtom)

  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
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
        color={color}
        size={size}
        outline={outline}
        iconOnly={isIconOnly}
        shape={shape}
        disabled={isDisabled}
        disabledOnly={disabledOnly}
        isDisabled={isDisabled}
        isLoading={loading}
        isBlocked={block}
        themeColor={localSetting.theme.color}
        colorLevel={localSetting.theme.colorLevel}
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
