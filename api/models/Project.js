/**
 * Project.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	// schema: true,
	// connection: 'sqlserver',
	// tableName: 'Project',
  attributes: {
  	ProjectID: {
  		type: 'integer',
  		primaryKey: true
  	}
  	// Name: {
  	// 	type: 'string'
  	// },
  	// Channel: {
  	// 	type: 'string'
  	// }
  }
};
