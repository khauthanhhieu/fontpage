var product = require('../models/products').Product();

var conn = require('./connection');

exports.loadPage = function (req, res, next) {
    var p = req.query.p;
	if (p == null)
        p = 1;

    var sql = "SELECT * FROM products WHERE isdelete=0 LIMIT 12 OFFSET " + (p-1)*12;
    conn.query(sql, function (err, products, fields) {
        if (err) throw err;
        var sql1 = "SELECT count(*) as value FROM products";
        conn.query(sql1, function (err, count, fields) {
            if (err) throw err;
            res.render('index', { title: 'Express', pList: products, nPage : (count[0].value - 1)/12 + 1 , iPage : p });
        });
        //res.end();
    });

}