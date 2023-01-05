export const authRoutes = {
  fullPath: '/auth',
  children: {
    login: {
      fullPath: '/auth/login',
    },
  },
}

export const componentRoutes = {
  children: {
    card: {
      fullPath: '/',
    },
    button: {
      fullPath: '/',
    },
    input: {
      fullPath: '/',
    },
  },
}

export const mainRoutes = {
  children: {
    home: {
      fullPath: '/',
    },
    todo: {
      fullPath: '/',
    },
    article: {
      fullPath: '/',
    },
    component: {
      fullPath: '/',
      ...componentRoutes,
    },
  },
}

export const errorRoutes = {
  children: {
    e401: {
      fullPath: '/',
    },
    e403: {
      fullPath: '/',
    },
    e404: {
      fullPath: '/',
    },
    e500: {
      fullPath: '/',
    },
    e502: {
      fullPath: '/',
    },
    e503: {
      fullPath: '/',
    },
    e504: {
      fullPath: '/',
    },
  },
}

export const allRoutes = {
  auth: authRoutes,
  mainRoutes: mainRoutes,
  error: errorRoutes,
}

export const useRouteList = () => ({
  allRoutes,
  authRoutes,
  mainRoutes,
  errorRoutes,
})
