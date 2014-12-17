var fs = require('fs');
var path = require('path');

var patterns = {};

fs.readdirSync(path.join(__dirname, 'patterns')).forEach(function(pattern) {
	var patternPath = path.join(__dirname, 'patterns/' + pattern);
	var name = path.basename(pattern, '.js');

	patterns[name] = {
		path: patternPath
	};

	Object.defineProperty(patterns[name], 'template', {
		get: function() {
			if(typeof this._source === 'undefined') {
				this._source = fs.readFileSync(patternPath).toString();
			}

			return this._source;
		}
	});
});

module.exports = patterns;