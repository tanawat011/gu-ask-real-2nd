import type { ButtonProps } from 'components/Button'
import type { ComponentApiGuideData } from 'types'

import { PreCode } from 'components/PreCode'

export const menuList = {
  basic: { id: 'basic', name: 'Basic' },
  color: { id: 'color', name: 'Color' },
  size: { id: 'size', name: 'Size' },
  shape: { id: 'shape', name: 'Shape' },
  disabled: { id: 'disabled', name: 'Disabled' },
  loading: { id: 'loading', name: 'Loading' },
  block: { id: 'block', name: 'Block' },
  vertical: { id: 'vertical', name: 'Vertical' },
  api: { id: 'api', name: 'API' },
}

export const componentApiTableData: ComponentApiGuideData<ButtonProps>[] = [
  {
    prop: 'label',
    desc: 'Text label of the button',
    val: <PreCode text='string' />,
    default: '-',
  },
]
