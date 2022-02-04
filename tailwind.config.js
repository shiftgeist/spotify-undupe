const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './{assets,components,composable,layouts,pages,plugins}/**/*.{js,vue,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: { extend: {} },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),

    // purecss
    // https://github.com/pure-css/pure/tree/master/src
    plugin(
      ({
        addUtilities, // static utility styles
        matchUtilities, // dynamic utility styles
        addComponents, // static component styles
        matchComponents, // dynamic component styles
        addBase, // base styles
        addVariant, // custom variants
        theme, // looking up values in the user’s theme configuration
        config, // looking up values in the user’s Tailwind configuration
        corePlugins, // checking if a core plugin is enabled
        e, // manually escaping strings meant to be used in class names
      }) => {
        addComponents({
          '.pure-g': {
            backgroundColor: theme('colors.white'),
            borderRadius: theme('borderRadius.lg'),
            padding: theme('spacing.6'),
            boxShadow: theme('boxShadow.xl'),
          },
        })
      }
    ),
  ],
}
