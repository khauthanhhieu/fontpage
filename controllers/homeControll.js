var product = require('../models/products').Product();

var conn = require('./connection');

exports.loadPage = function (req, res, next) {
    var sql = "SELECT * FROM products";
    conn.query(sql, function (err, products, fields) {
        if (err) throw err;
        res.render('index', { title: 'Express', pList: products });
        //res.end();
    });

}