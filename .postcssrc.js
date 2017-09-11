// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    "postcss-import": {
      path: 'src/'
    },
    "autoprefixer": {},
    "postcss-mixins": {},
    "postcss-simple-vars": {},
    "postcss-nested": {},
    "postcss-calc": {},
    "postcss-reporter": {},
  }
};
