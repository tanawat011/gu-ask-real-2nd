import type { RouteBase } from 'utils/route'

import { BrowserRouter, Routes } from 'react-router-dom'

import { useLocalSetting } from 'hooks/useLocalSetting'
import { AuthenticationLayout } from 'layouts/Authentication'
import { ErrorLayout } from 'layouts/Error'
import { MainLayout } from 'layouts/Main'
import { SudokuApp, TicTacToeApp } from 'pages/Games'
import { ButtonGroupUi, ButtonUi, TextFieldUi } from 'pages/UiComponents'
import { generatePaths, generateRoutes } from 'utils/route'

type AllPaths = {
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
    }
  }
  auth: {
    login: string
    register: string
    forgotPassword: string
    resetPassword: string
  }
  error: {
    '*': string
    401: string
    403: string
    404: string
    500: string
    502: string
    503: string
    504: string
  }
}

const baseRoutes: RouteBase<AllPaths> = {
  main: {
    element: <MainLayout />,
    children: {
      home: {
        children: {
          dashboard: {
            element: <div>dashboard</div>,
          },
        },
      },
      app: {
        children: {
          todo: {
            element: <div>todo</div>,
          },
        },
      },
      game: {
        children: {
          sudoku: {
            element: <SudokuApp />,
          },
          ticTacToe: {
            element: <TicTacToeApp />,
          },
        },
      },
      uiComponent: {
        children: {
          input: {
            children: {
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
            },
          },
        },
      },
      lv1: {
        children: {
          lv2: {
            children: {
              lv3: {
                element: <div>lv3</div>,
              },
            },
          },
        },
      },
    },
  },
  auth: {
    element: <AuthenticationLayout />,
    children: {
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
    children: {
      404: {
        element: <div>404</div>,
      },
      '*': {
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

const allPaths = generatePaths<AllPaths>(baseRoutes)

export const mainRoute = allPaths.main

export const authRoute = allPaths.auth

export const errorRoute = allPaths.error

export const AppRoutes = () => {
  const [localSetting] = useLocalSetting()

  return (
    <div className={localSetting.theme.mode || 'light'}>
      <BrowserRouter>
        <Routes>{generateRoutes<AllPaths>(baseRoutes)}</Routes>
      </BrowserRouter>
    </div>
  )
}
