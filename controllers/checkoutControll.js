var checkout = require('express');

var conn = require('./connection');


exports.checkout_detail = function(req, res) {

	var sql = 'SELECT * FROM cartdetails, products WHERE cartdetails.product_id = products.id AND cartdetails.user_id =?'

	var data = [global.id]
	conn.query(sql, data, (err, cartProducts1, fields)=>{
		if(err) throw err;
		res.render('checkout', {title: 'Express' , pList: cartProducts1});

	})
}