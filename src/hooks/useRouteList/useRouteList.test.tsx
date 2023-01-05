import { render } from '@testing-library/react'

import { useRouteList } from './useRouteList'

jest.mock('./useRouteList', () => ({
  ...jest.requireActual('./useRouteList'),
}))
jest.mock('layouts/Authentication')
jest.mock('layouts/Error')
jest.mock('layouts/Main')

const ExampleComponent = () => {
  const { allRoutes, authRoutes, errorRoutes, mainRoutes } = useRouteList()

  return (
    <div>
      <p>{JSON.stringify(allRoutes)}</p>
      <p>{JSON.stringify(authRoutes)}</p>
      <p>{JSON.stringify(errorRoutes)}</p>
      <p>{JSON.stringify(mainRoutes)}</p>
    </div>
  )
}

describe('useRouteList', () => {
  test('should return all routes', () => {
    expect.hasAssertions()

    const { asFragment } = render(<ExampleComponent />)

    expect(asFragment()).toMatchSnapshot()
  })
})
