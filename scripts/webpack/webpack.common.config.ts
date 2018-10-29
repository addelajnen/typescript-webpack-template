import webpack from 'webpack';
import path from 'path';

import nodeExternals from 'webpack-node-externals';

const basePath = path.resolve(__dirname, '..', '..');
const srcPath = path.resolve(basePath, 'src');
const buildPath = path.resolve(basePath, 'dist');

export default {
    context: srcPath,

    entry: './main.ts',

    resolve: {
        alias: {
            '@': srcPath,
        },
        extensions: ['.ts', '.tsx'],
    },

    target: 'node',
    externals: [nodeExternals()],

    output: {
        filename: '[name].bundle.js',
        path: buildPath,
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
} as webpack.Configuration;
