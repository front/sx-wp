const magicImporter = require('node-sass-magic-importer');
const path = require('path');
const extractCss = require('mini-css-extract-plugin');

// const HTMLWebpackPlugin = require('html-webpack-plugin');
// const glob = require('glob');

const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

// const dummyData = require('./dummy-data')

// const generateHTMLPlugins = () =>
//   glob.sync('./src/prototype/*.?(twig|html)').map(
//     dir => (dir) ?
//         new HTMLWebpackPlugin({
//           filename: './prototype/' + path.basename(dir.replace('.twig', '.html')), // Output
//           template: dir, // Input
//         }) : null
//   );

const IS_PROD = process.env.NODE_ENV === 'production';

module.exports = {
  node: {
    fs: 'empty',
  },
  // devServer: {
  //   contentBase: path.join(__dirname, 'build/prototype'),
  //   compress: false,
  //   port: 8090,
  //   writeToDisk: true,
  //   open: 'Google Chrome'
  // },

  mode: IS_PROD ? 'production' : 'development',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/main.js',
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
      // {
      //   test: /\.(twig|html)$/,
      //   use: [
      //     'raw-loader',
      //     {
      //       loader: 'twig-html-loader',
      //       options: {
      //         data: dummyData,
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: { disable: !IS_PROD },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
            },
          },
        ],
      }
    ],
  },

  plugins: [
    new extractCss({
      filename: 'css/main.css',
    }),
    // ...generateHTMLPlugins(),
    new BrowserSyncPlugin(
      // BrowserSync options
      {
        host: 'localhost',
        port: 3000,
        proxy: 'http://dev.starter-theme.no/', // Rename this section with url which local website is running from
        open: false
      }
    )
  ],
};
