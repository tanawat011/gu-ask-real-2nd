import type { WithRequired } from 'types/utilities'
import type { RenderRoute } from 'utils/route'

export type WithChildrenRoute<T> = WithRequired<RenderRoute<T>, 'children'>

export * from './auth'
export * from './error'
export * from './main'
