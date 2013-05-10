// makeObject - converts string into the equivalent object
// Ex:
// Turns "x.y.z" into {x: {y: {z: value }}}
// Turns "x[0][1].z" into {x: [[null, {z: value }]]}
// Turns "[0][1]" into [[null, value ]]

(function (root, factory) {
		"use strict";

		if (typeof exports === 'object') {
			module.exports = factory();
		} else if (typeof define === 'function' && define.amd) {
			define(factory);
		} else {
			root.MakeObject = factory();
		}
	}(this, function () {

	function getArrayTokens(levelName, tokens) {
		var levelTokens = levelName.split('[');
		var tokenCount = levelTokens.length;
		while (tokenCount-- > 1) {
			tokens.unshift(levelTokens[tokenCount]);
		}
		var firstToken = levelTokens[0];
		return firstToken.length === 0 ? tokens.shift() : firstToken;
	}

	function isArrayToken(token) {
		return token[token.length - 1] === ']';
	}

	return function(str, val, targetObj) {
		var currLevel = null;
		var prevLevel = null;
		var tokens = str.split('.');
		var currToken, prevToken;

		while (tokens.length) {
			currToken = tokens.shift();
			currToken = getArrayTokens(currToken, tokens);

			if (isArrayToken(currToken)) {
				currToken = parseInt(currToken, 10);
				if (prevLevel) {
					if (!prevLevel[prevToken]) {
						currLevel = prevLevel[prevToken] = [];
					} else {
						currLevel = prevLevel[prevToken];
					}
				} else {
					currLevel = targetObj || (targetObj = []);
				}
				if (!tokens.length) {
					currLevel[currToken] = val;
				}
			} else {
				if (prevLevel) {
					if (!prevLevel[prevToken]) {
						currLevel = prevLevel[prevToken] = {};
					} else {
						currLevel = prevLevel[prevToken];
					}
				} else {
					currLevel = targetObj || (targetObj = {});
				}
				if (!tokens.length) {
					currLevel[currToken] = val;
				}
			}
			prevToken = currToken;
			prevLevel = currLevel;
		}
		return targetObj;
	};
}));
