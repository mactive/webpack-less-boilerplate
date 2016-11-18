var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path')

let extractCSS = new ExtractTextPlugin('stylesheets/[name].css');
let extractLESS = new ExtractTextPlugin('less/[name].css');
let extractLESSKangaroo = new ExtractTextPlugin('kangaroo/[name].css');

module.exports = {
  context: __dirname,
  entry: "./main.js",
  output: {
      path: __dirname+ '/build',
      filename: "bundle.js"
  },
  module: {
    preloader:[],
    loaders:[
      {
        test: /\.less$/,
        include: [
          path.resolve(__dirname, "less/"),
        ],
        loader: extractLESS.extract("style","css!postcss!less")
      },
      {
        test: /\.less$/,
        include: [
          path.resolve(__dirname, "kangaroo/"),
        ],
        loader: extractLESSKangaroo.extract("style","css!postcss!less")
      },
    ]
  },
  plugins:[
      extractLESS,
      extractLESSKangaroo
  ],
  postcss: [ 
    autoprefixer({ browsers: ['last 3 versions'] }), 
    // cssnano() 
  ]
};
