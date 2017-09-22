const path = require('path');
const utils = require('./utils');
const webpack = require('webpack');
const config = require('./shared-config');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const webpackConfig = merge(baseWebpackConfig, {
  output: {
    path: utils.absProjectPath('dist'),
    filename: 'assets/js/[name].[chunkhash].js',
    chunkFilename: 'assets/js/[id].[chunkhash].js',
  },

  devtool: false,

  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': config.build.env,
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      sourceMap: false,
    }),

    // Extract css into its own file
    new ExtractTextPlugin({
      filename: 'assets/css/[name].[contenthash].css',
    }),

    // Compress extracted CSS
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true,
      },
    }),

    new HtmlWebpackPlugin({
      filename: process.env.NODE_ENV === 'testing'
        ? 'index.html'
        : utils.absProjectPath('dist/index.html'),
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
      // Necessary to consistently work with multiple chunks via
      // CommonsChunkPlugin
      chunksSortMode: 'dependency',
    }),

    // Keep module.id stable when vender modules does not change
    new webpack.HashedModuleIdsPlugin(),

    // Split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        // Any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            utils.absProjectPath('node_modules'),
          ) === 0
        );
      },
    }),

    // Extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor'],
    }),

    // Copy non-webpack files
    new CopyWebpackPlugin([
      {
        from: utils.absProjectPath('static'),
        to: '',
        ignore: ['.gitkeep'],
      },
    ]),
  ],
});

// Run `npm run build --report` to view the bundle analyzer report
if (process.env.npm_config_report) {
  webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = webpackConfig;
