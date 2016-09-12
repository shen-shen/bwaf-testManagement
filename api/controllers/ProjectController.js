/**
 * ProjectController
 *
 * @description :: Server-side logic for managing Projects
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
// list: function (req, res) {

//     Project.query('SELECT * FROM Project'), function(err, results) {
//     if (err) {
//         res.send(400);
//     } else {
//         res.send(results);
//     }
// 	}
// }

count: function(req,res)
{
	Project.query('SELECT * FROM Project', function(err, results) {
	  if (err) return res.serverError(err);
	  return res.send(results);
	});
}
};

