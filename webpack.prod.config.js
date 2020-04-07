const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = { 
	entry: { main: './src/js/index.js' },
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'  
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	}, 
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}, 
			{
				test: /\.html$/,
				use: [ 
					{
						loader: "html-loader"
					}
				]
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({filename: 'style.css'}),
	], 
	watch: true      
};
