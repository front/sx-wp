const magicImporter = require('node-sass-magic-importer');
const path = require('path');
const extractCss = require('mini-css-extract-plugin');

// const HTMLWebpackPlugin = require('html-webpack-plugin');
// const glob = require('glob');

const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const localConf = require('./local-config.json');

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
        publicPath: '/wp-content/themes/starter-theme/build/',
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
                test: /\.(woff|woff2|eot|ttf|svg)$/i,
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
            {
                test: /.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                    },
                    'svg-transform-loader',
                    {
                        loader: 'svgo-loader',
                        options: {
                            plugins: [
                                { removeTitle: true },
                                {
                                    convertColors: {
                                        shorthex: false,
                                    },
                                },
                                { convertPathData: false },
                            ],
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new extractCss({
            filename: 'css/main.css',
        }),
        // ...generateHTMLPlugins(),
        new BrowserSyncPlugin({
            // BrowserSync options
            host: 'localhost',
            port: localConf.browserSync.port,
            proxy: localConf.browserSync.proxy,
            open: true,
        }),
    ],
};
