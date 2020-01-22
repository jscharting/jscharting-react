const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: './src/index.jsx',
	mode: 'none',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.html?$/,
				loader: 'html-loader'
			},
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ts-loader'
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', 'jsx', '.ts', '.tsx']
	},
	plugins: [
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin([
			{
				from: path.join(__dirname, 'src/assets'),
				to: 'assets'
			},
			{
				from: path.join(__dirname, 'src/index.html'),
				to: './'
			},
			{
				from: 'node_modules/jscharting/dist/',
				to: 'assets/jscharting/',
				ignore: ['jscharting.*']
			}
		])
	],
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js'
	}
};
