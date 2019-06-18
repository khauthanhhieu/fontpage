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

exports.checkout_post = function(req, res) {
	var sql = 'SELECT * FROM cartdetails, products WHERE cartdetails.product_id = products.id AND cartdetails.user_id =?'
	var data = [global.id]
	conn.query(sql, data, (err, cartProducts1, fields)=>{
		if(err) throw err;
		checkout_postF(conn, cartProducts1).then(e=>{
			var sql1 = 'SELECT id FROM orders';
			conn.query(sql1, (err, id, fields)=>{
				if(err) throw err;
				var idMax;
				id.forEach(function(Max){
					idMax = Max;
				})
				console.log('maxid : ', idMax.id);
				updateOrderDetails(conn, cartProducts1, idMax.id).then(e=>{
					var sql1 = 'SELECT * FROM cartdetails, products WHERE cartdetails.product_id = products.id AND cartdetails.user_id =?'
					var data1 = [global.id]
					conn.query(sql1, data1, (err, cartProducts1, fields)=>{
						if(err) throw err;
						deleteProductCart(conn).then(e=>{
							res.render('checkout', {title: 'Express' , pList: cartProducts1});
						})

					})
				})
			})

			
		})

	})
}

function updateOrderDetails(conn, cartProducts1 ,Order_id){
	return new Promise((resolve, reject)=>{
		cartProducts1.forEach(function(cItem){
			var sql = 'INSERT INTO orderdetails (order_id, product_id, number, price) VALUES (?, ?, ?, ?)';
			var data = [Order_id, cItem.product_id, cItem.number, cItem.price];
			conn.query(sql, data, (err)=>{
				if(err) throw err;
				console.log('cap nhat orderdetails thanh cong');
			})
		})
		resolve();
	})
}

checkout_postF = function(conn, cartProducts1){
	return new Promise((resolve, reject)=>{
		var Total = 0;
		cartProducts1.forEach(function(cItem){
			Total += cItem.price*cItem.number;
		})
		var sql = 'INSERT INTO orders (user_id, total, date, stt) VALUES (?, ?, ?, ?)';
		var now = new Date();
		var date1 = date2str(now, 'yyyy/MM/dd');
		var userId = global.id;
		var data = [userId, Total, date1, 0];
		conn.query(sql, data, (err)=>{
			if(err) throw err;
			console.log('cap nhat orders thanh cong');
		})
		resolve();
	})
}

function deleteProductCart(conn){
	return new Promise((resolve, reject)=>{
		var sql = 'DELETE FROM cartdetails WHERE user_id = ?';
		var data = [global.id];
		conn.query(sql, data, (err)=>{
			if(err) throw err;
			console.log('xoa xong sp trong cart');
		})
		resolve();
	})
}

function date2str(x, y) {
    var z = {
        M: x.getMonth() + 1,
        d: x.getDate(),
        h: x.getHours(),
        m: x.getMinutes(),
        s: x.getSeconds()
    };
    y = y.replace(/(M+|d+|h+|m+|s+)/g, function(v) {
        return ((v.length > 1 ? "0" : "") + eval('z.' + v.slice(-1))).slice(-2)
    });

    return y.replace(/(y+)/g, function(v) {
        return x.getFullYear().toString().slice(-v.length)
    });
}