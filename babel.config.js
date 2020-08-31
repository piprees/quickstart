module.exports = {
  presets: ['@expo/next-adapter/babel'],
  plugins: [
    [
      'i18next-extract',
      {
        locales: ['en', 'cy'],
        outputPath: 'locales/{{locale}}/{{ns}}.json',
        defaultNS: 'common',
        discardOldKeys: true,
      },
    ],
  ],
}
