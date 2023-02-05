import type {
  RouteOption,
  AllRoutes,
  RouteOptionReal,
} from 'hooks/useRouteList'

import { isValidElement } from 'react'

import { camelToKebab } from 'utils/string'

type RouteGenerator = { [key: string]: RouteOption<unknown> | JSX.Element }

export const routeGenerator = <T>(
  menu: RouteGenerator,
  parentPath?: string,
): T => {
  const newMenu: RouteGenerator = {}

  if ((menu as AllRoutes)?.main) {
    const _menu = menu as AllRoutes

    for (const key in _menu) {
      const _key = key as keyof AllRoutes
      const path = key === 'main' ? '/' : camelToKebab(key)
      const fullPath = (
        parentPath ? `${parentPath}/${path}` : `/${path}`
      ).replaceAll('//', '/')
      const item = _menu[_key]

      newMenu[_key] = {
        ...item,
        path,
        fullPath,
        _: item?._ ? routeGenerator(item._, fullPath) : undefined,
      }
    }
  } else {
    let i = 0

    for (const key in menu) {
      const path = camelToKebab(key)
      const fullPath = (
        parentPath ? `${parentPath}/${path}` : `/${path}`
      ).replaceAll('//', '/')
      const item = menu[key]
      const indexed = i === 0 && { isIndex: true }

      if (!isValidElement(item)) {
        const children = (item as RouteOptionReal<unknown>)?._ as RouteGenerator
        const _ = children && { _: routeGenerator(children, fullPath) }

        newMenu[key] = {
          ...item,
          path,
          fullPath,
          ...indexed,
          ..._,
        }

        continue
      }

      newMenu[key] = {
        path,
        fullPath,
        element: item,
        ...indexed,
      }

      i++
    }
  }

  return newMenu as T
}
