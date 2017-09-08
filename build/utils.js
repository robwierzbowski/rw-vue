const path = require('path');
const config = require('./shared-config');

exports.assetsPath = function (_path) {
  return path.join(config.outputAssetsDirectory, _path);
};
