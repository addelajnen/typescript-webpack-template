import webpack from 'webpack';
import path from 'path';

import nodeExternals from 'webpack-node-externals';

const ROOT = path.resolve(__dirname, '..', '..');

export default {
    context: path.join(ROOT, 'src'),

    entry: './main.ts',

    resolve: {
        extensions: ['.ts', '.tsx'],
    },

    target: 'node',
    externals: [nodeExternals()],

    output: {
        filename: '[name].bundle.js',
        path: path.join(ROOT, 'dist'),
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
