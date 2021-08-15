'use strict';

import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const isProd = process.env.NODE_ENV === 'production';
const cssModuleRegex = /\.module\.css$/;

const styleLoaders = [
	require.resolve('style-loader'),
	{loader: require.resolve('css-loader')},
	{
		loader: "postcss-loader",
		options: {
			postcssOptions: {
				plugins: ["postcss-preset-env"]
			}
		}
	}
];

module.exports = {
	target: 'web',
	mode: isProd ? 'production' : 'development',
	devtool: !isProd && 'inline-cheap-module-source-map',
	devServer: {
		clientLogLevel: 'debug',
		compress: true,
		hot: true,
		overlay: true,
		port: 3021,
		historyApiFallback: true,
		disableHostCheck: true,
		host: '0.0.0.0',
		public: '0.0.0.0'
	},
	entry: path.resolve(__dirname, 'src/index'),
	output: {
		path: isProd ? path.join(__dirname, 'build') : path.join(__dirname, 'dist'),
		pathinfo: !isProd,
		filename: isProd ? 'js/[name].[contenthash].js' : 'js/[name].bundle.js',
		// publicPath: '/',
		assetModuleFilename: isProd ? 'media/[name].[contenthash][ext]' : 'media/[name][ext]',
		clean: true
	},
	resolve: {
		modules: ['node_modules', path.resolve(__dirname, 'src')],
		extensions: ['.js', '.ts', '.tsx', '.json', '.css']
	},
	module: {
		rules: [
			{
				oneOf: [
					{
						test: /\.(js|mjs|jsx|ts|tsx)$/,
						include: path.resolve(__dirname, 'src'),
						loader: 'babel-loader',
						options: {
							cacheDirectory: true,
							cacheCompression: isProd
						}
					},
					{
						test: /\.css$/,
						exclude: cssModuleRegex,
						use: styleLoaders
					},
					{
						test: cssModuleRegex,
						use: styleLoaders
					},
					{
						test: /\.(png|jpe?g|gif|svg|woff|woff2)$/i,
						type: 'asset'
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: path.resolve(__dirname, 'public/index.html')
		}),
		new webpack.DefinePlugin({
			__DEV__   : !isProd,
			__PROD__  : isProd,
			"process.env": {NODE_ENV: JSON.stringify(process.env.NODE_ENV)},
		})
	].filter(Boolean)
};
