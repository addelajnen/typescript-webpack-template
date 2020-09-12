import { Configuration, ConfigurationFactory } from "webpack"
import { resolve } from "path"

export default ((env, args) => ({
	context: resolve(__dirname, "src"),
	entry: "./index.ts",
	devtool: args.mode === "production" ? "cheap-source-map" : "eval-cheap-source-map",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		alias: {
			"@": "."
		},
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		filename: "index.js",
		path: resolve(__dirname, "dist")
	}
})) as ConfigurationFactory
