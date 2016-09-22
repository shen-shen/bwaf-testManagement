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
			  if (err) return console.log(err);
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
		this.getStatusByBuild('5.0.0.28',function(result){
			return res.send(result);
		});
	},

	getStatusByBuildAndProject: function(buildId,projectName,cb) {
		this.noModelQuery('select status, count(r.testcaseid) as \'count\' from result r inner join( select result.testcaseid as \'testcaseid\', max(daterun) as \'date\' from result,run,testcase,project where result.RunId = Run.RunID and testcase.testcaseid = result.testcaseid and project.projectid = run.projectid and project.name = \''+projectName+'\' and Run.BwBuild = \''+buildId+'\' group by result.testcaseid ) rr on r.testcaseid = rr.testcaseid and r.daterun = rr.date group by status',function(result){
			cb(result);
		});
	},

	getStatusByBuild: function(buildId,cb) {
		this.noModelQuery('select status, count(r.testcaseid) as \'count\' from result r inner join( select result.testcaseid as \'testcaseid\', max(daterun) as \'date\' from result,run,testcase,project where result.RunId = Run.RunID and testcase.testcaseid = result.testcaseid and project.projectid = run.projectid and Run.BwBuild = \''+buildId+'\' group by result.testcaseid ) rr on r.testcaseid = rr.testcaseid and r.daterun = rr.date group by status',function(result){
			cb(result);
		});
	}
};

