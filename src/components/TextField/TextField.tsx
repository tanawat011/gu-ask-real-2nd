import type { Shape, Size, TwThemeColor, VariantInput } from 'types'

import { BsExclamationCircleFill } from 'react-icons/bs'

import { useGetThemeColor } from 'hooks/useGetThemeColor'

import {
  TwInput,
  TwLabel,
  TwWrapperError,
  TwWrapperIconError,
  TwWrapperInput,
  TwWrapperInputLv2,
} from './TextField.style'

export type TextFieldProps = {
  id?: string
  label?: string | React.ReactNode
  placeholder?: string
  variant?: VariantInput
  color?: TwThemeColor
  size?: Size
  shape?: Shape
  disabled?: boolean
  loading?: boolean | string
  width?: string
  block?: boolean
  required?: boolean
  error?: boolean | string
}

export const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  placeholder,
  variant = 'basic',
  color,
  disabled,
  size = 'md',
  shape = 'rounded',
  width = '185px',
  block,
  required,
  error,
}) => {
  const { hexColor, themeMode } = useGetThemeColor(color)

  return (
    <TwWrapperInput block={block}>
      {label && (
        <TwLabel id={id}>
          <span>{label}</span>
          <span>{required && '*'}</span>
        </TwLabel>
      )}

      <TwWrapperInputLv2>
        <TwInput
          id={id}
          name={id}
          placeholder={placeholder}
          themeMode={themeMode}
          hexColor={hexColor}
          disabled={disabled}
          variant={variant}
          inputSize={size}
          shape={shape}
          width={width}
          block={block}
          error={error}
        />

        {!label && error && (
          <TwWrapperIconError>
            <BsExclamationCircleFill />
          </TwWrapperIconError>
        )}

        {error && typeof error === 'string' && (
          <>
            <TwWrapperError>{error}</TwWrapperError>
          </>
        )}
      </TwWrapperInputLv2>
    </TwWrapperInput>
  )
}
