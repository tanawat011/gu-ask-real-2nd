/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @file types/utilities/deepObject.ts
 * @description Generate string type with key in other object nested to all level
 * @example
 *  type Data = {
 *    a: string
 *    b: string
 *    c: {
 *      c2: boolean
 *    }
 *    d: {
 *      d2: {
 *        d3: number
 *      }
 *    }
 *  }
 *  const data1: NestedAllLevelKeyOf<Data> = "a" | "b" | "c" | "c.c2" | "d" | "d.d2" | "d.d2.d3"
 */
export type NestedAllLevelKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedAllLevelKeyOf<ObjectType[Key]>}`
    : `${Key}`
}[keyof ObjectType & (string | number)]

/**
 * @file types/utilities/deepObject.ts
 * @description Generate string type with key in other object nested to last level
 * @example
 *  type Data = {
 *    a: string
 *    b: string
 *    c: {
 *      c2: boolean
 *    }
 *    d: {
 *      d2: {
 *        d3: number
 *      }
 *    }
 *  }
 *  const data1: NestedToLastLevelKeyOf<Data> = "a" | "b" | "c.c2" | "d.d2.d3"
 */
export type NestedToLastLevelKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType]: ObjectType[Key] extends object
    ? `${Key extends infer U extends string | number
        ? U
        : never}.${NestedToLastLevelKeyOf<
        ObjectType[Key]
      > extends infer U extends string | number
        ? U
        : never}`
    : Key
}[keyof ObjectType]

/**
 * @file types/utilities/deepObject.ts
 * @description Generate string type with key in other object, but only last level
 * @example
 *  type Data = {
 *    a: string
 *    b: string
 *    c: {
 *      c2: boolean
 *    }
 *    d: {
 *      d2: {
 *        d3: number
 *      }
 *    }
 *  }
 *  const data1: LastLevelKeyOf<Data> = "a" | "b" | "c2" | "d3"
 */
export type LastLevelKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType]: ObjectType[Key] extends object
    ? LastLevelKeyOf<ObjectType[Key]>
    : Key
}[keyof ObjectType]

// Type for support `DeepReplace` type
type Replacement<K extends [any, any], T> = K extends any
  ? [T] extends [K[0]]
    ? K[1]
    : never
  : never

/**
 * @file types/utilities/deepObject.ts
 * @description Generate new object type with key in other object and can be re-assigned to any value
 * @example
 *  type Data = {
 *    a: number
 *    b: number
 *    c: {
 *      c2: boolean
 *    }
 *    d: {
 *      d2: {
 *        d3: number
 *      }
 *    }
 *  }
 *  type Test = DeepReplace<Data, [number, string] | [boolean, string]>
 *  // {
 *  //   a: string
 *  //   b: string
 *  //   c: {
 *  //     c2: string
 *  //   }
 *  //   d: {
 *  //     d2: {
 *  //       d3: string
 *  //     }
 *  //   }
 *  // }
 */
export type DeepReplace<T, K extends [any, any]> = {
  [Key in keyof T]: T[Key] extends K[0]
    ? Replacement<K, T[Key]>
    : T[Key] extends object
    ? DeepReplace<T[Key], K>
    : T[Key]
}
