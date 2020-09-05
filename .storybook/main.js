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
    // Override the images handler of file-loader to stop it
    // stealing file types away from optimized-images-loader
    config.module.rules[7].test = /\.(eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/;

    // Add optimized-images-loader to handle those file
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg|webp|ico)$/i,
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