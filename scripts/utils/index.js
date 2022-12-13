const { path, abResolve } = require('./path')
const { getStyleLoaders, handleOtherStaticResource,threads } = require('./utils')
const babelConfig = require('./babel.config')
module.exports = {
  path,
  abResolve,
  getStyleLoaders,
  handleOtherStaticResource,
  threads,
  babelConfig,
}