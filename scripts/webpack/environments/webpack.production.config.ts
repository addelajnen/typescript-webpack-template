import * as Webpack from 'webpack';

import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

const configuration: Webpack.Configuration = {
    devtool: 'source-map',
    optimization: {
        minimize: true        
    },
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true
        })
    ]
};

export default configuration;