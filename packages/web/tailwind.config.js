/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fontFamily: {
      'sans': 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      'serif': 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      'mono': 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
    container: {
      // center: true,
      padding: {
        DEFAULT: '2rem',
        md: '6rem',
      }
    },
    extend: {
      inset: {
        '5': '5rem'
      },
      colors: {
        'pwc': {
          'tan': '#c7a48d',
          'logo': '#ff3df2',
          'yellow': '#ffb30d',
          'burleywood': '#ffa680',
          'orange': '#ff8014',
        }
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['group-hover'],
      margin: ['hover'],

    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ]
}
