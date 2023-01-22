import { PreCode } from 'components/PreCode'

type ButtonApiDataType = {
  prop: string
  desc: string
  val: string | JSX.Element
  default: string | JSX.Element
}

type ButtonApiColumnsType = {
  key: keyof ButtonApiDataType
  label: string
}

export const ButtonApiColumns: ButtonApiColumnsType[] = [
  { key: 'prop', label: 'PROPERTY' },
  { key: 'desc', label: 'DESCRIPTION' },
  { key: 'val', label: 'POSSIBLE VALUES' },
  { key: 'default', label: 'DEFAULT' },
]

export const ButtonApiData: ButtonApiDataType[] = [
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
    prop: 'iconR',
    desc: 'Render icon on the right of the button',
    val: (
      <>
        <PreCode text='string' />, <PreCode text='ReactNode' />
      </>
    ),
    default: '-',
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
        <PreCode text='tertiary' />, <PreCode text='text' />,{' '}
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
    val: <PreCode text='boolean' />,
    default: <PreCode text='false' />,
  },
  {
    prop: 'block',
    desc: 'Make the button full width',
    val: <PreCode text='boolean' />,
    default: <PreCode text='false' />,
  },
]
