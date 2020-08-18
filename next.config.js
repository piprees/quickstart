const { withExpo } = require('@expo/next-adapter')
const withOffline = require('next-offline')
const withImages = require('next-images')

module.exports = withOffline({
  workboxOpts: {
    swDest: 'workbox-service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200,
          },
        },
      },
    ],
  },
  ...withExpo(
    withImages({
      esModule: true,
      projectRoot: __dirname,
    })
  ),
})
