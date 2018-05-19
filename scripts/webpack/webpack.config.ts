import * as Webpack from 'webpack';
import * as Path from 'path';

import nodeExternals from 'webpack-node-externals';
import merge from 'webpack-merge';

const root = Path.resolve(__dirname, '..', '..');

let configuration: Webpack.Configuration = {
    context: Path.resolve(root, 'src'),

    entry: {
        __APP__: './main.ts'
    },

    resolve: {
        extensions: [ '.ts' ]
    },

    target: 'node',
    externals: [ nodeExternals() ],

    output: {
        filename: '[name].bundle.js',
        path: Path.resolve(root, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    }
};

export default merge(configuration, require(Path.resolve(__dirname, 'environments', `webpack.${process.env.NODE_ENV}.config.ts`)).default);