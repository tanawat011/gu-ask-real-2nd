import type { WithRequired } from '.'
import type { RenderRoute } from 'utils/route'

type WithChildrenRoute<T> = WithRequired<RenderRoute<T>, 'children'>

export type AuthRoutes = WithChildrenRoute<{
  login: RenderRoute
}>

export type ComponentRoutes = WithChildrenRoute<{
  card: RenderRoute
  button: RenderRoute
  input: RenderRoute
}>

export type MainRoutes = WithChildrenRoute<{
  home: RenderRoute
  todo: RenderRoute
  article: RenderRoute
  component: ComponentRoutes
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
