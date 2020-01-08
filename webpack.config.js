const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'html-loader',
        test: /\.html$/,
      },
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.js$/,
      },
      {
        exclude: /node_modules/,
        test: /\.styl$/,
        use: [
          { loader: "style-loader" }, // creates style nodes from JS strings
          { loader: "css-loader" }, // translates CSS into CommonJS
          { loader: "stylus-loader" } // compiles Stylus to CSS
        ]
      },
      {
        exclude: /node_modules/,
        loader: 'ts-loader',
        test: /\.tsx?$/
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ],
  resolve: {
    // alias: {
    //   model$: path.resolve(__dirname, 'src/model.ts')
    // },
    extensions: [
      '.js',
      // '.styl',
      '.ts',
      '.tsx'
    ]
  }
};
