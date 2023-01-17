import type { AssembleRoutes, AuthRoutes, ErrorRoutes, MainRoutes } from 'types'

import { AuthenticationLayout } from 'layouts/Authentication'
import { ErrorLayout } from 'layouts/Error'
import { MainLayout } from 'layouts/Main'
import { ButtonUi, InputUi } from 'pages/UiComponents'

export const mainRoutes: MainRoutes = {
  path: '/',
  fullPath: '/',
  element: <MainLayout />,
  children: {
    home: {
      path: '',
      fullPath: '/',
      element: <div>home</div>,
      isIndex: true,
    },
    todo: {
      path: 'todo',
      fullPath: '/todo',
      element: <div>todo</div>,
    },
    article: {
      path: 'article',
      fullPath: '/article',
      element: (
        <div>
          <div className='popover'>
            <a href='#'>
              <h2 className='popover__title'>Hover:me</h2>
            </a>
            <div className='popover-content'>
              <p className='popover__message'>Joseph Francis </p>
            </div>
          </div>
        </div>
      ),
    },
    component: {
      path: 'component',
      fullPath: '/component',
      children: {
        card: {
          path: 'card',
          fullPath: '/component/card',
          element: <div>card</div>,
        },
        button: {
          path: 'button',
          fullPath: '/component/button',
          element: <ButtonUi />,
        },
        input: {
          path: 'input',
          fullPath: '/component/input',
          element: <InputUi />,
        },
      },
    },
  },
}

export const authRoutes: AuthRoutes = {
  path: 'auth',
  fullPath: '/auth',
  element: <AuthenticationLayout />,
  children: {
    login: {
      path: 'login',
      fullPath: '/auth/login',
      element: <div>login</div>,
      isIndex: true,
    },
  },
}

export const errorRoutes: ErrorRoutes = {
  path: '',
  fullPath: '',
  element: <ErrorLayout />,
  children: {
    e401: {
      path: '401',
      fullPath: '/401',
      element: <div>error 401</div>,
    },
    e403: {
      path: '403',
      fullPath: '/403',
      element: <div>error 403</div>,
    },
    e404: {
      path: '404',
      fullPath: '/404',
      element: <div>error 404</div>,
    },
    e500: {
      path: '500',
      fullPath: '/500',
      element: <div>error 500</div>,
    },
    e502: {
      path: '502',
      fullPath: '/502',
      element: <div>error 502</div>,
    },
    e503: {
      path: '503',
      fullPath: '/503',
      element: <div>error 503</div>,
    },
    e504: {
      path: '504',
      fullPath: '/504',
      element: <div>error 504</div>,
    },
  },
}

type RouteList = {
  allRoutes: AssembleRoutes
  mainRoutes: MainRoutes
  authRoutes: AuthRoutes
  errorRoutes: ErrorRoutes
}

export const useRouteList = (): RouteList => {
  const allRoutes: AssembleRoutes = {
    auth: authRoutes,
    main: mainRoutes,
    error: errorRoutes,
  }

  return { allRoutes, mainRoutes, authRoutes, errorRoutes }
}
