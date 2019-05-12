require("babel-register")({
	// This will override `node_modules` ignoring - you can alternatively pass
	// an array of strings to be explicitly matched or a regex / glob
	ignore: function(filename) {
		if (filename.includes('koa') || filename.includes('server') || filename.includes('co-body')) {
		  	return false;
		} else {
		  	return true;
		}
	},
	extensions: [".es6", ".es", ".jsx", ".js"]
});

require('./server');