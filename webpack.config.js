const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    'polyfills': './public/polyfills',
    'vendor': './public/vendor',
    'bootstrap': './public/bootstrap'
  },
  devtool: 'source-map',
  resolve: {
    extensions:['.js','.ts']
  },
  devServer: {
     contentBase: './public'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/build'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'awesome-typescript-loader'
      },
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['bootstrap', 'vendor', 'polyfills']
    })
  ]
};
