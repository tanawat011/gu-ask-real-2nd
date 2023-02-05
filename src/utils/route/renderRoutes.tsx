import type { RouteOption } from 'hooks/useGetRoutes'

import React from 'react'

import { Route } from 'react-router-dom'

export const renderRoutes = <T = { [key: string]: RouteOption },>(
  routes: T,
) => {
  return Object.values(routes as unknown as { [key: string]: RouteOption }).map(
    (route) => {
      let routeChildren

      if (route._) {
        routeChildren = renderRoutes(route._)
      }

      const routeIndex = route.isIndex && (
        <Route index element={route.element} />
      )

      if (routeChildren) {
        return (
          <React.Fragment key={`route-${route.fullPath}`}>
            {routeIndex}
            <Route path={route.path} element={route.element}>
              {routeChildren}
            </Route>
          </React.Fragment>
        )
      }

      return (
        <React.Fragment key={`route-${route.fullPath}`}>
          {routeIndex}
          <Route path={route.path} element={route.element} />
        </React.Fragment>
      )
    },
  )
}
