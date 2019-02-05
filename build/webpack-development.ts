import * as Webpack from 'webpack';

const configuration: Webpack.Configuration = {
    devtool: 'cheap-source-map',
    output: {
        devtoolModuleFilenameTemplate: '[absolute-resource-path]'
    }
};

export default configuration;
