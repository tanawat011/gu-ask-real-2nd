import type { RenderRoute } from './renderRoutes'
import type { KeyOf } from 'types'

import { isValidElement } from 'react'

import { camelToKebab } from 'utils/string'

export const routeGenerator = <T, K = JSX.Element>(
  basePath: string,
  list: {
    [key in KeyOf<T>]: JSX.Element | K
  },
): T => {
  const routeList: Partial<T> = {}

  Object.entries(list).forEach(([key, element], index) => {
    const _basePath = basePath ? `/${basePath}` : ''
    const isElement = isValidElement(element)
    const _element = isElement ? { element } : { children: element }
    const _index = index === 0 && { index: true }

    routeList[key as keyof T] = {
      path: camelToKebab(key),
      fullPath: `${_basePath}/${camelToKebab(key)}`,
      ..._element,
      ..._index,
    } as RenderRoute as never
  })

  return routeList as T
}
