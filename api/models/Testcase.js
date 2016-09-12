/**
 * Testcase.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	// schema: true,
	// connection: 'sqlserver',
	// tableName: 'Testcase',
  attributes: {
  	TestcaseID: {
  		type: 'string',
  		primaryKey: true
  	},
  	Description: {
  		type: 'string'
  	},
  	Steps: {
  		type: 'string'
  	},
  	Category: {
  		type: 'string'
  	},
  	Active: {
  		type: 'boolean'
  	},
  	Version: {
  		type: 'string'
  	},
  	Channel: {
  		type: 'string'
  	},
  	Method: {
  		type: 'string'
  	},
  	InvocationNumber: {
  		type: 'interger'
  	},
  	Testdata: {
  		type: 'string'
  	},
  	Testdata: {
  		type: 'boolean'
  	}
  }
};

