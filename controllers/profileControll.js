var profile = require('express');
var conn = require('./connection');

exports.profile_detail = function(req, res) {
	if(global.id == 0)
		res.render('profile', {title: 'Express' });
	else {
		var sql = "SELECT * FROM users WHERE isdelete=0 AND id=?";
		var data = [global.id];

		conn.query(sql, data, (err, users, fields) =>{
			if(err) throw err;
			res.render('profileLogin', {title: 'Express', cItem: users[0]})

		})
	}
}