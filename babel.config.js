// eslint-disable-next-line no-console
console.log(`Using babel config: ${process.env.NODE_ENV || 'default'}`)

const presets = ['@expo/next-adapter/babel']

const plugins = [
  [
    'i18next-extract',
    {
      locales: ['en', 'cy'],
      outputPath: 'locales/{{locale}}/{{ns}}.json',
      defaultNS: 'common',
      discardOldKeys: true,
    },
  ],
  'babel-plugin-jsx-remove-data-test-id',
]

module.exports = {
  presets: presets,
  plugins: [],
  env: {
    development: {
      plugins: plugins,
    },
    production: {
      plugins: plugins,
    },
    test: {
      plugins: [],
    },
  },
}
