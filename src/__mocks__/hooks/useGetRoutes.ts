export const main = {
  fullPath: '/',
  _: {
    home: {
      fullPath: '/',
      _: {
        dashboard: {
          fullPath: '/',
        },
      },
    },
    app: {
      fullPath: '/',
      _: {
        todo: {
          fullPath: '/',
          _: {
            dashboard: {
              fullPath: '/',
            },
          },
        },
        article: {
          fullPath: '/',
        },
      },
    },
    game: {
      fullPath: '/',
      _: {
        sudoku: {
          fullPath: '/',
        },
        ticTacToe: {
          fullPath: '/',
        },
      },
    },
    uiComponent: {
      fullPath: '/',
      _: {
        input: {
          fullPath: '/',
          _: {
            button: {
              fullPath: '/',
            },
            buttonGroup: {
              fullPath: '/',
            },
            calendar: {
              fullPath: '/',
            },
            checkbox: {
              fullPath: '/',
            },
            dateAndTime: {
              fullPath: '/',
            },
            radioButton: {
              fullPath: '/',
            },
            rating: {
              fullPath: '/',
            },
            select: {
              fullPath: '/',
            },
            slider: {
              fullPath: '/',
            },
            switch: {
              fullPath: '/',
            },
            textField: {
              fullPath: '/',
            },
            upload: {
              fullPath: '/',
            },
          },
        },
      },
    },
  },
}

export const auth = {
  fullPath: '/auth',
  _: {
    login: {
      fullPath: '/',
    },
    register: {
      fullPath: '/',
    },
    resetPassword: {
      fullPath: '/',
    },
    forgotPassword: {
      fullPath: '/',
    },
  },
}

export const error = {
  fullPath: '/',
  _: {
    404: {
      fullPath: '/',
    },
    401: {
      fullPath: '/',
    },
    403: {
      fullPath: '/',
    },
    500: {
      fullPath: '/',
    },
    501: {
      fullPath: '/',
    },
    502: {
      fullPath: '/',
    },
    503: {
      fullPath: '/',
    },
    504: {
      fullPath: '/',
    },
  },
}

const routers = {
  main,
  auth,
  error,
}

export const useGetRoutes = () => {
  const all = routers

  return { all, ...routers }
}
