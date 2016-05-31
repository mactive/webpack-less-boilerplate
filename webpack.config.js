var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname,
  entry: "./index.less",
  output: {
      path: __dirname,
      filename: "bundle.js"
  },
  module: {
      loaders:[{
          test: /\.less$/,
          loader: ExtractTextPlugin.extract("style","css!postcss!less")
      }]
    },
    plugins:[
      new ExtractTextPlugin("bundle.css")
    ],
    postcss: [ 
      autoprefixer({ browsers: ['last 2 versions'] }), 
      cssnano() 
    ]
};
