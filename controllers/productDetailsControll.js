var product = require('../models/products').Product();

var conn = require('./connection');

exports.loadPage = function (req, res, next) {
	var id = req.params.id;
	var sql = 'SELECT * FROM products WHERE id = ' + id;
	conn.query(sql, function (err, product, fields) {
		if (err) throw err;
		res.render('product-details', { title: 'Express', pItem: product[0] });
	});
}