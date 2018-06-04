const config = {
	mode: 'development',
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
		port: process.env.port || 3000,
		contentBase: './build',
		inline: true
	}
};

module.exports = config;