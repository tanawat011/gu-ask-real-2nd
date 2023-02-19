import type {
  AllPaths,
  AllRoutes,
  AllRoutesReal,
  RouteOptionDeepChangeReplace,
  _RouteOption,
} from './types'

import { IconHouse } from 'components/Icons'
import { AuthenticationLayout } from 'layouts/Authentication'
import { ErrorLayout } from 'layouts/Error'
import { MainLayout } from 'layouts/Main'
import { SudokuApp, TicTacToeApp } from 'pages/Games'
import { ButtonGroupUi, ButtonUi, TextFieldUi } from 'pages/UiComponents'
import { routeGenerator } from 'utils/route'
import { camelToKebab } from 'utils/string'

const a: RouteOptionDeepChangeReplace<AllPaths> = {
  main: {
    cd: {
      home: {
        cd: {
          dashboard: <div>dashboard</div>,
        },
      },
      app: {
        cd: {
          todo: <div>todo</div>,
        },
      },
      game: {
        cd: {
          sudoku: <div>sudoku</div>,
          ticTacToe: <div>ticTacToe</div>,
        },
      },
      uiComponent: {
        cd: {
          input: {
            cd: {
              button: <div>button</div>,
              buttonGroup: <div>buttonGroup</div>,
              calendar: <div>calendar</div>,
              checkbox: <div>checkbox</div>,
              dateAndTime: <div>dateAndTime</div>,
              radioButton: <div>radioButton</div>,
              rating: <div>rating</div>,
              select: <div>select</div>,
              slider: <div>slider</div>,
              switch: <div>switch</div>,
              textField: <div>textField</div>,
            },
          },
        },
      },
      lv1: {
        cd: {
          lv2: {
            cd: {
              lv3: <div>lv3</div>,
            },
          },
          lv2Id: {
            element: <div>lv2Id</div>,
            params: ['id'],
          },
        },
      },
    },
  },
  auth: {
    cd: {
      login: <div>login</div>,
      register: <div>register</div>,
      forgotPassword: <div>forgotPassword</div>,
      resetPassword: <div>resetPassword</div>,
    },
  },
  error: {
    cd: {
      404: <div>404</div>,
      '*': <div>*</div>,
      401: <div>401</div>,
      403: <div>403</div>,
      500: <div>500</div>,
      502: <div>502</div>,
      503: <div>503</div>,
      504: <div>504</div>,
    },
  },
}

export const generatePaths = <T,>(
  routes: RouteOptionDeepChangeReplace<T>,
  parentPath?: string,
): T => {
  const routesArr = Object.entries(routes) as [string, _RouteOption][]
  const tempRoutes = {}

  routesArr.forEach(([key, route]) => {
    if (route.cd) {
      const path = parentPath ? `${parentPath}/${key}` : key

      tempRoutes[key as never] = {
        ...(generatePaths(route.cd, path) as object),
      } as never
    } else {
      const fullParentPath = parentPath ? `/${parentPath}` : ''
      const fullPath = key ? `/${key}` : ''

      if (fullPath !== '/*') {
        const ignorePath = ['/main']
        let mergePath = `${fullParentPath}${fullPath}`

        ignorePath.forEach((path) => {
          if (mergePath.includes(path)) {
            mergePath = mergePath.replaceAll(path, '')
          }
        })

        tempRoutes[key as never] = camelToKebab(mergePath) as never
      }
    }
  })

  return tempRoutes as T
}

const routersOption: AllRoutes = {
  main: {
    element: <MainLayout />,
    _: {
      home: {
        _: {
          dashboard: {
            element: <div>dashboard</div>,
            icon: <IconHouse size='lg' />,
          },
          dashboard2: {
            element: <div>dashboard2</div>,
            icon: <IconHouse size='lg' />,
          },
        },
      },
      app: {
        _: {
          article: {
            element: <div>article</div>,
            icon: <IconHouse size='lg' />,
          },
          todo: {
            icon: <IconHouse size='lg' />,
            _: {
              dashboard: {
                element: <div>dashboard</div>,
              },
            },
          },
        },
      },
      game: {
        _: {
          sudoku: {
            element: <SudokuApp />,
            icon: <IconHouse size='lg' />,
          },
          ticTacToe: {
            element: <TicTacToeApp />,
            icon: <IconHouse size='lg' />,
          },
        },
      },
      uiComponent: {
        _: {
          input: {
            icon: <IconHouse size='lg' />,
            _: {
              button: {
                element: <ButtonUi />,
              },
              buttonGroup: {
                element: <ButtonGroupUi />,
              },
              calendar: {
                element: <div>calendar</div>,
              },
              checkbox: {
                element: <div>checkbox</div>,
              },
              dateAndTime: {
                element: <div>dateAndTime</div>,
              },
              radioButton: {
                element: <div>radioButton</div>,
              },
              rating: {
                element: <div>rating</div>,
              },
              select: {
                element: <div>select</div>,
              },
              slider: {
                element: <div>slider</div>,
              },
              switch: {
                element: <div>switch</div>,
              },
              textField: {
                element: <TextFieldUi />,
              },
              upload: {
                element: <div>calendar</div>,
              },
            },
          },
        },
      },
    },
  },
  auth: {
    element: <AuthenticationLayout />,
    _: {
      login: {
        element: <div>login</div>,
      },
      register: {
        element: <div>register</div>,
      },
      forgotPassword: {
        element: <div>forgotPassword</div>,
      },
      resetPassword: {
        element: <div>resetPassword</div>,
      },
    },
  },
  error: {
    element: <ErrorLayout />,
    _: {
      404: {
        element: <div>404</div>,
      },
      401: {
        element: <div>401</div>,
      },
      403: {
        element: <div>403</div>,
      },
      500: {
        element: <div>500</div>,
      },
      502: {
        element: <div>502</div>,
      },
      503: {
        element: <div>503</div>,
      },
      504: {
        element: <div>504</div>,
      },
    },
  },
}

const routers = routeGenerator<AllRoutesReal>(routersOption)

export const main = routers.main

export const auth = routers.auth

export const error = routers.error

type Routes = {
  all: AllRoutes
} & AllRoutesReal

export const useGetRoutes = (): Routes => {
  const all = routers

  return { all, ...routers }
}
