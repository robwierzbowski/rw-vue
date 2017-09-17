const fs = require('fs');
const mime = require("mime");
const path = require("path");

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    "postcss-import": {
      path: 'src/'
    },
    "autoprefixer": {},
    "postcss-functions": {
      functions: {
        "inline-font": function(url) {
            url = `src/${JSON.parse(url)}`;
            const ext = path.extname(url);
            const mimetype = mime.getType(ext);
            const mimestring = mimetype ? `${mimetype};` : '';
            const data = fs.readFileSync(url, 'base64');

            return `url(data:${mimestring}charset=utf-8;base64,${data})`;
        },
      },
    },
    "postcss-mixins": {},
    "postcss-simple-vars": {},
    "postcss-nested": {},
    "postcss-calc": {},
    "postcss-reporter": {},
  }
};
