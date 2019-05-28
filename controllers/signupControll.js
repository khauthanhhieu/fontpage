var signup = require('express');

var conn = require('./connection')

exports.signup_detail = function(req, res) {
	res.render('signup', {title: 'Express'});
}

exports.signup = function(req, res) {
	var sql = 'SELECT * FROM users WHERE username=?';
	var data = [req.body.txtUserNameSignup];

	conn.query(sql, data, (err, users, fields) =>{
		if(err) throw err;
		if(users[0] != null) {
			console.log('Tên đăng nhập đã được sử dụng', users[0]);
			res.render('signup', {title: 'Express'});
		}
		else if(req.body.txtPasswordSignup1 != req.body.txtPasswordSignup2) {
			console.log('password khong trung khop!');
			res.render('signup', {title: 'Express'});
		}
		else {
			var sql1 = 'INSERT INTO users (username, email, password, fullname, tel, birthday, address, isdelete) VALUES (?,?,?,?,?,?,?,?)';
			var data1 = [req.body.txtUserNameSignup, req.body.txtEmailSignup, req.body.txtPasswordSignup1, req.body.txtFullnameSignup, req.body.txtUserPhoneSignup,null, req.body.txtAddressSignup, 0];
			conn.query(sql1, data1, (err, results, fields)=>{
				if(err) {
					return console.err(err.message);

				}
			});
			res.redirect('../');

			console.log('thanh cong!');
		}
	})

	console.log(req.body.txtUserNameSignup, req.body.txtEmailSignup, req.body.txtPasswordSignup1, req.body.txtPasswordSignup2);
}