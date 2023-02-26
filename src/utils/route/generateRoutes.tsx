import React from 'react'

import { Route } from 'react-router-dom'

import { camelToKebab } from 'utils/string'

export type RouteOption<T> = {
  path?: string
  element?: JSX.Element
  children?: { [Key in keyof T]: RouteOption<T[Key]> }
}

export type RouteBase<T> = { [Key in keyof T]: RouteOption<T[Key]> }

export const generateRoutes = <T,>(routes: RouteBase<T>) => {
  const routesArr = Object.entries(routes) as RouteOption<T>[]

  return (routesArr as [string, RouteOption<T>][]).map(
    ([key, route], index) => {
      const isMainRoute = index === 0 && key === 'main'
      const path = route.path || camelToKebab(key)

      if (route.children) {
        const finalPath = isMainRoute ? '' : path

        return (
          <React.Fragment key={index}>
            <Route path={finalPath} element={route.element}>
              {generateRoutes(route.children)}
            </Route>
          </React.Fragment>
        )
      }

      const finalPath = isMainRoute ? '' : path

      return (
        <React.Fragment key={index}>
          {index === 0 && <Route index element={route.element} />}

          <Route path={finalPath} element={route.element} />
        </React.Fragment>
      )
    },
  )
}
