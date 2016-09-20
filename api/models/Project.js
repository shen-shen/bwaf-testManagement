/**
 * Project.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoPK        : false,
  autoCreatedAt : false,
  autoUpdatedAt : false,
	schema: true,
	connection: 'sqlserver',
	tableName: 'Project',
  migrate: 'safe',
  attributes: {
  	ProjectID: {
  		type: 'integer',
  		primaryKey: true
  	},
  	Name: {
  		type: 'string',
      size: 40
  	},
  	Channel: {
  		type: 'string',
      size: 30
  	},
    runs: {
      collection: 'run',
      via: 'project'
    },
    report: {
      model: 'report'
    }
  },

  getProjects: function(cb) {
    Project.find().exec(function(err, res) {
        cb(res);
    });
  }
};

