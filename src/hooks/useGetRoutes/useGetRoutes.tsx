import type { AllRoutes, AllRoutesReal } from './types'

import { IconHouse } from 'components/Icons'
import { AuthenticationLayout } from 'layouts/Authentication'
import { ErrorLayout } from 'layouts/Error'
import { MainLayout } from 'layouts/Main'
import { SudokuApp, TicTacToeApp } from 'pages/Games'
import { ButtonGroupUi, ButtonUi, TextFieldUi } from 'pages/UiComponents'
import { routeGenerator } from 'utils/route'

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
