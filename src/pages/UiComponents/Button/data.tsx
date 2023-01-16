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
    val: <code>string</code>,
    default: <code>-</code>,
  },
  {
    prop: 'icon',
    desc: 'Render icon',
    val: (
      <>
        <code>string</code>, <code>ReactNode</code>
      </>
    ),
    default: <code>-</code>,
  },
  {
    prop: 'iconR',
    desc: 'Render icon on the right of the button',
    val: (
      <>
        <code>string</code>, <code>ReactNode</code>
      </>
    ),
    default: <code>-</code>,
  },
  {
    prop: 'onClick',
    desc: 'Handler event when button clicked',
    val: (
      <>
        <code>{'(event) => void'}</code>
      </>
    ),
    default: <code>-</code>,
  },
  {
    prop: 'variant',
    desc: 'The variant of the button',
    val: (
      <>
        <code>primary</code>, <code>secondary</code>, <code>tertiary</code>, <code>success</code>,{' '}
        <code>danger</code>, <code>warning</code>, <code>info</code>, <code>light</code>,{' '}
        <code>dark</code>, <code>link</code>
      </>
    ),
    default: <code>primary</code>,
  },
  {
    prop: 'size',
    desc: 'The size of the button',
    val: (
      <>
        <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>
      </>
    ),
    default: <code>md</code>,
  },
  {
    prop: 'outline',
    desc: 'The outline style of the button',
    val: <code>boolean</code>,
    default: <code>false</code>,
  },
  {
    prop: 'shape',
    desc: 'The border radius of the button',
    val: (
      <>
        <code>square</code>, <code>rounded</code>, <code>circle</code>
      </>
    ),
    default: <code>rounded</code>,
  },
  {
    prop: 'disabled',
    desc: 'Prevents user interact with the button',
    val: <code>boolean</code>,
    default: <code>false</code>,
  },
  {
    prop: 'loading',
    desc: 'Prevents user interact with the button and show loading indicator',
    val: <code>boolean</code>,
    default: <code>false</code>,
  },
  {
    prop: 'block',
    desc: 'Make the button full width',
    val: <code>boolean</code>,
    default: <code>false</code>,
  },
]
