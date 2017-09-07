// Server for development and (e2e and unit?) testing.

const config = require('../config');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const path = require('path');
const express = require('express');
const webpack = require('webpack');

// If running e2e tests, use prod conf
const webpackConfig = process.env.NODE_ENV === 'development'
  ? require('./webpack.dev.conf')
  : require('./webpack.prod.conf');

// default port where dev server listens for incoming traffic
const port = 8080;
const app = express();
const compiler = webpack(webpackConfig);

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true,
});

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000,
});

// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', (compilation) => {
  compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
    hotMiddleware.publish({ action: 'reload' });
    cb();
  });
});

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

// serve webpack bundle output
app.use(devMiddleware);

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware);

// serve pure static assets
const staticPath = path.posix.join(config.assetsPublicPath, config.assetsDirectory);
app.use(staticPath, express.static('./static'));

let readyResolve;
const readyPromise = new Promise((resolve) => {
  readyResolve = resolve;
});

console.log('> Starting dev server...');

devMiddleware.waitUntilValid(() => {
  console.log(`> Listening at http://localhost:${port}\n`);
  readyResolve();
});

const server = app.listen(port);

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close();
  },
};
