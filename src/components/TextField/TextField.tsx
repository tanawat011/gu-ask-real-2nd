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
  label?: string
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
  id = '',
  label,
  placeholder,
  variant = 'basic',
  color,
  disabled,
  size = 'md',
  shape = 'rounded',
  width = '185px',
  block = false,
  required,
  error = false,
}) => {
  const { hexColor, themeMode } = useGetThemeColor(color)

  const isBasic = variant === 'basic'

  const RenderLabel = () => (
    <TwLabel htmlFor={id} inputSize={size}>
      <span>{label}</span>
      {required && <span>*</span>}
    </TwLabel>
  )

  return (
    <TwWrapperInput block={block} variant={variant}>
      {label && isBasic && <RenderLabel />}

      <TwWrapperInputLv2
        variant={variant}
        hexColor={hexColor}
        themeMode={themeMode}
        error={error}
      >
        <TwInput
          id={id}
          name={id}
          placeholder={isBasic ? placeholder : ' '}
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

        {label && !isBasic && <RenderLabel />}

        {(!label || (label && !isBasic)) && error && (
          <TwWrapperIconError
            themeMode={themeMode}
            hexColor={hexColor}
            variant={variant}
          >
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
