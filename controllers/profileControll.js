var profile = require('express');

exports.profile_detail = function(req, res) {
	res.render('profile', {title: 'Express' });
}