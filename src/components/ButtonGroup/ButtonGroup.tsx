import type { ButtonProps } from 'components/Button'

import React from 'react'

import { useGetThemeColor } from 'hooks/useGetThemeColor'

import { TwButtonGroup } from './ButtonGroup.style'

export type ButtonGroupProps = {
  children: React.ReactNode
  vertical?: boolean
} & Omit<ButtonProps, 'label' | 'icon' | 'iconPosition' | 'onClick'>

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  color,
  shape = 'rounded',
  disabled,
  loading,
  block,
  vertical,
}) => {
  const { hexColor } = useGetThemeColor(color)

  const isShadow = variant === 'shadow'

  const childrenUpdateProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const _props = child.props as ButtonProps

      const _variant = _props.variant || variant
      const _color = _props.color || color
      const _disabled = _props.disabled || disabled
      const _loading = _props.loading || loading

      const newProps = {
        ..._props,
        variant: _variant,
        color: _color,
        size,
        disabled: _disabled,
        loading: _loading,
        block,
      } as ButtonProps

      return React.cloneElement(child, newProps)
    }
  })

  return (
    <TwButtonGroup
      shape={shape}
      vertical={vertical}
      isShadow={isShadow}
      isLoading={Boolean(loading)}
      hexColor={hexColor}
    >
      {childrenUpdateProps}
    </TwButtonGroup>
  )
}
