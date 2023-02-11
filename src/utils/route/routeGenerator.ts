import type {
  RouteOption,
  AllRoutes,
  RouteOptionReal,
} from 'hooks/useGetRoutes'

import { isValidElement } from 'react'

import { camelToKebab, replaceAll } from 'utils/string'

type RouteGenerator = { [key: string]: RouteOption<unknown> | JSX.Element }

export const routeGenerator = <T>(
  menu: RouteGenerator,
  parentPath?: string,
  isLv1 = true,
): T => {
  const newMenu: RouteGenerator = {}
  const pathReplace = (path: string) => replaceAll(path, '//', '/')

  // For the first level
  if (isLv1) {
    const _menu = menu as AllRoutes
    const keys = Object.keys(_menu)

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i] as keyof AllRoutes
      const path = i === 0 ? '/' : camelToKebab(key)
      const fullPath = pathReplace(`/${path}`)
      const item = _menu[key]

      newMenu[key] = {
        ...item,
        path,
        fullPath,
        _: item?._ ? routeGenerator(item._, fullPath, false) : undefined,
      }
    }

    // For the other level
  } else {
    let i = 0

    for (const key in menu) {
      const path = camelToKebab(key)
      const fullPath = pathReplace(`${parentPath}/${path}`)
      const item = menu[key]
      const indexed = i === 0 && { isIndex: true }

      // If it's a route
      if (!isValidElement(item)) {
        const children = (item as RouteOptionReal<unknown>)?._ as RouteGenerator
        const _ = children && { _: routeGenerator(children, fullPath, false) }

        newMenu[key] = {
          ...item,
          path,
          fullPath,
          ...indexed,
          ..._,
        }

        continue
      }

      // If it's a component
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
