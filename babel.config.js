const presets = ['next/babel']

const plugins = [
  'react-optimized-image/plugin',
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
