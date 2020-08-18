module.exports = {
  plugins: [
    'stylelint-a11y',
    'stylelint-css-modules',
    'stylelint-no-unsupported-browser-features',
  ],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-rational-order',
    'stylelint-a11y/recommended',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'css-modules/composed-class-names': true,
    'css-modules/css-variables': true,
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning',
      },
    ],
    'value-keyword-case': null,
    'no-descending-specificity': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'extends',
          'apply',
          'tailwind',
          'components',
          'utilities',
          'screen',
        ],
      },
    ],
  },
}
