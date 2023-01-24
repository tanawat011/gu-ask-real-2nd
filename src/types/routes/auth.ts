import type { WithChildrenRoute } from '.'
import type { RenderRoute } from 'utils/route'

// * AUTH ROUTES
export type AuthRoutes = {
  login: RenderRoute
}
export type AuthRoutesChildren = WithChildrenRoute<AuthRoutes>
