// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path');

const prodEnv = { NODE_ENV: '"production"' };
const devEnv = { NODE_ENV: '"development"' };
const testEnv = { NODE_ENV: '"testing"' };

module.exports = {
  build: {
    env: prodEnv,
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    // TODO: Remove the "production" prefix on these properies; build parallel
    // structure in dev and testing configuration where needed.
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report,
  },
  dev: {
    env: devEnv,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
  },
  test: {
    env: testEnv,
  },
};
