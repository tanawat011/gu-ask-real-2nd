import type {
  AssembleRoutes,
  AuthRoutesChildren,
  UiComponentRoutes,
  ErrorRoutesChildren,
  MainRoutes,
  MainRoutesChildren,
  ObjectKeyOf,
  AuthRoutes,
  ErrorRoutes,
} from 'types'

import { AuthenticationLayout } from 'layouts/Authentication'
import { ErrorLayout } from 'layouts/Error'
import { MainLayout } from 'layouts/Main'
import { ButtonUi } from 'pages/UiComponents'
import { routeGenerator } from 'utils/route'

// const inputList: ObjectKeyOf<UiComponentRoutes, JSX.Element> = {
//   button: <ButtonUi />,
//   buttonGroup: <div>button group</div>,
//   calendar: <div>calendar</div>,
//   checkbox: <div>checkbox</div>,
//   dateAndTime: <div>date & time</div>,
//   radioButton: <div>radio button</div>,
//   rating: <div>rating</div>,
//   select: <div>select</div>,
//   slider: <div>slider</div>,
//   switch: <div>switch</div>,
//   textField: <div>text field</div>,
//   upload: <div>upload</div>,
// }

const uiComponentList: ObjectKeyOf<UiComponentRoutes, JSX.Element> = {
  button: <ButtonUi />,
  buttonGroup: <div>button group</div>,
  calendar: <div>calendar</div>,
  checkbox: <div>checkbox</div>,
  dateAndTime: <div>date & time</div>,
  radioButton: <div>radio button</div>,
  rating: <div>rating</div>,
  select: <div>select</div>,
  slider: <div>slider</div>,
  switch: <div>switch</div>,
  textField: <div>text field</div>,
  upload: <div>upload</div>,
}

const mainList: ObjectKeyOf<MainRoutes, JSX.Element | UiComponentRoutes> = {
  home: <div>home</div>,
  todo: <div>todo</div>,
  article: <div>article</div>,
  uiComponent: routeGenerator<UiComponentRoutes>(
    'ui-component',
    uiComponentList,
  ),
}

export const mainRoutes: MainRoutesChildren = {
  path: '/',
  fullPath: '/',
  element: <MainLayout />,
  children: routeGenerator<MainRoutes, UiComponentRoutes>('', mainList),
}

const authList: ObjectKeyOf<AuthRoutes, JSX.Element> = {
  login: <div>login</div>,
}

export const authRoutes: AuthRoutesChildren = {
  path: 'auth',
  fullPath: '/auth',
  element: <AuthenticationLayout />,
  children: routeGenerator<AuthRoutes>('auth', authList),
}

const errorList: ObjectKeyOf<ErrorRoutes, JSX.Element> = {
  404: <div>error 404</div>,
  401: <div>error 401</div>,
  403: <div>error 403</div>,
  500: <div>error 500</div>,
  502: <div>error 502</div>,
  503: <div>error 503</div>,
  504: <div>error 504</div>,
}

export const errorRoutes: ErrorRoutesChildren = {
  path: '',
  fullPath: '',
  element: <ErrorLayout />,
  children: routeGenerator<ErrorRoutes>('', errorList),
}

type RouteList = {
  allRoutes: AssembleRoutes
  mainRoutes: MainRoutesChildren
  authRoutes: AuthRoutesChildren
  errorRoutes: ErrorRoutesChildren
}

export const useRouteList = (): RouteList => {
  const allRoutes: AssembleRoutes = {
    auth: authRoutes,
    main: mainRoutes,
    error: errorRoutes,
  }

  return { allRoutes, mainRoutes, authRoutes, errorRoutes }
}
