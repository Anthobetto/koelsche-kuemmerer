const path = require('path');  
const HtmlWebpackPlugin = require('html-webpack-plugin');  

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'), 
    filename: '[name].[contenthash].js', 
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/,  
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], 
          },
        },
      },
      {
        test: /\.css$/, 
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], 
  },
  optimization: {
    splitChunks: {
      chunks: 'all', 
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  mode: 'production', 
};