// start the dev server using production config
process.env.NODE_ENV = 'testing';

const spawn = require('cross-spawn');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../../build/webpack.prod.conf');

const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(compiler, {
  stats: {
    colors: true,
  },
});

server.listen(8080, '127.0.0.1', () => {
  console.log('Starting server on http://localhost:8080');

  // to run in additional browsers: add an entry in
  // test/e2e/nightwatch.conf.json under "test_settings" or  add it to the --env
  // flag below.
  // For more information on Nightwatch's config file, see
  // http://nightwatchjs.org/guide#settings-file

  // TODO: Replace process.argv.slice with a cli parser
  let opts = process.argv.slice(2);
  if (opts.indexOf('--config') === -1) {
    opts = opts.concat(['--config', 'test/e2e/nightwatch.conf.js']);
  }
  if (opts.indexOf('--env') === -1) {
    opts = opts.concat(['--env', 'chrome']);
  }

  const runner = spawn('./node_modules/.bin/nightwatch', opts, { stdio: 'inherit' });

  runner.on('exit', (code) => {
    server.close();
    process.exit(code);
  });

  runner.on('error', (err) => {
    server.close();
    throw err;
  });
});
