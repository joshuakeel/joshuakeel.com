const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'serif-title': [
          'Merriweather',
          ...defaultTheme.fontFamily.serif
        ],
        serif: [
          ...defaultTheme.fontFamily.serif,
        ],
        sans: [
          ...defaultTheme.fontFamily.sans
        ]
      },
      colors: {
        'vivid-blue-600': '#03449E'
      },
      lineHeight: {
        easy: '1.58'
      },
      fontSize: {
        'sm': '0.8rem',
        '2xl-bigger': '2.5rem',
        'huge': '8rem'
      },
      maxWidth: {
        '2xl': '42.5rem'
      },
      width: {
        '80': '20rem'
      },
      letterSpacing: {
        'medium-tight': '-0.004em'
      }
    }
  },
  variants: {},
  plugins: []
}