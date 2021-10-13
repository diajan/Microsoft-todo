const path = require('path')

module.exports = {
  webpack: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
      components: path.resolve(__dirname, 'src/components'),
      actions: path.resolve(__dirname, 'src/redux/actions'),
      reducers: path.resolve(__dirname, 'src/redux/reducers'),
      store: path.resolve(__dirname, 'src/redux/store'),
    },
  },
}