// see http://vuejs-templates.github.io/webpack for documentation.
const prodEnv = { NODE_ENV: '"production"' };
const devEnv = { NODE_ENV: '"development"' };
const testEnv = { NODE_ENV: '"testing"' };

module.exports = {
  build: {
    env: prodEnv,
  },
  dev: {
    env: devEnv,
  },
  test: {
    env: testEnv,
  },
};
