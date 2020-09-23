const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'out.all.js',
  },
  resolve: {
    symlinks: false, // CAUTION: this is important, otherwise `mylib` symlink is resolved before the module rule matching, then it's not under 'node_modules'
    extensions: ['.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules\/(?!mylib\/)/,
        options: {
          rootMode: 'upward',
        }
      },
    ],
  },
};
