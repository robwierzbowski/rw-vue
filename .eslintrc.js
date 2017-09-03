// http://eslint.org/docs/user-guide/configuring
const disallowInProd = process.env.NODE_ENV === 'production' ? 2 : 0;

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html',
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js',
      },
    },
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': [
      'error',
      'always',
      {
        'js': 'never',
        'vue': 'never',
      },
    ],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': [
      'error',
      {
        'optionalDependencies': ['test/unit/index.js'],
      },
    ],
    // allow debugger and console during development
    'no-debugger': disallowInProd,
    'no-console': disallowInProd,

    // Personal alterations to AirBnB ruleset
    'no-plusplus': 0,
    'func-names': 0,
  },
}
