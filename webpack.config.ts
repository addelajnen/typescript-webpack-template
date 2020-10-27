import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
	context: path.resolve(__dirname, 'src'),
	entry: './index.ts',
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
		extensions: ['.ts', '.tsx', '.js', '.json'],
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
	}
}

export default config
