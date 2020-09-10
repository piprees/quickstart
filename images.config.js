module.exports = {
  default: {
    loading: 'lazy',
    webp: true,
    densities: [1, 2],
  },
  svg: {
    webp: false,
  },
  types: {
    sm: {
      sizes: [240, 480],
      breakpoints: [640],
    },
    md: {
      sizes: [640, 960],
      breakpoints: [768],
    },
    lg: {
      sizes: [960, 1280],
      breakpoints: [1024],
    },
    xl: {
      sizes: [960, 1280, 1920],
      breakpoints: [1024, 1280],
    },
  },
}
