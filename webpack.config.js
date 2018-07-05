const config = {
	mode: process.env.NODE_ENV || 'development',
	entry: ['babel-polyfill', './app/app.js'],
	output: {
		filename: 'bundle.js',
		path: __dirname + './build'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},

	devServer: {
		port: process.env.PORT || 3000,
		contentBase: './build',
		inline: true
	}
};

module.exports = config;