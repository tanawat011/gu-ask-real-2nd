import type { WithChildrenRoute } from '..'
import type { RenderRoute } from 'utils/route'

// * DEMO APP ROUTES
export type DemoAppRoutes = {
  sudoku: RenderRoute
  todo: RenderRoute
  xo: RenderRoute
}
export type DemoAppRoutesChildren = WithChildrenRoute<DemoAppRoutes>
