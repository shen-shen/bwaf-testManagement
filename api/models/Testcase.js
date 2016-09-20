/**
 * Testcase.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	schema: true,
	connection: 'sqlserver',
	tableName: 'Testcase',
  autoPK        : false,
  autoCreatedAt : false,
  autoUpdatedAt : false,
  // migrate: 'safe',
  attributes: {
  	TestcaseID: {
  		type: 'string',
  		primaryKey: true,
      size: 100
  	},
  	Description: {
  		type: 'text'
  	},
  	Steps: {
  		type: 'text'
  	},
  	Category: {
  		type: 'string',
      size: 50
  	},
  	Active: {
  		type: 'boolean'
  	},
  	Version: {
  		type: 'string',
      size: 20
  	},
  	Channel: {
  		type: 'string',
      size: 20
  	},
  	Method: {
  		type: 'text',
      size: 250
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
      model: 'report'
    },
    keywords: {
      collection : 'keyword',
      through: 'testcasevskeyword'
    }
  },
      getTestcases: function(cb) {
        Testcase.find().exec(function(err, res) {
            cb(res);
        });
    },
};

