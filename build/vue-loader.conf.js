const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const devLoaders = [
  {
    css: {
      loader: 'css-loader',
      options: {
        sourceMap: true,
      },
    },
  },
  {
    postcss: {
      loader: 'css-loader',
      options: {
        sourceMap: true,
      },
    },
  },
];
const prodLoaders = {
  css: ExtractTextPlugin.extract({
    use: 'css-loader',
    fallback: 'vue-style-loader',
  }),
};

module.exports = {
  loaders: isProduction ? prodLoaders : devLoaders,

  // Handles JS requires for assets in .vue templates
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href',
  },
};
