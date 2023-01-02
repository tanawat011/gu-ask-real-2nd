
export const authRoutes = {
  fullPath: '/auth',
  children: {
    login: {
      fullPath: '/auth/login',
    },
  },
}

export const mainRoutes = {
  children: {
    home: {
      fullPath: '/',
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
  backoffice: mainRoutes,
  error: errorRoutes,
}
