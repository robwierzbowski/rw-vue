const path = require('path');
const config = require('./shared-config');

exports.assetsPath = function (_path) {
  return path.posix.join(config.assetsDirectory, _path);
};
