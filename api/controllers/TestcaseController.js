module.exports = {

  list: function (req, res) {

	Testcase.query('SELECT * FROM Testcase', function(err, results) {
	  if (err) return res.serverError(err);
	  return res.send(results);
	});
}
};