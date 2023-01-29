import type {
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
  WithJsx,
} from './types'

import { AuthenticationLayout } from 'layouts/Authentication'
import { ErrorLayout } from 'layouts/Error'
import { MainLayout } from 'layouts/Main'
import { ButtonGroupUi, ButtonUi, TextFieldUi } from 'pages/UiComponents'
import { routeGenerator } from 'utils/route'

type RouteMain = {
  home: JSX.Element
  app: {
    todo: WithJsx<TodoRoutes>
    article: JSX.Element
  }
  uiComponent: WithJsx<UiComponentRoutes, WithJsx<InputRoutes>>
}

const routeMain: RouteMain = {
  home: <div>home</div>,
  app: {
    todo: {
      dashboard: <div>dashboard</div>,
    },
    article: <div>article</div>,
  },
  uiComponent: {
    input: {
      button: <ButtonUi />,
      buttonGroup: <ButtonGroupUi />,
      calendar: <div>calendar</div>,
      checkbox: <div>checkbox</div>,
      dateAndTime: <div>date & time</div>,
      radioButton: <div>radio button</div>,
      rating: <div>rating</div>,
      select: <div>select</div>,
      slider: <div>slider</div>,
      switch: <div>switch</div>,
      textField: <TextFieldUi />,
      upload: <div>upload</div>,
    },
  },
}

const routeAuth: WithJsx<AuthRoutes> = {
  login: <div>login</div>,
}

const routeError: WithJsx<ErrorRoutes> = {
  404: <div>error 404</div>,
  401: <div>error 401</div>,
  403: <div>error 403</div>,
  500: <div>error 500</div>,
  502: <div>error 502</div>,
  503: <div>error 503</div>,
  504: <div>error 504</div>,
}

export const main: MainRoutesChildren = {
  path: '/',
  fullPath: '/',
  element: <MainLayout />,
  children: routeGenerator<MainRoutes>(routeMain),
}

export const auth: AuthRoutesChildren = {
  path: 'auth',
  fullPath: '/auth',
  element: <AuthenticationLayout />,
  children: routeGenerator<AuthRoutes>(routeAuth),
}

export const error: ErrorRoutesChildren = {
  path: '',
  fullPath: '',
  element: <ErrorLayout />,
  children: routeGenerator<ErrorRoutes>(routeError),
}

type RouteList = {
  all: AssembleRoutes
  auth: AuthRoutesChildren
  main: MainRoutesChildren
  error: ErrorRoutesChildren
}

export const useRouteList = (): RouteList => {
  const all: AssembleRoutes = {
    auth,
    main,
    error,
  }

  return { all, main, auth, error }
}
