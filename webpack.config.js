const path = require('path')
const APP_DIR = path.resolve(__dirname, './src')
const BUILD_DIR = path.resolve(__dirname, './build/')

module.exports = {
  entry: {
    bundle: APP_DIR + '/main.js'
  },
  output: {
    path: BUILD_DIR,
    filename: 'main.js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
