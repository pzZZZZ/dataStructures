const path = require ('path');
const webpack = require ('webpack');
const UglifyJSPlugin = require ('uglifyjs-webpack-plugin');

module.exports = {
  entry: path.resolve (__dirname, '../src/index'),

  output: {
    path: path.resolve (__dirname, '../dist/'),
    filename: 'index.js',
    library: 'dataStructures',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.js'],
    alias:{
      dataStructures:path.join(__dirname,'../src/dataStructures')
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader',
        ],
      },
      {test: /\.tsx?$/, loader: 'ts-loader'},

      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ['url-loader?limit=10000', 'img-loader'],
      },
    ],
  },
  plugins: [],
  optimization: {},
};
