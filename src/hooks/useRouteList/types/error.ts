import type { WithChildrenRoute } from '.'
import type { RenderRoute } from 'utils/route'

// * ERROR ROUTES
export type ErrorRoutes = {
  401: RenderRoute
  403: RenderRoute
  404: RenderRoute
  500: RenderRoute
  502: RenderRoute
  503: RenderRoute
  504: RenderRoute
}
export type ErrorRoutesChildren = WithChildrenRoute<ErrorRoutes>
