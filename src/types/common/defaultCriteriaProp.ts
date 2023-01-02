import type { Order } from './order'

export type defaultCriteriaProp = {
  q?: string
  page?: number
  limit?: number
  order?: Order
  sort?: string
  active?: boolean
}
