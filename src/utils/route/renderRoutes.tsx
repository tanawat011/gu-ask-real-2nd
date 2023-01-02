import React from 'react'

import { Route } from 'react-router-dom'

export type RenderRoute<T = undefined> = {
  path: string
  fullPath: string
  element?: React.ReactNode
  isIndex?: boolean
  children?: T
}

export const renderRoutes = <T = { [key: string]: RenderRoute },>(routes: T) => {
  return Object.values(routes as unknown as { [key: string]: RenderRoute }).map((route) => {
    let routeChildren

    if (route.children) {
      routeChildren = renderRoutes(route.children)
    }

    const routeIndex = route.isIndex && <Route index element={route.element} />

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
  })
}
