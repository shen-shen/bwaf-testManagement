/**
 * Groups.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  tableName: 'Groups',
  attributes: {
  	Group: {
  		type: 'string',
      size: 100
  	},
  	test: {
  		model: 'testcase',
  		columnName: 'TestcaseId',
      size: 50
  	}
  }
};

