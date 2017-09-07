// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path');

const prodEnv = { NODE_ENV: '"production"' };
const devEnv = { NODE_ENV: '"development"' };
const testEnv = { NODE_ENV: '"testing"' };

module.exports = {
  assetsPublicPath: '/',
  assetsDirectory: 'static',

  build: {
    env: prodEnv,
    assetsRoot: path.resolve(__dirname, '../dist'),
  },
  dev: {
    env: devEnv,
  },
  test: {
    env: testEnv,
  },
};
