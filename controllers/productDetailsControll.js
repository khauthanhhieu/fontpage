var productDetails = require('express');

exports.productDetails_detail = function(req, res) {
	res.render('product-details', {title: 'Express' });
}