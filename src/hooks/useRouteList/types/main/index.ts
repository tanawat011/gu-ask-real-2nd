import type {
  AppRoutesChildren,
  UiComponentRoutesChildren,
  WithChildrenRoute,
} from '..'
import type { RenderRoute } from 'utils/route'

// * MAIN ROUTES
export type MainRoutes = {
  home: RenderRoute
  app: AppRoutesChildren
  uiComponent: UiComponentRoutesChildren
}
export type MainRoutesChildren = WithChildrenRoute<MainRoutes>

export * from './app'
export * from './uiComponent'
