var signup = require('express');
var md5 = require('md5');

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
			var sql1 = 'INSERT INTO users (username, email, password, fullname, birthday, address, tel, isdelete) VALUES (?,?,?,?,?,?,?,?)';
			var data1 = [req.body.txtUserNameSignup, req.body.txtEmailSignup, md5(req.body.txtPasswordSignup1), req.body.txtFullnameSignup, null, req.body.txtAddressSignup, req.body.txtUserPhoneSignup, 0];
			console.log(req.body.txtPasswordSignup1, ' day ne: ')
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