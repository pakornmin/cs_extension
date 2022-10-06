const webpack = require('webpack');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
const cssFilename = 'static/css/styles.css';

module.exports = {
    resolve: {
        modules: [
            path.resolve('./app'),
            path.resolve('./node_modules')
        ]
    },
    // Tell webpack to start bundling our app at app/index.js
    entry: {
        app: __dirname + '/app/components/index.js',
        contentscript: [__dirname + '/app/static/js/extension/contentscript.js'],
        eventPage: [__dirname + '/app/static/js/extension/eventPage.js']
    },
    // Output our app to the build/ directory
    output: {
        filename: 'static/js/[name].js',
        path: __dirname + "/build"
    },
    // Emit source maps so we can debug our code in the browser
    //devtool: 'source-map',
    // Tell webpack to run our source code through Babel
    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                include: path.join(__dirname, 'app/static/images'),
                loader: 'url-loader?limit=30000&name=static/images/[name].[ext]'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: {
                        loader: "style-loader"
                    },
                    use: {
                        loader: "css-loader",
                        options: {
                            minimize: true
                        }
                    }
                })
            }

        ]
    },
    // Since Webpack only understands JavaScript, we need to
    // add a plugin to tell it how to handle html files.
    plugins: [
        // Configure HtmlPlugin to use our own index.html file
        // as a template.
        // Check out https://github.com/jantimon/html-webpack-plugin
        // for the full list of options.
        new HtmlPlugin({
            template: 'app/index.html',
            excludeAssets: [/contentscript.*.js/, /eventPage.*.js/],
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        }),
        new HtmlWebpackExcludeAssetsPlugin(),
        new CopyWebpackPlugin([
            {
                from: 'app/static/images',
                to: 'static/images'
            },
            {
                from: 'app/manifest.json'
            },
            {
                from: 'app/config.js'
            },
            {
                from: 'app/ga.js'
            },
            {
                from: 'app/static/js/library',
                to: 'static/js/library'
            }


        ]),
        // Note: this won't work without ExtractTextPlugin.extract(..) in `loaders`.
        new ExtractTextPlugin({
            filename: cssFilename,
        })
    ]
}