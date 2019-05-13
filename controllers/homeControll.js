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
    
        var sql = "SELECT * FROM products";
        conn.query(sql, function (err, products, fields) {
            if (err) throw err;
            res.render('index', {title: 'Express' , pList: products});
        });
    });
}

exports.home_detail = function(req, res) {
    //exports.getProduct();
	res.render('index', {title: 'Express' });
}