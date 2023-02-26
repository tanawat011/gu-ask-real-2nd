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
    const _path = route?.path === '' ? '' : `/${route.path}` // when path is empty string, it will be not add the slash
    const path = route?.path !== undefined ? _path : `/${camelToKebab(key)}` // validate path is undefined only not included the empty string
    const fullParentPath = parentPath || ''
    const fullPath = `${fullParentPath}${path}`

    if (route.children) {
      const finalPath = isMainRoute ? '' : fullPath

      tempRoutes[key as never] = {
        ...(generatePaths(route.children, finalPath) as object),
      } as never
    } else {
      if (path !== '/*') {
        tempRoutes[key as never] = fullPath as never
      }
    }
  })

  return tempRoutes as T
}
