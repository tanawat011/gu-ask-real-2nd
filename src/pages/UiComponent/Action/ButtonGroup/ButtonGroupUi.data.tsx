import type { ButtonGroupProps } from 'components/ButtonGroup'
import type { ComponentApiGuideData } from 'types'

import { PreCode } from 'components/PreCode'

export const containerId = 'button-group-ui'

export const menuItems = {
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

export const componentApiTableData: ComponentApiGuideData<ButtonGroupProps>[] =
  [
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
    {
      prop: 'vertical',
      desc: 'Make the button group vertical',
      val: <PreCode text='boolean' />,
      default: <PreCode text='false' />,
    },
  ]
