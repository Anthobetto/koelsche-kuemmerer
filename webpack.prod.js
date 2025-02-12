const path = require('path');  // Importa el módulo 'path'

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),  // Ruta para el directorio de salida
    filename: '[name].[contenthash].js',  // Nombre con hash para control de cache
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  // Para archivos .js y .jsx
        exclude: /node_modules/,  // Excluye la carpeta node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],  // Configura los presets de Babel
          },
        },
      },
      {
        test: /\.css$/,  // Para archivos .css
        use: ['style-loader', 'css-loader'],  // Carga los archivos CSS
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Permite que Webpack reconozca archivos .js y .jsx
  },
  optimization: {
    splitChunks: {
      chunks: 'all',  // Divide el código en múltiples archivos automáticamente
    },
  },
  mode: 'production',  // Modo de producción
};