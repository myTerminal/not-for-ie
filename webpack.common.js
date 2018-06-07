/* global require module __dirname */

const libraryFileName = 'not-for-ie';
const libraryName = 'notForIe';

const sourceDir = 'src';
const outputDir = 'build';

const path = require('path');

const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const clean = new CleanWebpackPlugin([outputDir]);

module.exports = {
    mode: 'development',
    entry: {
        library: './' + sourceDir + '/scripts/' + libraryFileName + '.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'eslint-loader'
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'babel-preset-env'
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        clean
    ],
    output: {
        filename: 'scripts/' + libraryFileName + '.js',
        path: path.resolve(__dirname, outputDir),
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    }
};
