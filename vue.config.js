module.exports = {
  assetsDir: 'assets/',
  publicPath: '/', // Base directory for dev
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/assets/scss/_variables.scss";
          @import "~@/assets/scss/_typography.scss";
        `
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('fonts')
      .test(/\.(ttf|otf|eot|woff|woff2)$/)
      .use('file-loader')
      .loader('file-loader')
      .tap(options => {
        options = {
          // limit: 10000,
          name: '~@/assets/fonts/[name].[ext]'
        }
        return options
      })
      .end()
  }
}
