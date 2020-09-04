const presets = ['next/babel']

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
  'react-optimized-image/plugin',
]

module.exports = {
  presets: presets,
  plugins: plugins,
}
