const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
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
		new HtmlWebPackPlugin({
			template: path.join(__dirname, 'src/index.html'),
			filename: 'index.html'
		}),
		new CopyWebpackPlugin([{
			from: path.join(__dirname, 'src/assets'),
			to: 'assets'
		}])
	],
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js'
	}
};
