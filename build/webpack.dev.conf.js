const utils = require('./utils');
const webpack = require('webpack');
const config = require('./shared-config');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
  // Cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',

  devServer: {
    contentBase: [
      utils.absProjectPath('dist'),
      // Note: static folder is served at root in dev but moved to assets/static
      // during build
      utils.absProjectPath('static'),
    ],
    port: 8080,
    historyApiFallback: true,
    open: true,
    overlay: true,
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env,
    }),

    new webpack.NoEmitOnErrorsPlugin(),

    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true,
    }),

    new FriendlyErrorsPlugin(),

    new HardSourceWebpackPlugin(),
  ],
});
