import webpack from 'webpack';
import webpackMerge from 'webpack-merge';

import common from './webpack.common.config';

export default webpackMerge(common, {
    mode: 'production',
} as webpack.Configuration);
