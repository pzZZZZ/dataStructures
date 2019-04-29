const webpackMerge = require ('webpack-merge');
const webpack = require ('webpack');
const base = require ('./webpack.config.base.js');
const path = require ('path');
module.exports = webpackMerge (base, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve (__dirname, '../'),
    // host: '172.16.71.118',
    host: 'localhost',
    compress: true,
    port: 8849,
    open: true,
    inline: true,
    hot: true,
    proxy: {},
  },
  plugins: [new webpack.HotModuleReplacementPlugin ()],
});
