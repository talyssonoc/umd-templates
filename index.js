var fs = require('fs');
var path = require('path');

var patterns = {};

fs.readdirSync(path.join(__dirname, 'patterns')).forEach(function(pattern) {
	var patternPath = path.join(__dirname, 'patterns/' + pattern);

	patterns[path.basename(pattern, '.js')] = {
		template: fs.readFileSync(patternPath).toString(),
		path: patternPath
	};
});

module.exports = patterns;