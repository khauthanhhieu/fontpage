var mysql = require('mysql');

var conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'shopdb',
});

conn.connect(function (err) {
	if (err)
		throw err.stack;
	console.log('ket noi thanh cong');
});

module.exports = conn;