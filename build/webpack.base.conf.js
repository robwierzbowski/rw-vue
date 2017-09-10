const utils = require('./utils');
const vueLoaderConfig = require('./vue-loader.conf');
const eslintFriendlyFormatter = require('eslint-friendly-formatter');

module.exports = {
  entry: {
    app: './src/main.js',
  },

  output: {
    path: utils.absProjectPath('dist'),
    filename: '[name].js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': utils.absProjectPath('src'),
    },
    symlinks: false,
  },

  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [
          utils.absProjectPath('src'),
          utils.absProjectPath('test'),
        ],
        options: {
          formatter: eslintFriendlyFormatter,
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          utils.absProjectPath('src'),
          utils.absProjectPath('test'),
        ],
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash:7].[ext]',
          outputPath: 'assets/img/',
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'raw-loader',
          },
          {
            loader: 'svgo-loader',
            options: {
              // TODO: Add and configure plugins
              // Maybe remove style?
              plugins: [
                { removeUnknownsAndDefaults: true },
                { sortAttrs: true },
              ],
            },
          },
        ],
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash:7].[ext]',
          outputPath: 'assets/media/',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash:7].[ext]',
          outputPath: 'assets/fonts/',
        },
      },
    ],
  },
};
