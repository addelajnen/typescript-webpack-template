import * as Webpack from 'webpack';
import WebpackMerge from 'webpack-merge';

export default (env: any, options: Webpack.Configuration) =>
    WebpackMerge(
        require(`./build/webpack-common`),
        require(`./build/webpack-${options.mode}`)
    );
