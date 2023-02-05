import type {
  AppRoutesChildren,
  UiComponentRoutesChildren,
  WithChildrenRoute,
  DemoAppRoutesChildren,
} from '..'
import type { RenderRoute } from 'utils/route'

// * MAIN ROUTES
export type MainRoutes = {
  home: RenderRoute
  app: AppRoutesChildren
  demoApp: DemoAppRoutesChildren
  uiComponent: UiComponentRoutesChildren
}
export type MainRoutesChildren = WithChildrenRoute<MainRoutes>

export * from './app'
export * from './uiComponent'
export * from './demoApp'
