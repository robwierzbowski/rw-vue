process.env.NODE_ENV = 'production';

const ora = require('ora');
const rm = require('rimraf');
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const config = require('./shared-config');
const webpackConfig = require('./webpack.prod.conf');

const spinner = ora('Building for production...');
spinner.start();

rm(path.join(config.build.assetsRoot, config.assetsDirectory), (pathErr) => {
  if (pathErr) {
    throw pathErr;
  }

  webpack(webpackConfig, (webpackErr, stats) => {
    spinner.stop();

    if (webpackErr) {
      throw webpackErr;
    }

    process.stdout.write(`${stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
    })}\n\n`);

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'));
      process.exit(1);
    }

    console.log(chalk.cyan('  Build complete.\n'));
    console.log(chalk.yellow('  Run `http-server dist` to view compiled site.'));
  });
});
