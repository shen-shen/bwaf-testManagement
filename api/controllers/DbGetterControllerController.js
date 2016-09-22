/**
 * DbGetterControllerController
 *
 * @description :: Server-side logic for managing Dbgettercontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var mssql = require('sails-sqlserver/node_modules/mssql');


module.exports = {



	statusCount: function (req,res) {

		this.noModelQuery('select status, count(*) as \'count\' from result,run where result.RunId = Run.RunID and Run.BwBuild = \'5.0.0.29\' group by status order by status DESC',function(result){
			return res.send(result);
		});
	},

	noModelQuery: function(query, cb) {
		var connection = new mssql.Connection({
		    server     : sails.config.connections.sqlserver.host,
		    user     : sails.config.connections.sqlserver.user,
		    password : sails.config.connections.sqlserver.password,
		    database:  sails.config.connections.sqlserver.database,
		    port:  sails.config.connections.sqlserver.port
		},function (err) {
			if (err) throw err;
			new mssql.Request(connection).query(query, function(err, result) {
			  if (err) return res.serverError(err);
			  return cb(result);
			});
		});
	},

	aggregates: function(req,res) {
		/*response data should be like
		{
			Releases status count (pass, fail, skipped, notRun)

			Last build status count (pass, fail, skipped, notRun)
	
		}


		*/
	}
};

