const PnpWebpackPlugin = require(`pnp-webpack-plugin`);
const path = require(`path`);

module.exports = {
	entry: './src/index.ts',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		alias: {
			"^@/": path.resolve(__dirname, "src")
		},
		extensions: ['.tsx', '.ts', '.js'],
		plugins: [
			PnpWebpackPlugin,
		],
	},
	resolveLoader: {
		plugins: [
			PnpWebpackPlugin.moduleLoader(module),
		],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
};
