/**
 * StatusCount.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  migrate: 'safe',
  attributes: {
    status: {
      type: 'string'
    },
  	count: {
  		type: 'integer'
  	}
  },

  getStatusCountByBuildId: function(id,cb){
    StatusCount.query('select status, count(*) as \'count\' from result,run where result.RunId = Run.RunID and Run.BwBuild = \''+id+'\' group by status order by status DESC', function(err, result) {
      if(err) console.log(err);
      else{
        cb(result);
      }
  });
  },

  //   getStatusCountByBuildId: function(id,cb){
  //   StatusCount.query('select status, count(*) as \'count\' from result,run where result.RunId = Run.RunID and Run.BwBuild = \''+id+'\' group by status order by status DESC', function(err, result) {
  //     if(err) console.log(err);
  //     else{
  //       cb(result);
  //     }
  // });
  // }
};

