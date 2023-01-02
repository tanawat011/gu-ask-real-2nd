import type { AxiosError, AxiosResponse } from 'axios'
import type { HTTP_METHOD, ObjectAnyKey } from 'types'

// import { captureException } from '@sentry/browser'
import axios from 'axios'
import qs from 'qs'

import { ERROR_CODE } from 'types'

// import { errorRoutes } from 'Routes'
// import { logout } from 'apiServices/auth/logout'

export type Fetch = {
  uri: string
  method: HTTP_METHOD
  headers?: ObjectAnyKey

  /**
   * Data body ('Content-Type': 'application/json') together with Form data ('Content-Type': 'multipart/form-data')
   */
  body?: ObjectAnyKey

  /**
   * Query string params
   */
  params?: ObjectAnyKey

  /**
   * Query string encode ('Content-Type': 'x-www-form-urlencoded')
   */
  qsEncode?: ObjectAnyKey
}

export type Response<T> = {
  status: number
  body: T
}

export const axiosInstance = axios.create({
  timeout: 30000,
  headers: { 'X-Example': 'test' },
  withCredentials: true,
})

axiosInstance.interceptors.response.use(
  async (res: AxiosResponse) => res,
  async (err: AxiosError) => {
    const resError = err.response
    const resStatusCode = resError?.status || 500
    // const indexOfErrorRoute = `e${resStatusCode}` as keyof typeof errorRoutes.children
    // const path = errorRoutes.children[indexOfErrorRoute].fullPath
    const url = resError?.config.url || ''
    const isLogoutError = url.search(/logout/) > 0

    switch (resStatusCode) {
      case 401:
        if (!isLogoutError) {
          // await logout()
        }

        break

      default:
        // window.location.replace(path)
        break
    }

    throw err
  },
)

export const fetchApi = async <T>(payload: Fetch): Promise<Response<T>> => {
  axiosInstance.defaults.baseURL = window._env_?.REACT_APP_API_URL

  try {
    const { uri, qsEncode, body, ...options } = payload
    const queryStringData = qsEncode ? qs.stringify(qsEncode) : null

    const response: AxiosResponse = await axiosInstance({
      url: uri,
      data: body || queryStringData || undefined,
      ...options,
    })

    return {
      status: response.status,
      body: response.data,
    }
  } catch (error) {
    // captureException(error)

    const _error = error as AxiosError

    if (_error.code === ERROR_CODE.TIMEOUT) {
      // window.location.replace(errorRoutes.children.e504.fullPath)

      return {
        status: 504,
        body: undefined as T,
      }
    }

    return {
      status: _error.response?.status as number,
      body: undefined as T,
    }
  }
}
