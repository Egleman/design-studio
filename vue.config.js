const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
    publicPath: '/',
  chainWebpack: config => {
    config.module.rule('pdf')
        .test(/\.(pdf)(\?.*)?$/)
        .use('file-loader')
        .loader('file-loader')
        .options({
          name: '[name].[ext]'
        })
  }
});
