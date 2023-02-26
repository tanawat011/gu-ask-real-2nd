export type ScreenSizeOption<T> = {
  xs?: T
  sm?: T
  md?: T
  lg?: T
  xl?: T
}

export type ScreenSizeOptionWithDefault<T> = ScreenSizeOption<T> & {
  default?: T
}

export type ScreenStyle<T extends string | number> = Required<
  ScreenSizeOptionWithDefault<{ [key in T]: string }>
>
