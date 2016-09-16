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
  		type: 'text'
  	},
  	Steps: {
  		type: 'text'
  	},
  	Category: {
  		type: 'text'
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
  		type: 'text'
  	},
  	InvocationNumber: {
  		type: 'interger'
  	},
  	Testdata: {
  		type: 'text'
  	},
  	Automated: {
  		type: 'boolean'
  	},
    report: {
      model: 'Report'
    }
  },
      getTestcases: function(cb) {
        Testcase.find().exec(function(err, res) {
            cb(res);
        });
    },
};

