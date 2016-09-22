/**
 * Release.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt : false,
  autoUpdatedAt : false,  
  connection: 'sqlserver',
  tableName: 'BwRelease',
  migrate: 'alter',
  attributes: {
  	name: {
  		type:'string'
  	},
  	builds: {
  		collection: 'build',
  		via: 'release'
  	},
    reports: {
      collection: 'report',
      via:'release'
    }
  },

  getReleases: function(cb) {
    Release.find().exec(function(err, res) {
        cb(res);
    });
  }
};

