var path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	entry: {
		js:['babel-polyfill',   path.join(__dirname, 'src/index.js')]
	},
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'	
	},
	module: {
		loaders: [
			{test: /\.js$/, loader: 'babel-loader'}
		]
	}
}