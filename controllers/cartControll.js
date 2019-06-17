var cart = require('express');

var conn = require('./connection');

exports.cart_detail = function(req, res) {
	var sql = 'SELECT * FROM cartdetails, products WHERE cartdetails.product_id = products.id AND cartdetails.user_id =?'

	var data = [global.id]
	conn.query(sql, data, (err, cartProducts1, fields)=>{
		if(err) throw err;
		res.render('cart', {title: 'Express', pList: cartProducts1});

	})
}

