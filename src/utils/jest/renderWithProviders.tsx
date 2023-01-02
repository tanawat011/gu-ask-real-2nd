import type { RenderResult } from '@testing-library/react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

const AllTheProviders = ({ children }: { children: JSX.Element }) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>{children}</BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  )
}

interface RenderWithProvidersOptions {
  router?: {
    route: string
  }
  recoil?: object
}

export const renderWithProviders = (
  ui: JSX.Element,
  option?: RenderWithProvidersOptions,
): RenderResult => {
  const routerOption = { ...(option?.router || { route: '/' }) }
  window.history.pushState({}, 'Test page', routerOption.route)

  return {
    ...render(ui, { wrapper: AllTheProviders, ...routerOption }),
  }
}
