const path = require('path');

module.exports = {
  entry: {
    main: './src/js/index.js',
    game: './src/js/game.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/js'),
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 600,
    ignored: '**/node_modules',
  },
};
