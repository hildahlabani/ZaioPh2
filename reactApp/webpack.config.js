const path = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');

module.export ={
	entry: '.main.js',
	output:
	path; path.join(ZaioPh2 '/bundle');
	filename: 'index_bundle.js'
},

devServer: {
	inline: true,
	port: 8001,
},

module:{
	rules:[
	{
		test: /\.jsx?$/,
		exclude: /node_modules/,
		loader: 'babel-laoder',
		query:{
			presets:['es2015', 'react']
		}
	}
	]
},

plugins:[
	new HtmLWebpackplugin({
		template: './index.html'		
	})
]

"start": "webpack-dev-server --mode development --open --hot",
"build": "webpack --mode production"
