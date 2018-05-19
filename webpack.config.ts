import * as webpack from 'webpack';
import * as path from 'path';

const configuration: webpack.Configuration = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        __APP__: './main.ts'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    }
};

export default configuration;