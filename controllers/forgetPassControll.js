var forgetPass = require('express');

exports.forgetPass_detail = function(req, res) {
	var error = "";
	if(req.query.error && req.query.error != "") {
		error = req.query.error;
	}
	res.render('forget-pass', {title: 'Express', error: error });
}