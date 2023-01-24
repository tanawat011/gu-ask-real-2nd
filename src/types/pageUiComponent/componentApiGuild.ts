export type ComponentApiGuideData<T = string> = {
  prop: Required<keyof T>
  desc: string
  val: string | JSX.Element
  default: string | JSX.Element
}

export type ComponentApiGuideColumns = {
  key: keyof ComponentApiGuideData
  label: string
}
