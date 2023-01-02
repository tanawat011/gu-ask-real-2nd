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
        // Primary color
        'space-blue': '#181c23',
        'toy-red': '#e73439',
        // Secondary color
        'lapis-blue': '#1762c1',
        'soft-lapis-blue': '#e5f0fc',
        // Neutral color
        'onyx-gray': '#3b4050',
        'iron-gray': '#626672',
        'iron-hover-gray': '#636976',
        'iron-active-gray': '#1c232c',
        'surface-gray': '#83899b',
        'shark-gray': '#a3a8af',
        'smoke-gray': '#b5b9c3',
        'dolphin-gray': '#c3c9d1',
        'jade-gray': '#d7dbe0',
        'glory-gray': '#e5e8ec',
        'wolf-gray': '#e5e8ec',
        'bright-gray': '#f8f9fa',
        'bright2-gray': '#f6f7fb',
        'dove-gray': '#707070',
        'american-silver-gray': '#cfcfcf',
        'weathered-stone-grey': '#c4c4c4',
        'aged-moustache-grey': '#7E7E7E',
        'light-grey': '#E4E5EA',
        'night-rider-grey': '#333333',
        'zambezi-grey': '#5E5E5E',
      },
      borderRadius: {
        '4xl': '50px',
      },
      boxShadow: {
        ...defaultTheme.boxShadow,
        round: '0 0 4px 4px rgb(0 0 0 / 8%)',
        t: '0 -4px 4px 0 rgb(0 0 0 / 8%)',
        tr: '4px -4px 4px 0 rgb(0 0 0 / 8%)',
        b: '0 4px 4px 0 rgb(0 0 0 / 8%)',
        l: '-4px 0 4px 0 rgb(0 0 0 / 8%)',
        r: '4px 0 4px 0 rgb(0 0 0 / 8%)',
        around: '4px 4px 4px 4px rgb(0 0 0 / 8%)',
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out-in',
        fadeOut: 'fadeOut 1s ease-in-out',
      },
      keyframes: (theme) => ({
        fadeIn: {
          '100%': { backgroundColor: theme('colors.transparent') },
          '0%': { backgroundColor: theme('colors.red.300') },
        },
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
    },
  },
  variantOrder: [
    'first',
    'last',
    'odd',
    'even',
    'visited',
    'checked',
    'empty',
    'read-only',
    'group-hover',
    'group-focus',
    'focus-within',
    'hover',
    'focus',
    'focus-visible',
    'active',
    'disabled',
  ],
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.flex-center': {
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
        },
        '.absolute-center': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
        '.rotate-180deg': {
          transform: 'rotate(180deg)',
        },
        '.rotate-90deg': {
          transform: 'rotate(90deg)',
        },
        '.rotate-270deg': {
          transform: 'rotate(270deg)',
        },
        '.transform-scale-1': {
          transform: 'scale(2)',
        },
        '.font-thaisans-nue': {
          'font-family': 'ThaiSans Neue',
        },
        '.font-sarabun': {
          'font-family': 'Sarabun',
        },
        '.font-lato': {
          'font-family': 'Lato',
        },
      })
    }),
  ],
}
