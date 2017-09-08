// Used for unit tests
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const config = require('./shared-config');

const webpackConfig = merge(baseWebpackConfig, {
  // Use inline sourcemap for karma-sourcemap-loader
  devtool: '#inline-source-map',

  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.test.env,
    }),
  ],
});

// No need for app entry during tests
delete webpackConfig.entry;

module.exports = webpackConfig;
