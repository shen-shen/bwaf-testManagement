/**
 * RunController
 *
 * @description :: Server-side logic for managing Runs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
// 	list: function (req, res) {

// 	Run.query('SELECT * FROM Run', function(err, results) {
// 	  if (err) return res.serverError(err);
// 	  return res.send(results);
// 	});
// };

// count: function(req,res){
// Run.count(function (err, num) {
//     if(err) {
//        return console.log(err);
//     }
//     res.send(num);
// });
// }

processBuildCount: function(req,res){
	var runs = Run.findAll()
}

};

