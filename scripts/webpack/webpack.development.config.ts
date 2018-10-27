import webpack from 'webpack';
import webpackMerge from 'webpack-merge';

import common from './webpack.common.config';

export default webpackMerge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
} as webpack.Configuration);
