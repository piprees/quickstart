const withOffline = require('next-offline')
const withOptimizedImages = require('next-optimized-images')

module.exports = withOffline({
  async redirects() {
    return [
      {
        source: '/((?![a-z]{2}\\/{0,1})):slug',
        destination: '/en/:slug',
        permanent: true,
      },
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ]
  },
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
      handleImages: ['jpg', 'jpeg', 'png', 'svg', 'webp', 'gif', 'ico'],
    },
  }),
})
