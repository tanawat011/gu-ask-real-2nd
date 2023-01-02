/* eslint-disable @typescript-eslint/no-explicit-any */

import type { ObjectAnyKey } from 'types'

export const lowerAllKeys = (obj: ObjectAnyKey) => {
  return Object.keys(obj).reduce((accumulator: any, key) => {
    accumulator[key.toLowerCase()] = obj[key]

    return accumulator
  }, {})
}
