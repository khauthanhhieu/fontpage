var contactUs = require('express');

exports.contactUs_detail = function(req, res) {
	res.render('contact-us', {title: 'Express' });
}