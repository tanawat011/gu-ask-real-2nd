import type { WithChildrenRoute } from '..'
import type { RenderRoute } from 'utils/route'

// * TODO ROUTES
export type TodoRoutes = {
  dashboard: RenderRoute
}
export type TodoRoutesChildren = WithChildrenRoute<TodoRoutes>

// * APP ROUTES
export type AppRoutes = {
  home: RenderRoute
  todo: TodoRoutesChildren
  article: RenderRoute
}
export type AppRoutesChildren = WithChildrenRoute<AppRoutes>
