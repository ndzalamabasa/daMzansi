const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'main.js',
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 600,
    ignored: '**/node_modules',
  },
};