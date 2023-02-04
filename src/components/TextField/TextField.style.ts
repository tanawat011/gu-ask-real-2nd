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

type TwWrapperInputProps = Required<Pick<TextFieldProps, 'block'>>

type TwWrapperInput2Props = Required<
  Pick<TextFieldProps, 'variant' | 'error'>
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
  'shape' | 'width' | 'error'
> &
  TwThemeOption & {
    inputSize: Size
  }

const twSize: TwSizeObject = {
  xs: tw`h-7 px-3 py-1 text-xs`,
  sm: tw`h-9 px-3 py-2 text-sm`,
  md: tw`h-11 px-3 py-2 text-sm`,
  lg: tw`h-14 px-3 py-2 text-base`,
}

const twShape: TwShapeObject = {
  square: tw`rounded-none`,
  rounded: tw`rounded-md`,
  circle: tw`rounded-full`,
}

export const TwWrapperInput = styled.div<TwWrapperInputProps>(({ block }) => {
  return [block && tw`w-full`, tw`mb-7`]
})

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

export const TwWrapperInputLv2 = styled.div<TwWrapperInput2Props>(
  ({ variant, hexColor, themeMode, error }) => {
    const { bg, text, textTheme } = getColors({
      themeMode,
      hexColor,
      error,
    })

    return [
      tw`relative`,
      variant === 'outline' &&
        css`
          label {
            ${tw`pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 transition-all`}
            ${error && `color: ${text};`}
          }

          input:focus + label {
            ${tw`-top-0.5 left-2 m-0 -translate-y-1/2 px-1 text-xs`}
            color: ${textTheme};
            background-color: ${bg};
          }

          input:not(:placeholder-shown) + label {
            ${tw`-top-0.5 left-2 m-0 -translate-y-1/2 px-1 text-xs`}
            background-color: ${bg};
          }
        `,
    ]
  },
)

export const TwLabel = styled.label(() => [
  tw`mb-2 block`,
  css`
    span:nth-child(2) {
      ${tw`ml-1 text-red-600`}
    }
  `,
])

export const TwWrapperIconError = tw.div`absolute right-3 top-1/2 -translate-y-1/2 text-red-600`
export const TwWrapperError = tw.div`absolute text-red-600`

export const TwInput = styled.input<TwTextFieldProps>(
  ({
    hexColor,
    themeMode,
    disabled,
    inputSize,
    shape,
    width,
    block,
    error,
  }) => {
    const { bg, border, borderTheme, text } = getColors({
      themeMode,
      hexColor,
      error,
    })

    return [
      tw`rounded-lg border outline-none transition-all focus:ring-1`,
      twSize[inputSize],
      twShape[shape],
      error && tw`pr-9`,
      css`
        ${block ? tw`w-full` : `width: ${width};`}

        background-color: ${bg};

        ${tw`border border-opacity-100 text-opacity-100`}
        border-color: ${border};

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
