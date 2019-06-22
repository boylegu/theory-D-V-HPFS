'use strict';

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const isDev = process.env.NODE_ENV === 'development';


const path = require('path')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

function assetsPath(_path) {
    const assetsSubDirectory = 'static'

    return path.posix.join(assetsSubDirectory, _path)
}


const webpackConfig = {
    entry: {
        app: './src/main.js'
    },
    resolve: {
        extensions: ['.js', '.vue',],
        alias: {
            'vue$': isDev ? 'vue/dist/vue.runtime.js' : 'vue/dist/vue.runtime.min.js',
            '@': resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                include: [resolve('src')]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src')]
            },
            {
                test: /\.css$/,
                use: [
                    isDev ? 'vue-style-loader' : MiniCSSExtractPlugin.loader,
                    {loader: 'css-loader', options: {sourceMap: isDev}},
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                include: [resolve('src/assets')],
                options: {
                    limit: 10000,
                    name: assetsPath('img/[name].[hash:7].[ext]')
                }
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
}

module.exports = webpackConfig;