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
    dashboard2: RouteOption
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

export type _RouteOption<T = undefined> = {
  cd?: RouteOptionDeepChangeReplace<T>
  element?: JSX.Element
  params?: string[]
}

export type AllPaths = {
  main: {
    home: {
      dashboard: string
    }
    app: {
      todo: string
    }
    game: {
      sudoku: string
      ticTacToe: string
    }
    uiComponent: {
      input: {
        button: string
        buttonGroup: string
        calendar: string
        checkbox: string
        dateAndTime: string
        radioButton: string
        rating: string
        select: string
        slider: string
        switch: string
        textField: string
      }
    }
    lv1: {
      lv2: {
        lv3: string
      }
      lv2Id: string
    }
  }
  auth: {
    login: string
    register: string
    forgotPassword: string
    resetPassword: string
  }
  error: {
    404: string
    '*': string
    401: string
    403: string
    500: string
    502: string
    503: string
    504: string
  }
}

export type RouteOptionDeepChangeReplace<T> = {
  [Key in keyof T]: _RouteOption<T[Key]> | JSX.Element
}
