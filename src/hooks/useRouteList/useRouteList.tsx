import type { ObjectKeyOf } from 'types'
import type {
  AppRoutes,
  AssembleRoutes,
  AuthRoutes,
  AuthRoutesChildren,
  ErrorRoutes,
  ErrorRoutesChildren,
  InputRoutes,
  MainRoutes,
  MainRoutesChildren,
  TodoRoutes,
  UiComponentRoutes,
} from 'types/routes'

import { AuthenticationLayout } from 'layouts/Authentication'
import { ErrorLayout } from 'layouts/Error'
import { MainLayout } from 'layouts/Main'
import { ButtonUi } from 'pages/UiComponents'
import { routeGenerator } from 'utils/route'

const inputRoutes: ObjectKeyOf<InputRoutes, JSX.Element> = {
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

const uiComponentRoutes: ObjectKeyOf<UiComponentRoutes, InputRoutes> = {
  input: routeGenerator<InputRoutes>('ui-component/input', inputRoutes),
}

const todoRoutes: ObjectKeyOf<TodoRoutes, JSX.Element> = {
  dashboard: <div>dashboard</div>,
}

const appRoutes: ObjectKeyOf<AppRoutes, JSX.Element | TodoRoutes> = {
  todo: routeGenerator<TodoRoutes>('app/todo', todoRoutes),
  article: <div>article</div>,
}

const mainRoutes: ObjectKeyOf<
  MainRoutes,
  JSX.Element | AppRoutes | UiComponentRoutes
> = {
  home: <div>home</div>,
  app: routeGenerator<AppRoutes, TodoRoutes>('app', appRoutes),
  uiComponent: routeGenerator<UiComponentRoutes, InputRoutes>(
    'ui-component',
    uiComponentRoutes,
  ),
}

const authRoutes: ObjectKeyOf<AuthRoutes, JSX.Element> = {
  login: <div>login</div>,
}

const errorRoutes: ObjectKeyOf<ErrorRoutes, JSX.Element> = {
  404: <div>error 404</div>,
  401: <div>error 401</div>,
  403: <div>error 403</div>,
  500: <div>error 500</div>,
  502: <div>error 502</div>,
  503: <div>error 503</div>,
  504: <div>error 504</div>,
}

export const mainRootRoute: MainRoutesChildren = {
  path: '/',
  fullPath: '/',
  element: <MainLayout />,
  children: routeGenerator<MainRoutes, UiComponentRoutes | AppRoutes>(
    '',
    mainRoutes,
  ),
}

export const authRootRoute: AuthRoutesChildren = {
  path: 'auth',
  fullPath: '/auth',
  element: <AuthenticationLayout />,
  children: routeGenerator<AuthRoutes>('auth', authRoutes),
}

export const errorRootRoute: ErrorRoutesChildren = {
  path: '',
  fullPath: '',
  element: <ErrorLayout />,
  children: routeGenerator<ErrorRoutes>('', errorRoutes),
}

type RouteList = {
  allRoutes: AssembleRoutes
  authRootRoute: AuthRoutesChildren
  mainRootRoute: MainRoutesChildren
  errorRootRoute: ErrorRoutesChildren
}

export const useRouteList = (): RouteList => {
  const allRoutes: AssembleRoutes = {
    auth: authRootRoute,
    main: mainRootRoute,
    error: errorRootRoute,
  }

  return { allRoutes, mainRootRoute, authRootRoute, errorRootRoute }
}
