/**
 * Result.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName: 'Result',
    autoPK        : false,
  	autoCreatedAt : false,
  	autoUpdatedAt : false,
  	attributes: {
  	id: {
  		columnName: 'ResultID',
  		type: 'integer',
  		primaryKey: true,
  	},
  	run: {
  		model: 'run',
  		columnName: 'RunId',
  	},
  	test: {
  		model: 'testcase',
  		columnName: 'TestcaseId',
  		size: 100
  	},
  	Daterun: {
  		type: 'datetime'
  	},
  	Status: {
  		type: 'string',
  		size: 10
  	},
  	Browser: {
  		type: 'string',
  		size: 20
  	},
  	Theme: {
  		type: 'string',
  		size: 20
  	},
  	Notes: {
  		type: 'text'
  	},
  	Bugs: {
  		type: 'string',
  		size: 200
  	},
  	Error: {
  		type: 'text'
  	}

  },

  getGroupsWithCounts: function(cb) {
    Result.count().exec(function(err, result){
        if(err) console.log(err);
        else {
          cb({result});
          }
    });
  }
};

