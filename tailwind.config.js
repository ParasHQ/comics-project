const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#00BBDB',
        comic: {
          gray: {
            primary: '#9B9B9B',
            secondary: '#F4F4F5',
            tertiary: '#919191',
          },
        },
        background: '#FFFFFF',
        blueGray: colors.blueGray,
        electricLime: {
          DEFAULT: '#C6FF00',
          50: '#F9FFE5',
          100: '#F4FFCC',
          200: '#E8FF99',
          300: '#DDFF66',
          400: '#D1FF33',
          500: '#C6FF00',
          600: '#9ECC00',
          700: '#779900',
          800: '#4F6600',
          900: '#283300',
        },
      },
    },
    fontFamily: {
      title: ['Montserrat'],
      body: ['Montserrat'],
    },
  },
  variants: {
    margin: ['responsive', 'hover'],
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
