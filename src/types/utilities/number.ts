// Type for support `NumericRange` type
type LessThan<N extends number, A extends number[] = []> = N extends A['length']
  ? A[number]
  : LessThan<N, [...A, A['length']]>

/**
 * @file types/utilities/merged.ts
 * @description Merge 2 or 3 strings to one string type
 * @example
 *  const mergedString1: NumericRange<1, 12> = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
 */
export type NumericRange<F extends number, T extends number> = Exclude<
  T | LessThan<T>,
  LessThan<F>
>
