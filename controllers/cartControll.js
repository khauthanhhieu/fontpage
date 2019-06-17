var cart = require('express');

var conn = require('./connection');

//===========>
exports.cart_detail = function(req, res) {
	var sql = 'SELECT * FROM cartdetails, products WHERE cartdetails.product_id = products.id AND cartdetails.user_id =?'

	var data = [global.id]
	conn.query(sql, data, (err, cartProducts1, fields)=>{
		if(err) throw err;
		console.log('plist: ', cartProducts1)
		res.render('cart', {title: 'Express', pList: cartProducts1});

	})
}
//==========>

exports.cart_delete = function(req, res) {
	var sql = 'DELETE FROM cartdetails WHERE idCart=?';
	var data = [req.body.txtId, global.id];
	console.log('data ne: ', req.body.txtId)
	conn.query(sql, data,(err)=>{
		if(err) throw err;
		console.log('xoa thanh cong');

		var sql1 = 'SELECT * FROM cartdetails, products WHERE cartdetails.product_id = products.id AND cartdetails.user_id =?'

		var data1 = [global.id]
		conn.query(sql1, data1, (err, cartProducts1, fields)=>{
			if(err) throw err;
			res.render('cart', {title: 'Express', pList: cartProducts1});

		})
	})
}
