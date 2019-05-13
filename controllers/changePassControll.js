var changePass = require('express');

exports.getPage = function(req, res) {
	res.render('change-pass', {title: 'Express' });
}

exports.postPage = function(req, res) {
	res.render('change-pass', {title: 'Express' });
}