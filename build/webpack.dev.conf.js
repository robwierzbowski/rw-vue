const path = require('path');
const webpack = require('webpack');
const config = require('./shared-config');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',

  devServer: {
    contentBase: [
      config.build.assetsRoot,
      // Serves content in static as root
      path.posix.join(__dirname, '..', config.assetsDirectory),
    ],
    port: 8080,
    hot: true,
    historyApiFallback: true,
    open: true,
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env,
    }),

    new webpack.HotModuleReplacementPlugin(),

    new webpack.NoEmitOnErrorsPlugin(),

    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
    }),

    new FriendlyErrorsPlugin(),
  ],
});
