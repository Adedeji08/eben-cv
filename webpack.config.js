/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 30/08/2022 - 10:31:23
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 30/08/2022
    * - Author          : 
    * - Modification    : 
**/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports ={
    entry: "./src/App.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: '/',
        filename: "bundle.js"
    },
    devServer: {
        static: {
          directory: path.join(__dirname, "public")
        },
    
        compress: true,
        port: 3010,
      },
    module: {
        rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader'
          }
        }, {
          test: /\.s?css$/,
          use: [

            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        { test: /\.txt$/, 
        use: 'raw-loader'
     },
     {
        test: /\.scss$/,
        use: [
          {
            loader: 'css-loader',
          }, {
            loader: 'resolve-url-loader',
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true, // <-- !!IMPORTANT!!
            }
          }
        ]
      },
    ]
      },
    plugins: [ new HtmlWebpackPlugin({ template: './src/index.html' })],
};
// var webpack = require('webpack');
// var path = require('path');

// var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
// var APP_DIR = path.resolve(__dirname, 'src/client/app');

// var config = {
//   entry: APP_DIR + '/index.jsx',
//   output: {
//     path: BUILD_DIR,
//     filename: 'bundle.js'
//   },
//   module : {
//     rules : [
//       {
//         test : /\.jsx?/,
//         include : APP_DIR,
//         loader : 'babel-loader'
//       }
//     ]
//   }
// };

// module.exports = config;
