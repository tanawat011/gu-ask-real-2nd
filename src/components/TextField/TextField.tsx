import type {
  DefaultEffectProps,
  DefaultInputProps,
  DefaultProps,
  VariantInput,
  defaultInputEventProps,
} from 'types'

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

export type TextFieldProps = DefaultProps<VariantInput> &
  DefaultEffectProps &
  DefaultInputProps &
  defaultInputEventProps

export const TextField: React.FC<TextFieldProps> = ({
  id,
  name,
  label,
  value,
  placeholder,
  variant = 'basic',
  color,
  forceColor = false,
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
    <TwWrapperInput block={block} shape={shape} width={width}>
      {label && isBasic && <RenderLabel />}

      <TwWrapperInputLv2
        variant={variant}
        hexColor={hexColor}
        forceColor={forceColor}
        themeMode={themeMode}
        error={error}
      >
        <TwInput
          id={id}
          name={name}
          value={value}
          placeholder={isBasic ? placeholder : ' '}
          themeMode={themeMode}
          hexColor={hexColor}
          forceColor={forceColor}
          disabled={disabled}
          variant={variant}
          inputSize={size}
          shape={shape}
          width={width}
          block={block}
          error={error}
          label={label}
        />

        {label && !isBasic && <RenderLabel />}

        {(!label || (label && !isBasic)) && error && (
          <TwWrapperIconError
            themeMode={themeMode}
            hexColor={hexColor}
            variant={variant}
            data-testid='text-field-error-icon'
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
