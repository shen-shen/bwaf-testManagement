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

  getLastBuildByRelease : function(release,cb) {
    Build.find({release: release}).sort({id: 'DESC'}).exec(function(err, results){
      if(err) console.log(err);
      else if(results.length === 0) {
        cb([]);
      }
      else {
        cb(results[0]);
      }
    });
  }





  // getStatus: function(id, cb) {
  //   var status = {
  //     passed : 0,
  //     failed: 0,
  //     skipped: 0,
  //     unknown: 0
  //   };

  // }
};

