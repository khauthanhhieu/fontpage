var error = require('express');

exports.error_detail = function(req, res) {
	res.render('404', {title: 'Express' });
}