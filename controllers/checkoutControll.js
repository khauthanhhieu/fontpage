var checkout = require('express');

exports.checkout_detail = function(req, res) {
	res.render('checkout', {title: 'Express' });
}