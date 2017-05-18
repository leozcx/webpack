var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
{{#fontawesome}}
var ExtractTextPlugin = require('extract-text-webpack-plugin')
{{/fontawesome}}
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
{{#flow}}
var FlowStatusWebpackPlugin = require('flow-status-webpack-plugin')
{{/flow}}

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    {{#flow}}
    new FlowStatusWebpackPlugin({
      failOnError: true
    }),
    {{/flow}}
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new FriendlyErrorsPlugin(){{#fontawesome}},
    new ExtractTextPlugin({
      filename: '[name]-[chunkhash].css', allChunks: true,
    }){{/fontawesome}}
  ]
})
