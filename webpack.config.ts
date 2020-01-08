import HtmlWebPackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  devServer: {
    port: 5000,
    proxy: {
      '/companies': {
        changeOrigin: true,
        pathRewrite: { '^/companies': '' },
        secure: false,
        target: 'https://api.companieshouse.gov.uk'
      }
    }
  },
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
          { loader: 'style-loader' }, // creates style nodes from JS strings
          { loader: 'css-loader' }, // translates CSS into CommonJS
          { loader: 'stylus-loader' } // compiles Stylus to CSS
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
      filename: './index.html',
      template: './src/index.html',
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

export default config;
