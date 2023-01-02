import mockAdapter from 'axios-mock-adapter'

import { axiosInstance, fetchApi } from './fetchApi'

// jest.mock('apiServices/auth/logout')

const mockAxios = new mockAdapter(axiosInstance)

describe('utils/axios/fetchApi', () => {
  afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset()
  })

  test('fetch api correctly', async () => {
    expect.assertions(1)

    mockAxios.onGet().reply(() => {
      return [200, {}, {}]
    })

    const response = await fetchApi({ method: 'GET', uri: '/test', qsEncode: { test: 'test' } })

    expect(response.status).toEqual(200)
  })

  test('fetch api error 401', async () => {
    expect.assertions(1)

    mockAxios.onGet().reply(401)

    const response = await fetchApi({ method: 'GET', uri: '/test' })

    expect(response.status).toEqual(401)
  })

  test('fetch api error 401 from logout path', async () => {
    expect.assertions(1)

    mockAxios.onGet().reply(401)

    const response = await fetchApi({ method: 'GET', uri: '/logout' })

    expect(response.status).toEqual(401)
  })

  test('fetch api error 500', async () => {
    expect.assertions(1)

    mockAxios.onGet().reply(500)

    const response = await fetchApi({ method: 'GET', uri: '/test' })

    expect(response.status).toEqual(500)
  })

  test('fetch api error timeout', async () => {
    expect.assertions(1)

    mockAxios.onGet().timeout()

    const response = await fetchApi({ method: 'GET', uri: '/test' })

    expect(response.status).toEqual(504)
  })
})
