const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const NodemonWebpackPlugin = require('nodemon-webpack-plugin');

const rootPath = path.resolve(__dirname, '..', '..');
const srcPath = path.resolve(rootPath, 'src');
const buildPath = path.resolve(rootPath, 'build');

module.exports = {
    context: srcPath,

    watchOptions: {
        aggregateTimeout: 300
    },

    entry: {
        app: './app.ts'
    },

    resolve: {
        extensions: ['.ts', '.tsx'],
        plugins: [new TSConfigPathsPlugin()]
    },

    target: 'node',
    externals: [nodeExternals()],

    output: {
        filename: '[name].js',
        path: buildPath
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },

    plugins: [new NodemonWebpackPlugin()]
};
