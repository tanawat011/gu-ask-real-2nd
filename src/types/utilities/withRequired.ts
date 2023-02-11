/**
 * @file types/utilities/withRequired.ts
 * @description Make some properties required
 * @example
 *  type Data = {
 *    a?: string
 *    b?: string
 *    c?: string
 *  }
 *
 *  type DataRequired = WithRequired<Data, 'a' | 'b'> // { a: string; b: string; c?: string }
 */
export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] }
