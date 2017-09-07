// This is the webpack config used for unit tests.

const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const config = require('./shared-config');

const webpackConfig = merge(baseWebpackConfig, {
  // use inline sourcemap for karma-sourcemap-loader
  devtool: '#inline-source-map',

  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.test.env,
    }),
  ],
});

// no need for app entry during tests
delete webpackConfig.entry;

module.exports = webpackConfig;
