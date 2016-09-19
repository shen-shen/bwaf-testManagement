/**
 * Keyword.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoPK        : false,
  autoCreatedAt : false,
  autoUpdatedAt : false,
  tableName: 'Keyword',
  migrate: 'safe',
  attributes: {
  	Keyword: {
  		type: 'string',
      size: 50,
  		primaryKey: true
  	},
  	Description: {
  		type: 'string',
      size: 100
  	},
  	tests: {
  		collection: 'testcase',
  		through: 'testcasevskeyword',
  		via: 'keyword'
  	}
  }
};

