var path = require("path");

module.exports = {
	entry: {
		"index": "./src/components/Follow.js"
	},
	output: {
		libraryTarget: "commonjs",
		path: path.join(__dirname, "lib/"),
		filename: "[name].js"
	},
	module: {
		loaders: [
			{ test: /\.css$/, exclude: /node_modules/, loader: "style-loader!css-loader" },
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
		]
	}
};