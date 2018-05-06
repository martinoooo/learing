const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true // 设置HMR，使页面不刷新的情况下重载
  },
  plugins: [
    new webpack.NamedModulesPlugin(), // 设置HMR，使页面不刷新的情况下重载
    new webpack.HotModuleReplacementPlugin() // 设置HMR，使页面不刷新的情况下重载
  ],
  mode:"development"
});
