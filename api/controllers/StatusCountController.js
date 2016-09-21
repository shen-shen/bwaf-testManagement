/**
 * StatusCountController
 *
 * @description :: Server-side logic for managing buildcounts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	// findAll: function (req,res) {
	// 	StatusCount.query('select BwBuild ,count(distinct RunId) count from Run group by BwBuild',function(err,result){
	// 	  if (err) return res.serverError(err);
	// 	  return res.send(result);
	// 	  });
	// }

	statusCount: function (req,res) {
		StatusCount.query('select status, count(*) as \'count\' from result,run where result.RunId = Run.RunID and Run.BwBuild = \'5.0.0.29\' group by status order by status DESC', function(err, result) {
		  if (err) return res.serverError(err);
		  return res.send(result);
		});
	}
};

