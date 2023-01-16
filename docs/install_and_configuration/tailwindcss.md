# Tailwindcss

```text
`Tailwindcss` is a utility that helps you create stylesheets with a clean, modern, and accessible look.
```

## Documentation => [Click](https://tailwindcss.com/docs/installation)

---

## Install and Configuration

### Install Tailwindcss

```sh
yarn add -D tailwindcss autoprefixer postcss postcss-cli postcss-import
```

### Initial configuration

```sh
npx tailwindcss init --full -p
```

#### Right now you will got a [`tailwind.config.js`](../tailwind.config.js) file and [`postcss.config.js`](../postcss.config.js) file in your project

### Configuration([`tailwind.config.js`](../tailwind.config.js))

```diff
...
  content: [
+    './src/**/*.{ts,tsx}'
  ],
...
```

### Configuration([`postcss.config.js`](../postcss.config.js))

```diff
module.exports = {
  plugins: {
+    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

## Set up the postcss script in your [`package.json`](../package.json) file

```diff
{
  ...
  "scripts": {
    ...
+    "build:css": "postcss src/styles/styles.scss -o postcss.css"
  }
  ...
}
```

---

## Set up the stylesheet from tailwind in the [`styles.scss`](../src/styles/styles.scss) file

```scss
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
...
```

---

## Set up the IntelliSense when use with styled-components in the [`.vscode`](../.vscode/settings.json) file

```json
...
"tailwindCSS.includeLanguages": {
    "typescript": "javascript", // if you are using typescript
    "typescriptreact": "javascript" // if you are using typescript with react
  },
  "editor.quickSuggestions": {
    "strings": true // forces VS Code to trigger completions when editing "string" content
  },
  "tailwindCSS.experimental.classRegex": [
    "tw`([^`]*)", // tw`...`
    "tw\\.[^`]+`([^`]*)`", // tw.xxx<xxx>`...`
    "tw\\(.*?\\).*?`([^`]*)" // tw(Component)<xxx>`...`
  ]
```
