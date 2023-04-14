import type { TextFieldProps } from './TextField'
import type {
  Size,
  ThemeMode,
  TwShapeObject,
  TwSizeObject,
  WithRequired,
} from 'types'

import colors from 'tailwindcss/colors'
import tw, { css, styled } from 'twin.macro'

import { twColor } from 'utils/jest'

type TwThemeOption = {
  hexColor: string
  themeMode: ThemeMode
}

type TwWrapperInputProps = Required<
  Pick<TextFieldProps, 'block' | 'variant' | 'shape' | 'width'>
>

type TwWrapperInput2Props = Required<
  Pick<TextFieldProps, 'variant' | 'error' | 'forceColor'>
> &
  TwThemeOption

type GetColorsFn = (option: Omit<TwWrapperInput2Props, 'variant'>) => {
  bg: string
  border: string
  borderTheme: string
  text: string
  textTheme: string
}

type TwTextFieldProps = WithRequired<
  Omit<TextFieldProps, 'disabled' | 'placeholder' | 'size'>,
  'shape' | 'width' | 'error' | 'variant'
> &
  TwThemeOption & {
    inputSize: Size
  }

type TwLabelProps = {
  inputSize: Size
}

type TwWrapperIconErrorProps = Required<Pick<TextFieldProps, 'variant'>> &
  TwThemeOption

const twSize: TwSizeObject = {
  xs: tw`h-7 py-1 text-xs`,
  sm: tw`h-9 py-2 text-sm`,
  md: tw`h-11 py-2 text-sm`,
  lg: tw`h-14 py-2 text-base`,
}

const twShape: TwShapeObject = {
  square: tw`rounded-none`,
  rounded: tw`rounded-md`,
  circle: tw`rounded-full`,
}

const twLabelSize: TwSizeObject = {
  xs: tw`text-xs`,
  sm: tw`text-sm`,
  md: tw`text-base`,
  lg: tw`text-lg`,
}

const getColors: GetColorsFn = ({ themeMode, hexColor, error }) => {
  const white = colors.white
  const black = colors.gray[800]
  const darkGray = colors.gray[600]
  const gray = colors.gray[500]
  const lightGray = colors.gray[300]
  const red = colors.red[600]
  const base = hexColor

  const isDarkMode = themeMode === 'dark'

  const bg = twColor(isDarkMode ? black : white)

  const borderError = twColor(red, 'border')
  const borderTheme = error ? borderError : twColor(base, 'border')
  const border = error
    ? borderError
    : twColor(isDarkMode ? darkGray : lightGray, 'border')

  const textError = twColor(red, 'text')
  const textTheme = error ? textError : twColor(base, 'text')
  const text = error ? textError : twColor(isDarkMode ? white : gray, 'text')

  return {
    bg,
    borderTheme,
    border,
    text,
    textTheme,
  }
}

export const TwWrapperInput = styled.div<TwWrapperInputProps>(
  ({ block, variant, shape, width }) => {
    const isFilled = variant === 'filled'

    return [
      block
        ? tw`w-full`
        : css`
            width: ${width};
          `,
      tw`mb-7`,
      isFilled && tw`bg-gray-900`,
      twShape[shape],
    ]
  },
)

export const TwWrapperInputLv2 = styled.div<TwWrapperInput2Props>(
  ({ variant, hexColor, forceColor, themeMode, error }) => {
    const { bg, text, textTheme } = getColors({
      themeMode,
      hexColor,
      forceColor,
      error,
    })
    const isBasic = variant === 'basic'
    const isOutline = variant === 'outline'
    const isUnderline = variant === 'underline'
    const isFilled = variant === 'filled'

    return [
      tw`relative`,
      !isBasic &&
        css`
          label {
            ${tw`pointer-events-none absolute top-1/2 z-10 m-0 -translate-y-1/2 transition-all`}
            ${isOutline && tw`left-3`}
            ${isUnderline && tw`left-0`}
            ${isFilled && tw`left-3`}
            ${error && `color: ${text};`}
          }

          input:focus + label {
            color: ${textTheme};
          }

          input:focus + label,
          input:not(:placeholder-shown) + label {
            ${tw`-top-0.5 left-2 -translate-y-1/2 text-xs`}
            ${isOutline && tw`left-2 px-1`}
            ${isUnderline && tw`left-0`}
            ${isFilled && tw`left-3 -top-2`}
            background-color: ${bg};
          }
        `,
    ]
  },
)

export const TwLabel = styled.label<TwLabelProps>(({ inputSize }) => [
  tw`mb-2 block`,
  twLabelSize[inputSize],
  css`
    span:nth-child(2) {
      ${tw`ml-1 text-red-600`}
    }
  `,
])

export const TwWrapperIconError = styled.div<TwWrapperIconErrorProps>(
  ({ variant }) => [
    variant === 'underline' ? tw`right-1` : tw`right-3`,
    tw`absolute top-1/2 -translate-y-1/2 text-red-600`,
  ],
)
export const TwWrapperError = tw.div`absolute text-red-600`

export const TwInput = styled.input<TwTextFieldProps>(
  ({
    variant,
    hexColor,
    forceColor = false,
    themeMode,
    disabled,
    inputSize,
    shape,
    width,
    block,
    error,
    label,
  }) => {
    const { border, borderTheme, text } = getColors({
      themeMode,
      hexColor,
      forceColor,
      error,
    })
    const isBasic = variant === 'basic'
    const isUnderline = variant === 'underline'
    const isFilled = variant === 'filled'

    const handleSize = () => [
      !isUnderline && tw`px-3`,
      (isUnderline || isFilled) && [
        tw`border-b focus:focus-within:border-b-2`,
        twSize[inputSize],
      ],
      !isUnderline && !isFilled && [tw`border focus:ring-1`, twSize[inputSize]],
    ]

    const handleError = () => [
      error && isBasic && label && tw`pr-3`,
      error && isBasic && !label && tw`pr-9`,
      error && !isBasic && !isUnderline && tw`pr-9`,
      error && !isBasic && isUnderline && tw`pr-7`,
    ]

    return [
      tw`outline-none transition-all`,
      !isUnderline && twShape[shape],
      handleSize(),
      handleError(),
      css`
        ${block ? tw`w-full` : `width: ${width};`}

        background-color: transparent;

        ${tw`border-opacity-100 text-opacity-100`}
        border-color: ${forceColor ? borderTheme : border};

        color: ${text};

        &:disabled {
          ${tw`cursor-not-allowed`}

          &::placeholder {
            ${tw`opacity-70`};
          }
        }
      `,
      css`
        &:focus:focus-within {
          border-color: ${borderTheme};

          ${tw`ring-opacity-100`}
          --tw-ring-color: ${borderTheme};
        }
      `,
      disabled && tw`bg-gray-700`,
    ]
  },
)
