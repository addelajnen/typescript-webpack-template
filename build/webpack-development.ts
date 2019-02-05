import * as Webpack from "webpack";

export default ({
	devtool: "cheap-source-map",
	output: {
		devtoolModuleFilenameTemplate: "[absolute-resource-path]",
	},
} as Webpack.Configuration);
