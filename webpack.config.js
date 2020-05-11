const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlagin = require('mini-css-extract-plugin')

module.exports = {
  entry: [
    './src/js/index.js',
  ],
  output: {
    filename: './js/bundle.js'
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
            {
                loader: MiniCssExtractPlagin.loader,
                options: {
                    hmr: true,
                    reloadAll: true
                },
            },
            'css-loader'
        ]
     },
     {
        test: /\.s[ac]ss$/,
        use: [
            {
                loader: MiniCssExtractPlagin.loader,
                options: {
                    hmr: true,
                    reloadAll: true
                },
            },
            'css-loader',
            'sass-loader'
        ]
      },
      {
        test: /\.pug$/,
        use: [
        {
            loader: "pug-loader",
            options: {
              "pretty":true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader']
      }
    ]
  },
  devServer: {
    port: 4200,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/html/views/ui.pug',
      filename: './index.html',
      inject: true
    }),
    new MiniCssExtractPlagin({
      filename: '[name].css'
  })
  ]
};