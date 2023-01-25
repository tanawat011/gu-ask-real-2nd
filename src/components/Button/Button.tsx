import type { Variant, Size, Shape, TwThemeColor } from 'types'

import type { MouseEvent } from 'react'

import { useRecoilValue } from 'recoil'

import { IconLoadingSign } from 'components/Icons'
import { localSettingAtom } from 'recoils/atoms'

import { TwButton, TwSpan } from './Button.styles'

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
      return loading ? <IconLoadingSign width={16} height={16} /> : <>{icon}</>
    }

    if (loading && typeof loading === 'string') {
      return <TwSpan>{loading}</TwSpan>
    }

    if (loading && !icon) {
      return (
        <TwSpan>
          <IconLoadingSign width={16} height={16} />
        </TwSpan>
      )
    }

    return (
      <TwSpan>
        {isIconLeft &&
          (loading ? <IconLoadingSign width={16} height={16} /> : icon)}
        {label}
        {!isIconLeft &&
          (loading ? <IconLoadingSign width={16} height={16} /> : icon)}
      </TwSpan>
    )
  }

  return (
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
  )
}
