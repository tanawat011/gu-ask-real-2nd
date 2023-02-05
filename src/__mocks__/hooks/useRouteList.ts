export const auth = {
  fullPath: '/auth',
  children: {
    login: {
      fullPath: '/auth/login',
    },
  },
}

export const main = {
  fullPath: '/',
  children: {
    home: {
      fullPath: '/',
    },
    app: {
      fullPath: '/',
      children: {
        todo: {
          fullPath: '/',
          children: {
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
    demoApp: {
      fullPath: '/',
      children: {
        sudoku: {
          fullPath: '/',
        },
        todo: {
          fullPath: '/',
        },
        ticTacToe: {
          fullPath: '/',
        },
      },
    },
    uiComponent: {
      fullPath: '/',
      children: {
        button: {
          fullPath: '/',
        },
        buttonGroup: {
          fullPath: '/',
        },
        input: {
          fullPath: '/',
        },
      },
    },
  },
}

export const error = {
  fullPath: '/',
  children: {
    401: {
      fullPath: '/',
    },
    403: {
      fullPath: '/',
    },
    404: {
      fullPath: '/',
    },
    500: {
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

export const all = {
  auth,
  main,
  error,
}

export const useRouteList = () => ({
  all,
  auth,
  main,
  error,
})
