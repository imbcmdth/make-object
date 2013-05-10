var makeObject = require('../');

module.exports = {
	data: [
		// simple
		"x",
		"[0]",
		"[1]",
		// nested
		"x.y",
		"x[0]",
		"x[1]",
		// complex
		"x.y[0].z",
		"[0].y[1]",
		"[1].y[0][0]"
	],

	string:  "test",
	number:  12345,
	boolean:  true,
	array:  ["test"],
	object:  {key: "test"},

	getVal: function(object, keySpec) {
		if(keySpec[0] === '[')
			return eval('object' + keySpec);
		else
			return eval('object.' + keySpec);
	},

	makeObj: function(keySpec, value) {
		return {key: keySpec, obj: makeObject(keySpec, value)};
	}
};
