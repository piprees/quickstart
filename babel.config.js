const presets = ['@expo/next-adapter/babel']

const plugins = [
  [
    'i18next-extract',
    {
      locales: ['en', 'cy'],
      outputPath: 'locales/{{locale}}/{{ns}}.json',
      defaultNS: 'common',
      discardOldKeys: false,
    },
  ],
]

module.exports = {
  presets: presets,
  plugins: plugins,
}
