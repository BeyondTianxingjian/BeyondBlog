const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  lintOnSave: true,
  chainWebpack: function (config) {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('@c', resolve('src/components'))
      .set('@m', resolve('src/mixins'))
      .set('@s', resolve('src/styles'))
      .set('three', resolve('src/three'))
    config.resolve.extensions.add('.js').add('.vue').add('.json').add('.ts').add('.tsx')
  },
  productionSourceMap: false,
  devServer: {
    port: 7899
  }
}
