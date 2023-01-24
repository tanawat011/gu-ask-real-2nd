import type { RenderRoute } from './renderRoutes'

import { isValidElement } from 'react'

import { camelToKebab } from 'utils/string'

export const routeGenerator = <T>(list: object, parentPath?: string): T => {
  const routeList: { [key in keyof T]?: RenderRoute } = {}

  Object.entries(list).forEach(([key, value], i) => {
    const isElement = isValidElement(value)
    const path = camelToKebab(key)
    const fullPath = parentPath ? `${parentPath}/${path}` : `/${path}`
    const indexed = i === 0 && { isIndex: true }

    if (isElement) {
      routeList[key as keyof T] = {
        path,
        fullPath,
        element: value,
        ...indexed,
      }

      return
    }

    routeList[key as keyof T] = {
      path,
      fullPath,
      children: routeGenerator(value, fullPath),
      ...indexed,
    }
  })

  return routeList as T
}
