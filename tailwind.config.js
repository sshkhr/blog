// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        display: ['var(--font-space-grotesk)', ...fontFamily.sans],
      },
      colors: {
        primary: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#f9c6e3',
          300: '#f49fcf',
          400: '#e06aaf',
          500: '#c71585',
          600: '#ad1274',
          700: '#8f0f5f',
          800: '#750e4e',
          900: '#621143',
          950: '#3b0524',
        },
        gray: colors.gray,
        sepia: {
          50: '#faf8f5',
          100: '#f5f0eb',
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            fontSize: '1rem',
            lineHeight: '1.75',
            maxWidth: '680px',
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.600')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              fontFamily: theme('fontFamily.display').join(', '),
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h1: {
              fontSize: '1.75rem',
              marginTop: '2em',
              marginBottom: '0.75em',
            },
            h2: {
              fontSize: '1.375rem',
              marginTop: '2em',
              marginBottom: '0.75em',
            },
            h3: {
              fontWeight: '600',
              fontSize: '1.125rem',
              marginTop: '1.75em',
              marginBottom: '0.5em',
            },
            h4: {
              fontSize: '1rem',
              marginTop: '1.5em',
              marginBottom: '0.5em',
            },
            p: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            pre: {
              marginTop: '1.75em',
              marginBottom: '1.75em',
              backgroundColor: theme('colors.gray.100'),
              color: theme('colors.gray.800'),
            },
            img: {
              marginTop: '2em',
              marginBottom: '2em',
            },
            table: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            code: {
              color: theme('colors.indigo.500'),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
            pre: {
              backgroundColor: '#011627',
              color: '#d6deeb',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
