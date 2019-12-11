const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    '_site/**/*.html'
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
  plugins: [
    require('tailwindcss'),
    ...process.env.NODE_ENV === 'production' ? [purgecss] : []
  ]
}