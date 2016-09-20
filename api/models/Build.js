/**
 * Build.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  		name: 'string',
  		release: {
  			model: 'Release'
  		},
  		reports: {
  			collection: 'report',
  			via: 'build'
  		}
      // runs: {
      //   collection: 'run',
      //   via: 'build'
      // }
  },

  getReportsByBuild: function(id, cb) {
    Report.find({build: id}).exec(function(err, result){
      if(err) console.log(err);
      else {
        cb(result);
      }
    });
    // body...
  },



  getStatus: function(id, cb) {
    var status = {
      passed : 0,
      failed: 0,
      skipped: 0,
      unknown: 0
    };

  }
};

