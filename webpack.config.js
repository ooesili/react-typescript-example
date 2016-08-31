module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'app.js',
    path: './dist'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      {test: /\.tsx?$/, loader: 'ts-loader'},
      {test: /\.jade$/, loaders: ['file-loader?name=[name].html', 'jade-html-loader']}
    ],
    preLoaders: [
      {test: /\.js$/, loader: 'source-map-loader'}
    ]
  }
}
