var editProfile = require('express');

var conn = require('./connection');

exports.editProfile_detail = function(req, res) {
	if(global.id == 0) {
		console.log('chua dang nhap');
		res.render('profile', {title: 'Express'});
		return;
	}
	var sql = 'SELECT * FROM users WHERE id =?';
	var data = [global.id];

	conn.query(sql, data, (err, user, fields)=>{
		if(err) throw err;
		res.render('edit_profile', {title: 'Express' , uItem: user[0]});

	})

}

exports.editProfile_post = function(req, res) {
	var sql = 'UPDATE users SET fullname=?, email=?, address=? WHERE id=?';
	var data = [req.body.txtTen, req.body.txtEmail, req.body.txtDiachi, global.id];
	conn.query(sql, data, (err)=>{
		if(err) throw err;
		var sql1 = 'SELECT * FROM users WHERE id =?';
		var data1 = [global.id];

		conn.query(sql1, data1, (err, user, fields)=>{
			if(err) throw err;
			res.render('edit_profile', {title: 'Express' , uItem: user[0]});

		})
	})
}