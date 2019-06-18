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

exports.addCart = function(req, res) {
	var idProduct = req.params.id;
	var idUser = global.id;

	if(idUser == 0) {
		console.log('chua dang nhap');
		res.render('login', {title: 'Express' });
		return;
	}

	
	var sql = 'SELECT * FROM cartdetails WHERE user_id =? AND product_id =?';
	var data = [idUser, idProduct];
	conn.query(sql, data, (err, cart, fields)=>{
		if (err) throw err;
		console.log('toi day')

		if(cart[0] == null) {
			var sql1 = 'INSERT INTO cartdetails (`user_id`, `product_id`, `number`) values ( ?, ?, 1)';
			var data1 = [idUser, idProduct];
			conn.query(sql1, data1, (err)=>{
				if (err) throw err;
				console.log('cap nhat thanh cong them');


			})
		}
		else {
			var sql2 = 'UPDATE cartdetails SET `number` =? WHERE idCart =?';
			console.log('so luong ne: ', cart[0].number)
			var data2 = [++cart[0].number, cart[0].idCart];
			conn.query(sql2, data2, (err)=>{
				if(err) throw err;
				console.log('cap nhat thanh cong sua');
			})
		}

		var id0 = req.params.id;
		var sql0 = 'SELECT * FROM products WHERE id = ' + id0;
		conn.query(sql0, function (err, product, fields) {
			if (err) throw err;
			res.render('product-details', { title: 'Express', pItem: product[0] });
		});
	})
}