# Storybook

```text
`Storybook` is a visual testing tool that helps you test your React components.
```

## Documentation => [Click](https://storybook.js.org/docs/react/get-started/introduction)

---

## Install and Configuration

### Install Storybook

```sh
npx storybook init
```

#### After install you will got a `.storybook` folder on your root and a script for run and build storybook in the [`package.json`](../package.json)

#### Structure of `.storybook` folder

```text
├── .storybook
│   ├── main.js
│   └── preview.js
└── ...
```

#### Script in the [`package.json`](../package.json)

```diff
  ...
  "scripts": {
    ...
+    "storybook": "start-storybook -p 6006 -s public",
+    "storybook:build": "build-storybook -s public"
  }
  ...
```

### Configuration together with Tailwindcss

#### Open [preview.js](../.storybook/preview.js) and just import tailwindcss on the top of file

```js
import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css'
import 'tailwindcss/tailwind.css'
```

---

## How to use Storybook

### For example you just create a file with a surname `example.stories.tsx`

```tsx
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ExampleComponent } from './Example'

export default {
  title: 'Example/Test',
  component: ExampleComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ExampleComponent>

const Template: ComponentStory<typeof ExampleComponent> = (args) => <ExampleComponent {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  label: 'Test1',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Test2',
}
```
