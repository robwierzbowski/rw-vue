const path = require('path');
const config = require('../config');

exports.assetsPath = function (_path) {
  return path.posix.join(config.assetsDirectory, _path);
};
