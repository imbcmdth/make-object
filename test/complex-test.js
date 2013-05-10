var vows = require('vows'),
    assert = require('assert'),
    shared = require('./shared.js');

var testData = shared.data;

var testValueString = shared.string;
var testValueNumber = shared.number;
var testValueBoolean = shared.boolean;
var testValueArray = shared.array;
var testValueObject = shared.object;

var getValue = shared.getVal;
var makeTestObj = shared.makeObj;

vows.describe('Complex').addBatch({
	// OBJECT
	'Object w/ String Value': {
		topic: function(){ return makeTestObj(testData[6], testValueString); },

		'Correct Value' : function (object) {
			assert.equal (getValue(object.obj, object.key), testValueString);
		}
	},
	'Object w/ Number Value': {
		topic: function(){ return makeTestObj(testData[6], testValueNumber); },

		'Correct Value' : function (object) {
			assert.equal (getValue(object.obj, object.key), testValueNumber);
		}
	},
	'Object w/ Boolean Value': {
		topic: function(){ return makeTestObj(testData[6], testValueBoolean); },

		'Correct Value' : function (object) {
			assert.equal (getValue(object.obj, object.key), testValueBoolean);
		}
	},
	'Object w/ Array Value': {
		topic: function(){ return makeTestObj(testData[6], testValueArray); },

		'Correct Value' : function (object) {
			assert.deepEqual (getValue(object.obj, object.key), testValueArray);
		}
	},
	'Object w/ Object Value': {
		topic: function(){ return makeTestObj(testData[6], testValueObject); },

		'Correct Value' : function (object) {
			assert.deepEqual (getValue(object.obj, object.key), testValueObject);
		}
	},
	// ARRAY w/ SPARSE ARRAY
	'Array w/ String Value': {
		topic: function(){ return makeTestObj(testData[7], testValueString); },

		'Correct Value' : function (object) {
			assert.equal (object.obj[0].y[0], undefined);
			assert.equal (getValue(object.obj, object.key), testValueString);
		}
	},
	'Array w/ Number Value': {
		topic: function(){ return makeTestObj(testData[7], testValueNumber); },

		'Correct Value' : function (object) {
			assert.equal (object.obj[0].y[0], undefined);
			assert.equal (getValue(object.obj, object.key), testValueNumber);
		}
	},
	'Array w/ Boolean Value': {
		topic: function(){ return makeTestObj(testData[7], testValueBoolean); },

		'Correct Value' : function (object) {
			assert.equal (object.obj[0].y[0], undefined);
			assert.equal (getValue(object.obj, object.key), testValueBoolean);
		}
	},
	'Array w/ Array Value': {
		topic: function(){ return makeTestObj(testData[7], testValueArray); },

		'Correct Value' : function (object) {
			assert.equal (object.obj[0].y[0], undefined);
			assert.deepEqual (getValue(object.obj, object.key), testValueArray);
		}
	},
	'Array w/ Object Value': {
		topic: function(){ return makeTestObj(testData[7], testValueObject); },

		'Correct Value' : function (object) {
			assert.equal (object.obj[0].y[0], undefined);
			assert.deepEqual (getValue(object.obj, object.key), testValueObject);
		}
	},
	// SPARSE ARRAY
	'Sparse Array w/ String Value': {
		topic: function(){ return makeTestObj(testData[8], testValueString); },

		'Correct Value' : function (object) {
			assert.equal (object.obj[0], undefined);
			assert.equal (getValue(object.obj, object.key), testValueString);
		}
	},
	'Sparse Array w/ Number Value': {
		topic: function(){ return makeTestObj(testData[8], testValueNumber); },

		'Correct Value' : function (object) {
			assert.equal (object.obj[0], undefined);
			assert.equal (getValue(object.obj, object.key), testValueNumber);
		}
	},
	'Sparse Array w/ Boolean Value': {
		topic: function(){ return makeTestObj(testData[8], testValueBoolean); },

		'Correct Value' : function (object) {
			assert.equal (object.obj[0], undefined);
			assert.equal (getValue(object.obj, object.key), testValueBoolean);
		}
	},
	'Sparse Array w/ Array Value': {
		topic: function(){ return makeTestObj(testData[8], testValueArray); },

		'Correct Value' : function (object) {
			assert.equal (object.obj[0], undefined);
			assert.deepEqual (getValue(object.obj, object.key), testValueArray);
		}
	},
	'Sparse Array w/ Object Value': {
		topic: function(){ return makeTestObj(testData[8], testValueObject); },

		'Correct Value' : function (object) {
			assert.equal (object.obj[0], undefined);
			assert.deepEqual (getValue(object.obj, object.key), testValueObject);
		}
	},
}).export(module);
