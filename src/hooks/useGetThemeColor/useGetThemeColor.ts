import type { ThemeMode, TwColor, TwColorLevel, TwThemeColor } from 'types'

import colors from 'tailwindcss/colors'

import { useGetTheme } from 'hooks/useGetTheme'

type UseGetThemeColorFn = (color?: TwThemeColor) => {
  colorTheme: TwColor
  colorLevel: TwColorLevel
  themeMode: ThemeMode
  hexColor: string
}

export const useGetThemeColor: UseGetThemeColorFn = (color) => {
  const { color: defaultColor, colorLevel, mode } = useGetTheme()

  const colorTheme = (color?.split('-') || [defaultColor, colorLevel]) as [
    TwColor,
    TwColorLevel,
  ]

  const [_colorTheme, _colorLevel] = colorTheme

  return {
    colorTheme: _colorTheme,
    colorLevel: _colorLevel,
    themeMode: mode,
    hexColor: colors[_colorTheme][_colorLevel],
  }
}
