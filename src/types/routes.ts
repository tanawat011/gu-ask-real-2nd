import type { WithRequired } from '.'
import type { RenderRoute } from 'utils/route'

type WithChildrenRoute<T> = WithRequired<RenderRoute<T>, 'children'>

export type AuthRoutes = WithChildrenRoute<{
  login: RenderRoute
}>

export type MainRoutes = WithChildrenRoute<{
  home: RenderRoute
  home2: RenderRoute
}>

export type ErrorRoutes = WithChildrenRoute<{
  e401: RenderRoute
  e403: RenderRoute
  e404: RenderRoute
  e500: RenderRoute
  e502: RenderRoute
  e503: RenderRoute
  e504: RenderRoute
}>

export type AssembleRoutes = {
  auth: AuthRoutes
  main: MainRoutes
  error: ErrorRoutes
}
