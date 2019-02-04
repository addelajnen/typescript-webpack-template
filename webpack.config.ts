import * as Path from "path";
import * as Webpack from "webpack";

import WebpackMerge from "webpack-merge";

export default (env: any, options: Webpack.Configuration) => {
	return WebpackMerge(
		({
			context: Path.resolve(__dirname, "src"),
			entry: "./index.ts",
			mode: options.mode,
			module: {
				rules: [
					{
						exclude: /node_modules/,
						loader: "ts-loader",
						test: /\.tsx?$/,
					},
				],
			},
			output: {
				filename: "[name].js",
				path: Path.resolve(__dirname, "dist"),
			},
			resolve: {
				extensions: [".ts", ".tsx"],
			},
		} as Webpack.Configuration),
		require(`./webpack.${options.mode}.config.ts`),
	);
};
