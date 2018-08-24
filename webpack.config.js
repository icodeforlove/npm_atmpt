let webpack = require('webpack');

module.exports = [
	{
		mode: 'production',
		target: 'node',
		node: {
			__dirname: false,
			__filename: false
		},
		entry: './index',
		output: {
			path: __dirname,
			libraryTarget: 'commonjs2',
			filename: '.index.babel.js'
		},
		externals: [require('webpack-node-externals')()],
		module: {
			rules: [
				{test: /\.js$/, loader: 'babel-loader'}
			]
		}
	},

	{
		mode: 'production',
		target: 'web',
		entry: './index',
		output: {
			path: __dirname,
			library: 'atmpt',
			filename: '.index.babel.web.js'
		}
	}
];