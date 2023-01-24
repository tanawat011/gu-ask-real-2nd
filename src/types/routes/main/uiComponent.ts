import type { WithChildrenRoute } from '..'
import type { RenderRoute } from 'utils/route'

// * INPUT ROUTES
export type InputRoutes = {
  button: RenderRoute
  buttonGroup: RenderRoute
  checkbox: RenderRoute
  textField: RenderRoute
  radioButton: RenderRoute
  switch: RenderRoute
  select: RenderRoute
  dateAndTime: RenderRoute
  calendar: RenderRoute
  slider: RenderRoute
  upload: RenderRoute
  rating: RenderRoute
}
export type InputRoutesChildren = WithChildrenRoute<InputRoutes>

// * UI COMPONENT ROUTES
export type UiComponentRoutes = {
  input: InputRoutesChildren
}
export type UiComponentRoutesChildren = WithChildrenRoute<UiComponentRoutes>
