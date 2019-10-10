const magicImporter = require('node-sass-magic-importer');
const path = require('path');
const extractCss = require('mini-css-extract-plugin');

const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

const IS_PROD = process.env.NODE_ENV === 'production';

module.exports = {
  node: {
    fs: 'empty',
  },

  mode: IS_PROD ? 'production' : 'development',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/main.js',
    publicPath: 'build/',
  },

  externals: {
    jquery: 'jQuery',
    $: '$',
  },

  resolve: {
    extensions: ['.web.js', '.mjs', '.js', '.json', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          extractCss.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              importer: magicImporter()
            }
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'img',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              disable: !IS_PROD
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/i,
        include: path.resolve(__dirname, 'src/fonts'),
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
            },
          }
        ],
      },
      // {
      //   test: /\.svg$/,
      //   include: path.resolve(__dirname, 'src/icons'),
      //   use: [
      //     {
      //       loader: 'svg-sprite-loader',
      //       options: {
      //         publicPath: '/',
      //         esModule: false
      //       }
      //     },
      //   ],
      // },
    ],
  },

  plugins: [
    new extractCss({
      filename: 'css/main.css',
    }),
    //new SpriteLoaderPlugin({}),
    new SVGSpritemapPlugin('src/icons/**/*.svg', {
      sprite: {
        prefix: false,
        generate: {
          // Generate <use> tags within the spritemap as the <view> tag will use this
          use: true,
          // Generate <symbol> tags within the SVG to use in HTML via <use> tag
          symbol: true
        },
      },
      styles: path.join(__dirname, 'src/scss/_sprites.scss')
    }),
    new BrowserSyncPlugin({
      // BrowserSync options
      host: 'localhost',
      port: 3000,
      proxy: 'starterx-static.localhost',
      open: false,
    }),
  ],
};
