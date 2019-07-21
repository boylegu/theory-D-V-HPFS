'use strict';

const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.base.config');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ResourceHintWebpackPlugin = require('resource-hints-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const path = require('path')
const loadMinified = require('./load-minified')
const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");


function resolve(dir) {
    return path.join(__dirname, '..', dir)
}


const env = module.exports = {
    NODE_ENV: 'production'
};

const webpackConfig = merge(commonConfig, {
    mode: 'production',
    devtool: false,

    output: {
        path: resolve('dist'),
        publicPath: '/',
        filename: 'js/[name].bundle.[chunkhash].js',
        chunkFilename: 'js/[id].chunk.[chunkhash].js'
    },
    optimization: {
        runtimeChunk: 'single',
        minimizer: [
            new OptimizeCSSAssetsPlugin({
                cssProcessorPluginOptions: {
                    preset: ['default', {discardComments: {removeAll: true}}],
                }
            }),
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: false
            })
        ],
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                        return `npm.${packageName.replace('@', '')}`;
                    },
                },
            },
        },
    },
    plugins: [
        new webpack.EnvironmentPlugin(env),
        new MiniCSSExtractPlugin({
            filename: 'css/[name].[hash].css',
            chunkFilename: 'css/[id].[hash].css'
        }),
        new CompressionPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp('\\.(js|css)$'),
            threshold: 10240,
            minRatio: 0.8
        }),
        new webpack.HashedModuleIdsPlugin(),
        new HtmlWebPackPlugin({
            inject: true,
            template: './public/index.html',
            chunksSortMode: 'dependency',
            favicon: './public/favicon.ico',
            //templateParameters: {
            //    BASE_URL: '/core/static/' + 'static',
            //},
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            serviceWorkerLoader: `<script>${loadMinified(path.join(__dirname,
                './registerServiceWorker.js'))}</script>`
        }),
        new ResourceHintWebpackPlugin(),
        new SWPrecacheWebpackPlugin({
            cacheId: 'my-vue-webpack',
            filename: 'service-worker.js',
            staticFileGlobs: ['dist/**/*.{js,html,css}'],
            minify: true,
            stripPrefix: 'dist/',
            runtimeCaching: [{
                handler: 'cacheFirst',
                urlPattern: /[.]png$/,
            }],
        }),
        new ImageminWebpWebpackPlugin()
    ]

});

module.exports = webpackConfig;