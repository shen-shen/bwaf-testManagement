/**
 * BuildCountController
 *
 * @description :: Server-side logic for managing buildcounts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	findAll: function (req,res) {
		BuildCount.query('select BwBuild ,count(distinct RunId) count from Run group by BwBuild',function(err,result){
		  if (err) return res.serverError(err);
		  return res.send(result);
		  });
	}
};

