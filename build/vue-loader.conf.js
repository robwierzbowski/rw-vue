const utils = require('./utils');
const config = require('../config');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  loaders: utils.vueCssLoaders({
    sourceMap: isProduction
      ? config.build.cssSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction,
  }),
  // Handles JS requires for assets in .vue templates
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href',
  },
};
