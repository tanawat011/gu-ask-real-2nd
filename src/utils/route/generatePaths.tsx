import type { RouteBase, RouteOption } from './generateRoutes'

import { camelToKebab } from 'utils/string'

export const generatePaths = <T,>(
  routes: RouteBase<T>,
  parentPath?: string,
): T => {
  const routesArr = Object.entries(routes) as [string, RouteOption<T>][]
  const tempRoutes = {}

  routesArr.forEach(([key, route], index) => {
    const isMainRoute = index === 0 && key === 'main'
    const path = route.path ? `/${route.path}` : `/${camelToKebab(key)}`
    const fullParentPath = parentPath || ''

    if (route.children) {
      const finalPath = isMainRoute ? '' : `${fullParentPath}${path}`

      tempRoutes[key as never] = {
        ...(generatePaths(route.children, finalPath) as object),
      } as never
    } else {
      if (path !== '/*') {
        tempRoutes[key as never] = `${fullParentPath}${path}` as never
      }
    }
  })

  return tempRoutes as T
}
