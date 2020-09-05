const withOffline = require('next-offline')
const withOptimizedImages = require('next-optimized-images')

module.exports = withOffline({
  workboxOpts: {
    swDest: 'public/workbox-service-worker.js',
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
  ...withOptimizedImages({
    esModule: true,
    projectRoot: __dirname,
    images: {
      includeStrategy: 'react',
      handleImages: ['jpg', 'jpeg', 'png', 'svg', 'webp', 'gif', 'ico'],
    },
  }),
})
