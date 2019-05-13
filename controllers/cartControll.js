var cart = require('express');

exports.cart_detail = function(req, res) {
	res.render('cart', {title: 'Express' });
}