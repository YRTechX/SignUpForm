const path = require('path');

module.exports = {
  // Другие настройки Webpack
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Этот путь должен указывать на твою папку src
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};
