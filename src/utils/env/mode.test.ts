import { isDevelopmentMode } from './mode'

let windowSpy: jest.SpyInstance

describe('utils/env/mode', () => {
  beforeEach(() => {
    windowSpy = jest.spyOn(window, 'window', 'get')
  })

  afterEach(() => {
    windowSpy.mockRestore()
  })

  test('isDevelopmentMode: is development mode', () => {
    expect.assertions(1)

    windowSpy = jest.spyOn(window, 'window', 'get')

    windowSpy.mockImplementation(() => ({
      _env_: {
        NODE_ENV: 'development',
      },
    }))

    expect(isDevelopmentMode()).toEqual(true)
  })

  test('isDevelopmentMode: is production mode', () => {
    expect.assertions(1)

    windowSpy = jest.spyOn(window, 'window', 'get')

    windowSpy.mockImplementation(() => ({
      _env_: {
        NODE_ENV: 'production',
      },
    }))

    expect(isDevelopmentMode()).toEqual(false)
  })
})
