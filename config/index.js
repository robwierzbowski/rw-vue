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
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report,
  },
  dev: {
    env: devEnv,
  },
  test: {
    env: testEnv,
  },
};
