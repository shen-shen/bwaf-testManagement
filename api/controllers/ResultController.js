/**
 * ResultController
 *
 * @description :: Server-side logic for managing Results
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	getStatusCount: function(req,res) {
		Result.getGroupsWithCounts(function(result) {
			res.send(result);
		});
	}
};

