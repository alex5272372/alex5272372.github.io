'use strict'

const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(process.cwd(), 'dist')
  },
  devServer: {
    static: path.resolve(process.cwd(), 'dist'),
    port: 8080,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: { postcssOptions: { plugins: () => [autoprefixer] }}
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: { sources: { list: [
          '...',
          {
            tag: 'a',
            attribute: 'href',
            type: 'src',
            filter: (tag, attribute, attributes) =>
              /\.(pdf)$/i.test(attributes.find(el => el.name === 'href').value)
          }
        ] }}
      },
      {
        test: /\.(png|jpg)$/i,
        type: 'asset/resource',
        generator: { filename: 'img/[name]-[hash][ext]' }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: { filename: '[name]-[hash][ext]' }
      },
      {
        test: /\.(pdf)$/i,
        type: 'asset/resource',
        generator: { filename: '[name]-[hash][ext]' }
      }
    ]
  }
}
