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

type TwWrapperInputProps = {
  block?: boolean
}

type TwTextFieldProps = WithRequired<
  Omit<TextFieldProps, 'disabled' | 'placeholder' | 'size'>,
  'shape' | 'width'
> & {
  hexColor: string
  themeMode: ThemeMode
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

export const TwWrapperInput = styled.div<TwWrapperInputProps>(({ block }) => [
  block && tw`w-full`,
  tw`mb-7`,
])

export const TwWrapperInputLv2 = tw.div`relative`

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
    const isDarkMode = themeMode === 'dark'
    const color = hexColor
    const bgColor = twColor(isDarkMode ? colors.gray[800] : colors.white)
    const borderColorError = twColor(colors.red[600], 'border')
    const borderColor = error
      ? borderColorError
      : twColor(colors.gray[isDarkMode ? 600 : 300], 'border')
    const borderColorTheme = error ? borderColorError : twColor(color, 'border')
    const textColor = twColor(
      isDarkMode ? colors.white : colors.gray[500],
      'text',
    )

    return [
      tw`rounded-lg border outline-none transition-all focus:ring-1`,
      twSize[inputSize],
      twShape[shape],
      error && tw`pr-9`,
      css`
        ${block ? tw`w-full` : `width: ${width};`}

        background-color: ${bgColor};

        ${tw`border border-opacity-100 text-opacity-100`}
        border-color: ${borderColor};

        color: ${textColor};

        &:disabled {
          ${tw`cursor-not-allowed`}

          &::placeholder {
            ${tw`opacity-70`};
          }
        }
      `,
      css`
        &:focus:focus-within {
          border-color: ${borderColorTheme};

          ${tw`ring-opacity-100`}
          --tw-ring-color: ${borderColorTheme};
        }
      `,
      disabled && tw`bg-gray-700`,
    ]
  },
)
