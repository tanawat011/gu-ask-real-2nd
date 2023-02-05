import type { DeepRequired } from 'ts-essentials'
import type { WithRequired } from 'types'

export type RouteOption<Children = undefined> = {
  path?: string // for render <Route path={path} />
  fullPath?: string // for call to navigate
  element?: JSX.Element
  icon?: JSX.Element
  isIndex?: boolean
  _?: Children
}

export type RouteOptionReal<T = undefined> = WithRequired<
  RouteOption<T>,
  'path' | 'fullPath' | '_'
>

type RouteOptionChildren<T = undefined> = WithRequired<RouteOption<T>, '_'>

export type RouteMain = {
  home: RouteOptionChildren<{
    dashboard: RouteOption
  }>
  app: RouteOptionChildren<{
    todo: RouteOptionChildren<{
      dashboard: RouteOption
    }>
    article: RouteOption
  }>
  game: RouteOptionChildren<{
    sudoku: RouteOption
    ticTacToe: RouteOption
  }>
  uiComponent: RouteOptionChildren<{
    input: RouteOptionChildren<{
      button: RouteOption
      buttonGroup: RouteOption
      calendar: RouteOption
      checkbox: RouteOption
      dateAndTime: RouteOption
      radioButton: RouteOption
      rating: RouteOption
      select: RouteOption
      slider: RouteOption
      switch: RouteOption
      textField: RouteOption
      upload: RouteOption
    }>
  }>
}

type RouteAuth = {
  login: RouteOption
  register: RouteOption
  forgotPassword: RouteOption
  resetPassword: RouteOption
}

type RouteError = {
  404: RouteOption
  401: RouteOption
  403: RouteOption
  500: RouteOption
  502: RouteOption
  503: RouteOption
  504: RouteOption
}

export type AllRoutes = {
  main: RouteOptionChildren<RouteMain>
  auth: RouteOptionChildren<RouteAuth>
  error: RouteOptionChildren<RouteError>
}

export type AllRoutesReal = {
  main: RouteOptionReal<DeepRequired<RouteMain>>
  auth: RouteOptionReal<DeepRequired<RouteAuth>>
  error: RouteOptionReal<DeepRequired<RouteError>>
}
