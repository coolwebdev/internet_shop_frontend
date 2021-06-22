const path = require('path')

module.exports = {
  resolve: {
    alias: {
      actions: path.resolve('src/common/actions/'),
      api: path.resolve('src/common/api/'),
      components: path.resolve('src/common/components/'),
      common: path.resolve('src/common/'),
      containers: path.resolve('src/common/containers'),
      reducers: path.resolve('src/common/reducers/'),
      assets: path.resolve('src/assets/'),
    },
  },
}
