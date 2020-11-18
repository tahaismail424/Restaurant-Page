const path = require('path');
const { mainModule } = require('process');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  resolve: {
    alias: {
      'assets': path.resolve(__dirname, 'src/assets')
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
],
  entry: './src/index.js',
  output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
  },
  module: {
      rules: [
          {
              test: /\.js/,
              loader: 'babel-loader',
              include: __dirname + '/src',
          },
          {
              test: /\.css$/,
              use: [
                'style.loader',
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 1,
                    modules: true
                  }
                }
              ],
              include: /\.module\.css$/
            },
            {
              test: /\.css$/,
              use: [
                'style-loader',
                'css-loader'
              ],
              exclude: /\.module\.css$/
            },
            {
              test: /\.(woff(2)?|ttf|eot|svg|otf|jpg|jpeg|png)(\?v=\d+\.\d+\.\d+)?$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/'
                  }
                }
              ]   
            }
          ]
        }
      };