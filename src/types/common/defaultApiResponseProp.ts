export type DefaultApiResponseProp<T> = {
  error: boolean
  code: number
  data: T
  total: number
}
