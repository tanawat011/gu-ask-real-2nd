/**
 * @file types/utilities/merged.ts
 * @description Merge 2 or 3 strings to one string type
 * @example
 *  const mergedString1: MultiMerged<'a', 'b'> = 'ab'
 *  const mergedString2: MultiMerged<'a', 'b', '-'> = 'a-b'
 *
 *  type Variant = 'primary' | 'secondary'
 *  type Mode = 'light' | 'dark'
 *  const mergedString3: MultiMerged<Variant, Mode, '-'> = '...' // 'primary-dark' | 'primary-light' | 'secondary-dark' | 'secondary-light'
 */
export type MultiMerged<
  T extends string,
  Q extends string,
  S extends string = '',
> = `${T}${S}${Q}`
