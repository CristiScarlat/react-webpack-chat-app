const path = require('path')
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, dev) => ({
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 3000
  },
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        exclude: /node_modules/,
        //include: [path.resolve(__dirname, 'src/blocks'), path.resolve(__dirname, 'src')],
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
      }
    ]
  },
  resolve: {
    alias: {
      'components': path.resolve(process.cwd(), './src/components'),
      'blocks': path.resolve(process.cwd(), './src/blocks'),
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
        'REACT_APP_API': JSON.stringify('http://localhost:5000')
      }
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: path.resolve(__dirname, 'public', 'index.html'),
    })
  ]
})