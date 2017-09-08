const path = require('path');

exports.absProjectPath = function (_path) {
  return path.join(__dirname, '..', _path);
};
