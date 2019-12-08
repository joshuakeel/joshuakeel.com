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
          'Inter',
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
        '2.5xl': '2.5rem'
      },
      maxWidth: {
        '2xl': '42.5rem'
      },
      letterSpacing: {
        'medium-tight': '-0.004em'
      }
    }
  },
  variants: {},
  plugins: []
}