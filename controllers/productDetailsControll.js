var product = require('../models/products').Product();

var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'shopdb',
});

exports.loadPage = function(req, res, next){
    conn.connect(function (err) {
        if (err)
            throw err.stack;
        console.log('ket noi thanh cong');
		var id = req.params.id;
		var sql = 'SELECT * FROM products WHERE id = ' + id;
        conn.query(sql, function (err, product, fields) {
			if (err) throw err;
            res.render('product-details', {title: 'Express' , pItem: product[0]});
        });
    });
}