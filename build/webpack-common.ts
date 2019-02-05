import * as Path from "path";
import * as Webpack from "webpack";

const context = Path.join(__dirname, "..", "src");

export default ({
	context,
	entry: "./Main",
	resolve: {
		extensions: [".ts", ".tsx"],
		alias: {
			"@": context
		}
	},
	module: {
		rules: [
			{
				loader: "ts-loader",
				test: /\.tsx?$/,
				exclude: /node_modules/
			},
		],
	},
	output: {
		filename: "./myLib.js",
		library: "./myLib",
		libraryTarget: "commonjs"
	}
} as Webpack.Configuration);
