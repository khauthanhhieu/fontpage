var login = require('express');

exports.login_detail = function(req, res) {
	res.render('login', {title: 'Express' });
}