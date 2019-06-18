var history = require('express');
var conn = require('./connection');

exports.history_detail = function(req, res) {
	var sql = 'SELECT * FROM orderdetails, orders, products, status WHERE orderdetails.order_id = orders.id AND orders.user_id = ? AND orderdetails.product_id = products.id AND orders.stt = status.idStt';
	var data = [global.id];
	conn.query(sql, data, (err, orders, fields)=>{
		if(err) throw err;
		console.log('day ne: ', orders);
		res.render('history', {title: 'Express', oList: orders });
	})
	
}