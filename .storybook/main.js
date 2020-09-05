
module.exports = {
  "logLevel": "error",
  "stories": [
    "../sections/**/readme.stories.@(js|jsx|ts|tsx|mdx)",
    "../sections/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../components/**/readme.stories.@(js|jsx|ts|tsx|mdx)",
    "../components/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../interface/**/readme.stories.@(js|jsx|ts|tsx|mdx)",
    "../interface/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../util/**/readme.stories.@(js|jsx|ts|tsx|mdx)",
    "../util/**/*.stories.@(js|jsx|ts|tsx|mdx)",
  ],
  "addons": [
    "storybook-css-modules-preset",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-jest",
    "storybook-addon-designs",
    '@storybook/addon-a11y',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
      use: [
        {
          loader: 'optimized-images-loader',
          options: {
            includeStrategy: 'react'
          },
        },
      ],
    });
    return config;
  },
}