var login = require('express');
var md5 = require('md5');

var conn = require('./connection');

exports.login_detail = function(req, res) {
	res.render('login', {title: 'Express' });
}

exports.login = function(req, res) {
	console.log(req.body.txtUserNameLogin, req.body.txtPasswordLogin);
	console.log('md5: ', md5(req.body.txtPasswordLogin));
	console.log('bien toan cuc: ', global.id);
	var sql = 'SELECT * FROM users WHERE isdelete=0 AND username=? AND password=?'
	var data = [req.body.txtUserNameLogin, md5(req.body.txtPasswordLogin)];

	conn.query(sql, data, (err,users, fields)=>{
		if(err) throw err;
		if(users[0] == null) {
			console.log('tai khoan khong ton tai');
			
			res.render('login', {title: 'Express'})
		}
		else {
			var id = users[0].id;
			global.id = id;
			console.log('tai khoan ne: ', users[0]);
			res.render('profileLogin', {title: 'Express', cItem: users[0]});

		}
	})

}

