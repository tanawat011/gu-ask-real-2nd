import type { ButtonProps } from 'components/Button'
import type { ComponentApiGuideData } from 'types'

import { PreCode } from 'components/PreCode'

export const containerId = 'button-ui'

export const menuList = {
  label: { id: 'label', name: 'Label' }, // * string
  helperText: { id: 'helperText', name: 'HelperText' }, // * string, ReactNode
  error: { id: 'error', name: 'Error' }, // * boolean, string
  variant: { id: 'variant', name: 'Variant' }, // * basic, outline, filled, underline
  color: { id: 'color', name: 'Color' },
  size: { id: 'size', name: 'Size' },
  shape: { id: 'shape', name: 'Shape' },
  required: { id: 'required', name: 'Required' }, // * boolean
  disabled: { id: 'disabled', name: 'Disabled' }, // * boolean
  type: { id: 'type', name: 'Type' }, // * email, password, number, tel, url, search
  multiline: { id: 'multiline', name: 'Multiline' }, // * textarea
  margin: { id: 'margin', name: 'Margin' }, // * none, dense, normal
  icon: { id: 'icon', name: 'Icon' }, // * string, ReactNode
  iconPosition: { id: 'iconPosition', name: 'IconPosition' }, // * left, right
  loading: { id: 'loading', name: 'Loading' }, // * boolean, string
  width: { id: 'width', name: 'Width' }, // * string
  api: { id: 'api', name: 'API' },
}

export const buttonApiTableData: ComponentApiGuideData<ButtonProps>[] = [
  {
    prop: 'label',
    desc: 'Text label of the button',
    val: <PreCode text='string' />,
    default: '-',
  },
  {
    prop: 'icon',
    desc: 'Render icon',
    val: (
      <>
        <PreCode text='string' />, <PreCode text='ReactNode' />
      </>
    ),
    default: '-',
  },
  {
    prop: 'iconPosition',
    desc: 'Icon prop can set position',
    val: (
      <>
        <PreCode text='left' /> or <PreCode text='right' />
      </>
    ),
    default: <PreCode text='left' />,
  },
  {
    prop: 'onClick',
    desc: 'Handler event when button clicked',
    val: (
      <>
        <PreCode text='(event) => void' />
      </>
    ),
    default: '-',
  },
  {
    prop: 'variant',
    desc: 'The variant of the button',
    val: (
      <>
        <PreCode text='primary' />, <PreCode text='secondary' />,{' '}
        <PreCode text='tertiary' />, <PreCode text='outline' />,{' '}
        <PreCode text='shadow' />, <PreCode text='text' />,{' '}
        <PreCode text='link' />
      </>
    ),
    default: <PreCode text='primary' />,
  },
  {
    prop: 'color',
    desc: 'Custom color of the button',
    val: (
      <>
        available colors option based on tailwind{' '}
        <PreCode text='theme.colors' />
      </>
    ),
    default: '-',
  },
  {
    prop: 'size',
    desc: 'The size of the button',
    val: (
      <>
        <PreCode text='xs' />, <PreCode text='sm' />, <PreCode text='md' />,{' '}
        <PreCode text='lg' />
      </>
    ),
    default: <PreCode text='md' />,
  },
  {
    prop: 'shape',
    desc: 'The border radius of the button',
    val: (
      <>
        <PreCode text='square' />, <PreCode text='rounded' />,{' '}
        <PreCode text='circle' />
      </>
    ),
    default: <PreCode text='rounded' />,
  },
  {
    prop: 'disabled',
    desc: 'Prevents user interact with the button',
    val: <PreCode text='boolean' />,
    default: <PreCode text='false' />,
  },
  {
    prop: 'loading',
    desc: 'Prevents user interact with the button and show loading indicator',
    val: (
      <>
        <PreCode text='boolean' /> or <PreCode text='string' />
      </>
    ),
    default: <PreCode text='false' />,
  },
  {
    prop: 'block',
    desc: 'Make the button full width',
    val: <PreCode text='boolean' />,
    default: <PreCode text='false' />,
  },
  {
    prop: 'width',
    desc: 'Make the button fixed width',
    val: <PreCode text='string' />,
    default: <PreCode text='-' />,
  },
]
