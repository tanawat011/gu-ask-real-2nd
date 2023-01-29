import type { Shape, Size, ThemeMode, TwThemeColor, VariantInput } from 'types'

import colors from 'tailwindcss/colors'
import tw, { css, styled } from 'twin.macro'

import { useGetThemeColor } from 'hooks/useGetThemeColor'
import { twColor } from 'utils/jest'

export type TextFieldProps = {
  placeholder?: string
  variant?: VariantInput
  color?: TwThemeColor
  size?: Size
  shape?: Shape
  disabled?: boolean
  loading?: boolean | string
  width?: string
  block?: boolean
}

export type TwTextFieldProps = Pick<TextFieldProps, 'variant'> & {
  hexColor: string
  themeMode: ThemeMode
}

const TwInput = styled.input<TwTextFieldProps>(
  ({ hexColor, themeMode, disabled }) => {
    const isDarkMode = themeMode === 'dark'
    const color = hexColor
    const bgColor = twColor(isDarkMode ? colors.gray[800] : colors.white)
    const borderColor = twColor(colors.gray[isDarkMode ? 600 : 300], 'border')
    const borderColorTheme = twColor(color, 'border')
    const textColor = twColor(
      isDarkMode ? colors.white : colors.gray[500],
      'text',
    )

    return [
      tw`mx-1 w-full rounded-lg border px-3 py-2 text-sm outline-none transition-all focus:ring-1`,
      css`
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

export const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  color,
  disabled,
}) => {
  const { hexColor, themeMode } = useGetThemeColor(color)

  return (
    <TwInput
      placeholder={placeholder}
      themeMode={themeMode}
      hexColor={hexColor}
      disabled={disabled}
    />
  )
}
