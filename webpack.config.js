const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/assets/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, '_site/scripts'),
    filename: 'scripts.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    ],
  },
};
