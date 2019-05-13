var editProfile = require('express');

exports.editProfile_detail = function(req, res) {
	res.render('edit_profile', {title: 'Express' });
}