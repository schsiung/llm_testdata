var path = require('path')

module.exports = {
  entry: '', // karma will set this
  output: '', // karma will set this
  devtool: 'source-map',
  resolve: {
    alias: {
      lib: path.resolve(__dirname, 'lib')
  },
      src: path.resolve(__dirname, 'src'),
      lib: path.resolve(__dirname, 'lib')
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: [
          // path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'test')
        ]
      }
    ]
  }
}