var shop = require('express');

exports.shop_detail = function(req, res) {
	res.render('shop', {title: 'Express' });
}