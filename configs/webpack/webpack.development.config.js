const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.common.config');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-source-map',
    output: {
        devtoolModuleFilenameTemplate: '[absolute-resource-path]'
    }
});
