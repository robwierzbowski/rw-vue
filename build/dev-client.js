require('eventsource-polyfill');

const hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true');

function callback(event) {
  if (event.action === 'reload') {
    window.location.reload();
  }
}

hotClient.subscribe(callback);
