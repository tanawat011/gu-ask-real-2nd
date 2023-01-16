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
        'anti-flash-white': '#F3F4F6',
        'cadet-grey': '#9CA3AF',
        'charcoal': '#374151',
        'deep-koamaru': '#2d355c',
        'eerie-black': '#111827',
        'gunmetal': '#293341',
        'independence': '#4B5563',
        'majorelle-blue': '#4F46E5',
        'nickel': '#6a717a',
        'very-light-blue': '#6366F1',
        'yankees-blue': '#1F2937',
        // * Theme
        'primary': '#4F46E5',
        'secondary': '#374151',
        'tertiary': '#2d355c',
        'success': '#15803d',
        'danger': '#b91c1c',
        'warning': '#a16207',
        'info': '#1d4ed8',
        'light': '#e5e7eb',
        'dark': '#1f2937',
        'disabled': '#293341',
      },
      width: {
        'sidebar': '290px',
        'mini-sidebar': '80px',
      },
      height: {
        'sidebar-header': '64px',
        'sidebar-footer': '64px',
      },
    },
  },
  plugins: [
    plugin(({ addComponents, theme, }) => {
      addComponents({
        '.example': {
          background: theme('colors.majorelle-blue'),
          '&:hover': {
            background: theme('colors.very-light-blue'),
          },
        },
      })
    }),
  ],
}
