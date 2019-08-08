const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/index.jsx',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.html?$/,
				loader: 'html-loader'
			}
		]
	},
	resolve: {
		extensions: ['.js', 'jsx']
	},
	plugins: [
		new CopyWebpackPlugin([{
			from: path.join(__dirname, 'src/assets'),
			to: 'assets'
		}, {
			from: path.join(__dirname, 'src/index.html'),
			to: './'
		}])
	],
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js'
	}
};
