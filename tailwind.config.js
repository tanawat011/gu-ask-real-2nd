/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{ts,tsx}'],
  presets: [],
  darkMode: 'media', // or 'class'
  important: true,
  theme: {
    ...defaultTheme,
    extend: {
      screens: {
        mobile: { max: '767px' }, // * => @media (max-width: 767px) { ... }
        tablet: { min: '768px', max: '1023px' }, // * => @media (min-width: 768px && max-width: 1023px) { ... }
        laptop: '1024px', // * => @media (min-width: 1024px) { ... }
        desktop: '1280px', // * => @media (min-width: 1280px) { ... }
        'desktop-xl': '1600px', // * => @media (min-width: 1600px) { ... }
      },
      colors: {
        'space-blue': '#181c23',
        'toy-red': '#e73439',
        'lapis-blue': '#1762c1',
        'soft-lapis-blue': '#e5f0fc',
        'onyx-gray': '#3b4050',
        'iron-gray': '#626672',
        'dove-gray': '#707070',
        'surface-gray': '#83899b',
        'shark-gray': '#a3a8af',
        'smoke-gray': '#b5b9c3',
        'dolphin-gray': '#c3c9d1',
        'jade-gray': '#d7dbe0',
        'light-grey': '#E4E5EA',
        'glory-gray': '#e5e8ec',
        'wolf-gray': '#e5e8ec',
        'bright-gray': '#f8f9fa',
        'bright2-gray': '#f6f7fb',
      },
      width: {
        'sidebar': '290px',
      },
      height: {
        'sidebar-header': '64px',
        'sidebar-footer': '64px',
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.example': {
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
        },
      })
    }),
  ],
}
