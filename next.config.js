const withOffline = require('next-offline')
const withOptimizedImages = require('next-optimized-images')

const CACHE_TIME = 24 * 60 * 60
const NETWORK_TIME = 3

const redirects = [
  {
    source: '/storybook',
    destination: '/storybook/index.html',
  },
  {
    source: '/coverage',
    destination: '/coverage/index.html',
  },
  {
    source: '/tests',
    destination: '/tests/index.html',
  },
  {
    source: '/cypress',
    destination: '/cypress/index.html',
  },
]

module.exports = withOffline(
  withOptimizedImages({
    redirects,
    esModule: true,
    projectRoot: __dirname,
    images: {
      includeStrategy: 'react',
      handleImages: ['jpg', 'jpeg', 'png', 'svg', 'webp', 'gif', 'ico'],
    },
    transformManifest: (manifest) => ['/'].concat(manifest),
    target: 'serverless',
    generateInDevMode: false,
    workboxOpts: {
      swDest: 'static/service-worker.js',
      skipWaiting: true,
      clientsClaim: true,
      cleanupOutdatedCaches: true,
      runtimeCaching: [
        {
          urlPattern: /^https?.*/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'offlineCache',
            cacheableResponse: {
              statuses: [200],
            },
            networkTimeoutSeconds: NETWORK_TIME,
            expiration: {
              maxEntries: 200,
              maxAgeSeconds: CACHE_TIME,
            },
          },
        },
      ],
    },
  })
)
