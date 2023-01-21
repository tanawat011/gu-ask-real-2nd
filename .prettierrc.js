module.exports = {
  'semi': false,
  'trailingComma': 'all',
  'singleQuote': true,
  'printWidth': 80,
  'bracketSpacing': true,
  'arrowParens': 'always',
  'tabWidth': 2,
  'jsxSingleQuote': true,
  'bracketSameLine': false,
  'parser': 'typescript',
  'endOfLine': 'auto',
  'tailwindConfig': './tailwind.config.js',
  'plugins': [
    require('prettier-plugin-tailwindcss'),
    require('prettier-plugin-twin.macro'),
  ],
}
