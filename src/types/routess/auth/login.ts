import type { WithChildrenRoute } from '..'
import type { RenderRoute } from 'utils/route'

// * LOGIN ROUTES
export type LoginRoutes = {
  login: RenderRoute
}
export type LoginRoutesChildren = WithChildrenRoute<LoginRoutes>
