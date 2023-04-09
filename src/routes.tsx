import type { RouteBase } from 'utils/route'

import { BrowserRouter, Routes } from 'react-router-dom'

import { useLocalSetting } from 'hooks/useLocalSetting'
import { AuthenticationLayout } from 'layouts/Authentication'
import { ErrorLayout } from 'layouts/Error'
import { MainLayout } from 'layouts/Main'
import { SudokuApp, TicTacToeApp } from 'pages/Games'
import {
  ButtonGroupUi,
  ButtonUi,
  IconFa,
  TextInputUi,
} from 'pages/UiComponents'
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
      screen: {
        breakpoint: string
        display: string
        box: string
        position: string
        overflow: string
      }
      flexboxAndGrid: {
        flex: string
        grid: string
        gap: string
        justify: string
        align: string
        place: string
      }
      typography: string
      action: {
        button: string
        buttonGroup: string
        dropdown: string
        modal: string
        swap: string
      }
      dataDisplay: {
        alert: string
        avatar: string
        badge: string
        card: string
        carousel: string
        chatBubble: string
        collapse: string
        countdown: string
        kbd: string
        progress: string
        radialProgress: string
        stat: string
        tooltip: string
      }
      input: {
        calendar: string
        checkbox: string
        fileInput: string
        dateTimeInput: string
        radioButton: string
        range: string
        rating: string
        select: string
        switch: string
        textInput: string
        inputGroup: string
      }
      table: string
      layout: {
        divider: string
        drawer: string
        footer: string
        hero: string
        indicator: string
        mask: string
        stack: string
        toast: string
      }
      navigation: {
        breadcrumb: string
        bottomNavigation: string
        link: string
        menu: string
        navbar: string
        pagination: string
        steps: string
        tab: string
      }
      mockup: {
        code: string
        phone: string
        window: string
      }
      icon: {
        fontAwesome: string
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
          screen: {
            children: {
              box: {
                element: <div>box</div>,
              },
              breakpoint: {
                element: <div>breakpoint</div>,
              },
              display: {
                element: <div>display</div>,
              },
              overflow: {
                element: <div>overflow</div>,
              },
              position: {
                element: <div>position</div>,
              },
            },
          },
          flexboxAndGrid: {
            children: {
              flex: {
                element: <div>flex</div>,
              },
              grid: {
                element: <div>grid</div>,
              },
              gap: {
                element: <div>gap</div>,
              },
              align: {
                element: <div>align</div>,
              },
              justify: {
                element: <div>justify</div>,
              },
              place: {
                element: <div>place</div>,
              },
            },
          },
          typography: {
            element: <div>typography</div>,
          },
          action: {
            children: {
              button: {
                element: <ButtonUi />,
              },
              buttonGroup: {
                element: <ButtonGroupUi />,
              },
              dropdown: {
                element: <div>dropdown</div>,
              },
              modal: {
                element: <div>modal</div>,
              },
              swap: {
                element: <div>swap</div>,
              },
            },
          },
          dataDisplay: {
            children: {
              alert: {
                element: <div>alert</div>,
              },
              avatar: {
                element: <div>avatar</div>,
              },
              badge: {
                element: <div>badge</div>,
              },
              card: {
                element: <div>card</div>,
              },
              carousel: {
                element: <div>carousel</div>,
              },
              chatBubble: {
                element: <div>chatBubble</div>,
              },
              collapse: {
                element: <div>collapse</div>,
              },
              countdown: {
                element: <div>countdown</div>,
              },
              kbd: {
                element: <div>kbd</div>,
              },
              progress: {
                element: <div>progress</div>,
              },
              radialProgress: {
                element: <div>radialProgress</div>,
              },
              stat: {
                element: <div>stat</div>,
              },
              tooltip: {
                element: <div>tooltip</div>,
              },
            },
          },
          input: {
            children: {
              calendar: {
                element: <div>calendar</div>,
              },
              checkbox: {
                element: <div>checkbox</div>,
              },
              dateTimeInput: {
                element: <div>dateTimeInput</div>,
              },
              fileInput: {
                element: <div>fileInput</div>,
              },
              inputGroup: {
                element: <div>inputGroup</div>,
              },
              radioButton: {
                element: <div>radioButton</div>,
              },
              range: {
                element: <div>range</div>,
              },
              rating: {
                element: <div>rating</div>,
              },
              select: {
                element: <div>select</div>,
              },
              switch: {
                element: <div>switch</div>,
              },
              textInput: {
                element: <TextInputUi />,
              },
            },
          },
          table: {
            element: <div>table</div>,
          },
          layout: {
            children: {
              divider: {
                element: <div>divider</div>,
              },
              drawer: {
                element: <div>drawer</div>,
              },
              footer: {
                element: <div>footer</div>,
              },
              hero: {
                element: <div>hero</div>,
              },
              indicator: {
                element: <div>indicator</div>,
              },
              mask: {
                element: <div>mask</div>,
              },
              stack: {
                element: <div>stack</div>,
              },
              toast: {
                element: <div>toast</div>,
              },
            },
          },
          navigation: {
            children: {
              bottomNavigation: {
                element: <div>bottomNavigation</div>,
              },
              breadcrumb: {
                element: <div>breadcrumb</div>,
              },
              link: {
                element: <div>link</div>,
              },
              menu: {
                element: <div>menu</div>,
              },
              navbar: {
                element: <div>navbar</div>,
              },
              pagination: {
                element: <div>pagination</div>,
              },
              steps: {
                element: <div>steps</div>,
              },
              tab: {
                element: <div>tab</div>,
              },
            },
          },
          mockup: {
            children: {
              code: {
                element: <div>code</div>,
              },
              phone: {
                element: <div>phone</div>,
              },
              window: {
                element: <div>window</div>,
              },
            },
          },
          icon: {
            children: {
              fontAwesome: {
                element: <IconFa />,
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
