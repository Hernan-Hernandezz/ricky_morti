const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const Dotenv = require('dotenv-webpack'); 
const { CleanWebpackPlugin  }= require('clean-webpack-plugin')


module.exports={
  entry: './src/index.js',
  output:{
    path: path.resolve(__dirname,'dist'),
    filename: '[name].[contenthast].js',
    assetModuleFilename:'assets/images/[hast][ext][query]',
  },
  mode:'production',
  resolve:{
    extensions:['.js'],
    alias:{
      '@styles': path.resolve(__dirname,'src/styles'),
      '@images': path.resolve(__dirname,'src/assets/images')
    }
  },
  module:{
    rules:[
      {
        test:/\.m?js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader'
        }
      },
      {
        test:/\.css$/i,
        use:[MiniCssExtractPlugin.loader,'css-loader',]
      },
      {
        test:/\.(png|svg|jpg|jpeg|gif)$/i,
         type: 'asset/resource',
      },
      {
        test:/\.pug$/i,
        use:{
          loader:'pug-html-loader'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use:{
          loader:'url-loader',
          options:{
            name: "[name].[contenthast].[ext]",
            outputPath: "./assets/fonts/",
            publicPath: "../assets/fonts/",
            esModule: false,
          }
        }
      },
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      inject:false,
      template:'./public/index.html',
      filename:'./index.html',
    }),
    new MiniCssExtractPlugin({
        filename:'assets/[name].[contenthast].css'
    }),
    new CopyPlugin({
      patterns:[
        {
          from: path.resolve(__dirname,'src','assets/images'),
          to: 'assets/images'
        }
      ]
    }),
    new Dotenv(),
    new CleanWebpackPlugin(),
  ],
  optimization:{
    minimize:true,
    minimizer:[
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ]
  }
}
