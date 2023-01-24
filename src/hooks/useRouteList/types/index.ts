import type { AuthRoutesChildren } from './auth'
import type { ErrorRoutesChildren } from './error'
import type { MainRoutesChildren } from './main'
import type { WithRequired } from 'types/utilities'
import type { RenderRoute } from 'utils/route'

export type WithChildrenRoute<T> = WithRequired<RenderRoute<T>, 'children'>
export type WithJsx<T, K = JSX.Element> = {
  [key in keyof T]: K
}

// * ALL BASE ROUTES
export type AssembleRoutes = {
  auth: AuthRoutesChildren
  main: MainRoutesChildren
  error: ErrorRoutesChildren
}

export * from './auth'
export * from './error'
export * from './main'
