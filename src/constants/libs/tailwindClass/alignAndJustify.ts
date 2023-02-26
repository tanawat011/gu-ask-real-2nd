import type { ScreenStyle } from './screen'

export type JustifyContent =
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'evenly'
export type JustifyItems = 'start' | 'end' | 'center' | 'stretch'
export type JustifySelf = JustifyItems

export type AlignContent = JustifyContent
export type AlignItems = JustifyItems | 'baseline'
export type AlignSelf = AlignItems

/** Because this file too long,
 * * You can use shortcut `ctrl + k, ctrl + j` to fold the code
 * * And can use `ctrl + k, ctrl + 0` to unfold the code
 */
// Note: Please understand the tailwind why we are using this way to define the className

export const JUSTIFY_CONTENT: ScreenStyle<JustifyContent> = {
  default: {
    start: 'justify-start',
    end: 'justify-end',
    center: 'justify-center',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  },
  xs: {
    start: 'xs:justify-start',
    end: 'xs:justify-end',
    center: 'xs:justify-center',
    between: 'xs:justify-between',
    around: 'xs:justify-around',
    evenly: 'xs:justify-evenly',
  },
  sm: {
    start: 'sm:justify-start',
    end: 'sm:justify-end',
    center: 'sm:justify-center',
    between: 'sm:justify-between',
    around: 'sm:justify-around',
    evenly: 'sm:justify-evenly',
  },
  md: {
    start: 'md:justify-start',
    end: 'md:justify-end',
    center: 'md:justify-center',
    between: 'md:justify-between',
    around: 'md:justify-around',
    evenly: 'md:justify-evenly',
  },
  lg: {
    start: 'lg:justify-start',
    end: 'lg:justify-end',
    center: 'lg:justify-center',
    between: 'lg:justify-between',
    around: 'lg:justify-around',
    evenly: 'lg:justify-evenly',
  },
  xl: {
    start: 'xl:justify-start',
    end: 'xl:justify-end',
    center: 'xl:justify-center',
    between: 'xl:justify-between',
    around: 'xl:justify-around',
    evenly: 'xl:justify-evenly',
  },
} as const

export const JUSTIFY_ITEMS: ScreenStyle<JustifyItems> = {
  default: {
    start: 'justify-items-start',
    end: 'justify-items-end',
    center: 'justify-items-center',
    stretch: 'justify-items-stretch',
  },
  xs: {
    start: 'xs:justify-items-start',
    end: 'xs:justify-items-end',
    center: 'xs:justify-items-center',
    stretch: 'xs:justify-items-stretch',
  },
  sm: {
    start: 'sm:justify-items-start',
    end: 'sm:justify-items-end',
    center: 'sm:justify-items-center',
    stretch: 'sm:justify-items-stretch',
  },
  md: {
    start: 'md:justify-items-start',
    end: 'md:justify-items-end',
    center: 'md:justify-items-center',
    stretch: 'md:justify-items-stretch',
  },
  lg: {
    start: 'lg:justify-items-start',
    end: 'lg:justify-items-end',
    center: 'lg:justify-items-center',
    stretch: 'lg:justify-items-stretch',
  },
  xl: {
    start: 'xl:justify-items-start',
    end: 'xl:justify-items-end',
    center: 'xl:justify-items-center',
    stretch: 'xl:justify-items-stretch',
  },
} as const

export const JUSTIFY_SELF: ScreenStyle<JustifySelf> = {
  default: {
    start: 'justify-self-start',
    end: 'justify-self-end',
    center: 'justify-self-center',
    stretch: 'justify-self-stretch',
  },
  xs: {
    start: 'xs:justify-self-start',
    end: 'xs:justify-self-end',
    center: 'xs:justify-self-center',
    stretch: 'xs:justify-self-stretch',
  },
  sm: {
    start: 'sm:justify-self-start',
    end: 'sm:justify-self-end',
    center: 'sm:justify-self-center',
    stretch: 'sm:justify-self-stretch',
  },
  md: {
    start: 'md:justify-self-start',
    end: 'md:justify-self-end',
    center: 'md:justify-self-center',
    stretch: 'md:justify-self-stretch',
  },
  lg: {
    start: 'lg:justify-self-start',
    end: 'lg:justify-self-end',
    center: 'lg:justify-self-center',
    stretch: 'lg:justify-self-stretch',
  },
  xl: {
    start: 'xl:justify-self-start',
    end: 'xl:justify-self-end',
    center: 'xl:justify-self-center',
    stretch: 'xl:justify-self-stretch',
  },
} as const

export const ALIGN_CONTENT: ScreenStyle<AlignContent> = {
  default: {
    start: 'content-start',
    end: 'content-end',
    center: 'content-center',
    between: 'content-between',
    around: 'content-around',
    evenly: 'content-evenly',
  },
  xs: {
    start: 'xs:content-start',
    end: 'xs:content-end',
    center: 'xs:content-center',
    between: 'xs:content-between',
    around: 'xs:content-around',
    evenly: 'xs:content-evenly',
  },
  sm: {
    start: 'sm:content-start',
    end: 'sm:content-end',
    center: 'sm:content-center',
    between: 'sm:content-between',
    around: 'sm:content-around',
    evenly: 'sm:content-evenly',
  },
  md: {
    start: 'md:content-start',
    end: 'md:content-end',
    center: 'md:content-center',
    between: 'md:content-between',
    around: 'md:content-around',
    evenly: 'md:content-evenly',
  },
  lg: {
    start: 'lg:content-start',
    end: 'lg:content-end',
    center: 'lg:content-center',
    between: 'lg:content-between',
    around: 'lg:content-around',
    evenly: 'lg:content-evenly',
  },
  xl: {
    start: 'xl:content-start',
    end: 'xl:content-end',
    center: 'xl:content-center',
    between: 'xl:content-between',
    around: 'xl:content-around',
    evenly: 'xl:content-evenly',
  },
} as const

export const ALIGN_ITEMS: ScreenStyle<AlignItems> = {
  default: {
    start: 'items-start',
    end: 'items-end',
    center: 'items-center',
    stretch: 'items-stretch',
    baseline: 'items-baseline',
  },
  xs: {
    start: 'xs:items-start',
    end: 'xs:items-end',
    center: 'xs:items-center',
    stretch: 'xs:items-stretch',
    baseline: 'xs:items-baseline',
  },
  sm: {
    start: 'sm:items-start',
    end: 'sm:items-end',
    center: 'sm:items-center',
    stretch: 'sm:items-stretch',
    baseline: 'sm:items-baseline',
  },
  md: {
    start: 'md:items-start',
    end: 'md:items-end',
    center: 'md:items-center',
    stretch: 'md:items-stretch',
    baseline: 'md:items-baseline',
  },
  lg: {
    start: 'lg:items-start',
    end: 'lg:items-end',
    center: 'lg:items-center',
    stretch: 'lg:items-stretch',
    baseline: 'lg:items-baseline',
  },
  xl: {
    start: 'xl:items-start',
    end: 'xl:items-end',
    center: 'xl:items-center',
    stretch: 'xl:items-stretch',
    baseline: 'xl:items-baseline',
  },
} as const

export const ALIGN_SELF: ScreenStyle<AlignSelf> = {
  default: {
    start: 'self-start',
    end: 'self-end',
    center: 'self-center',
    stretch: 'self-stretch',
    baseline: 'self-baseline',
  },
  xs: {
    start: 'xs:self-start',
    end: 'xs:self-end',
    center: 'xs:self-center',
    stretch: 'xs:self-stretch',
    baseline: 'xs:self-baseline',
  },
  sm: {
    start: 'sm:self-start',
    end: 'sm:self-end',
    center: 'sm:self-center',
    stretch: 'sm:self-stretch',
    baseline: 'sm:self-baseline',
  },
  md: {
    start: 'md:self-start',
    end: 'md:self-end',
    center: 'md:self-center',
    stretch: 'md:self-stretch',
    baseline: 'md:self-baseline',
  },
  lg: {
    start: 'lg:self-start',
    end: 'lg:self-end',
    center: 'lg:self-center',
    stretch: 'lg:self-stretch',
    baseline: 'lg:self-baseline',
  },
  xl: {
    start: 'xl:self-start',
    end: 'xl:self-end',
    center: 'xl:self-center',
    stretch: 'xl:self-stretch',
    baseline: 'xl:self-baseline',
  },
} as const
