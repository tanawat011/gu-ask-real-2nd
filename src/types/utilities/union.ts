/**
 * @file types/utilities/union.ts
 * @description Union type utilities
 * @example
 *  const array = [1, 2, 3] as const
 *  const unionData: UnionArray<typeof array> = '...' // 1 | 2 | 3
 *
 *  const array = ['a', 'b', 'c'] as const
 *  const unionData: UnionArray<typeof array> = '...' // 'a' | 'b' | 'c'
 */
export type UnionArray<T extends readonly (string | number)[]> = T[number]
