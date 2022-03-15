const path = require('path')
const NodemonPlugin = require('nodemon-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

<<<<<<< HEAD

module.exports = {
  entry: './src/index.js',
  target: 'node',
  mode: 'development',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js'],
    },
  plugins: [
    new NodemonPlugin()
  ],
  externals: [
    nodeExternals()
  ]
=======
module.exports = {
    entry: './src/index.js',
    target: 'node',
    mode: 'development',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js'],
    },
    plugins: [
        new NodemonPlugin()
    ],
    externals: [
        nodeExternals()
    ]
>>>>>>> 9dd8634b02e9b3a6b8aab0d7a7589e6d62c2b2b2
}