const path = require('path')

module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.scss', '.css']
  }
}
