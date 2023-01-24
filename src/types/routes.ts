import type { WithRequired } from '.'
import type { RenderRoute } from 'utils/route'

type WithChildrenRoute<T> = WithRequired<RenderRoute<T>, 'children'>

export type AuthRoutes = {
  login: RenderRoute
}
export type AuthRoutesChildren = WithChildrenRoute<AuthRoutes>

export type UiComponentRoutes = {
  button: RenderRoute
  buttonGroup: RenderRoute
  checkbox: RenderRoute
  textField: RenderRoute
  radioButton: RenderRoute
  switch: RenderRoute
  select: RenderRoute
  dateAndTime: RenderRoute
  calendar: RenderRoute
  slider: RenderRoute
  upload: RenderRoute
  rating: RenderRoute
}
export type UiComponentRoutesChildren = WithChildrenRoute<UiComponentRoutes>

export type MainRoutes = {
  home: RenderRoute
  todo: RenderRoute
  article: RenderRoute
  uiComponent: UiComponentRoutesChildren
}
export type MainRoutesChildren = WithChildrenRoute<MainRoutes>

export type ErrorRoutes = {
  401: RenderRoute
  403: RenderRoute
  404: RenderRoute
  500: RenderRoute
  502: RenderRoute
  503: RenderRoute
  504: RenderRoute
}
export type ErrorRoutesChildren = WithChildrenRoute<ErrorRoutes>

export type AssembleRoutes = {
  auth: AuthRoutesChildren
  main: MainRoutesChildren
  error: ErrorRoutesChildren
}
