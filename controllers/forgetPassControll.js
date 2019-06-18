var forgetPass = require('express');
var conn = require('./connection');
const nodemailer = require("nodemailer");
var md5 = require('md5');



exports.forgetPass_detail = function(req, res) {
	var error = "";
	if(req.query.error && req.query.error != "") {
		error = req.query.error;
	}
	res.render('forget-pass', {title: 'Express', error: error });
}

exports.get_email = function (req, res) {
	res.render('forget-pass');
};
exports.post_email = function (req, res) {
	const email = req.body.email
	
	if(!email){
		console.log(email);
		res.render('forget-pass');
	}
	else{
	var sql = `SELECT * FROM users WHERE email = ?`;

	var data = [req.body.email];
	conn.query(sql, data, (err, results, fields) => {
		console.log(results[0].id);
		if (err) {
			return console.error(err.message);
		}
		else {
			var newPass = md5('123456');
			console.log(newPass);
			var sql = `UPDATE users SET password = ? WHERE id = ?`;

			var data = [newPass, results[0].id];
			conn.query(sql, data, (err, resetPassword, fields) => {
				if (err) {
					return console.error(err.message);
				}
				
			});
		}
		nodemailer.createTestAccount((err, account) => {
			// create reusable transporter object using the default SMTP transport
			let transporter = nodemailer.createTransport({
				host: 'smtp.ethereal.email',
				port: 587,
				secure: false, // true for 465, false for other ports
				
				auth: {
					user: account.user, // generated ethereal user
					pass: account.pass  // generated ethereal password
				}
			});
			console.log(results[0].username);
			let mailOptions = {
				from: '"Krunal Lathiya" <xx@gmail.com>', // sender address
				to: req.body.email, // list of receivers
				subject: 'Reset password', // Subject line
				text: 'We were reset your password', // plain text body
				html: '<b>UserName:</br>Password:123456</b>', // html body
				
			};
	
			transporter.sendMail(mailOptions, (error, info) => {
				if (error) {
					return console.log(error);
				}
				console.log('Message %s sent: %s', info.messageId, info.response);
				
				res.render('forget-pass');
			});
		});
		// let transporter = nodeMailer.createTransport({
		// 	host: 'smtp.gmail.com',
		// 	port: 465,
		// 	secure: true,
		// 	auth: {
		// 		user: 'thanhhieu021298@gmail.com',
		// 		pass: 'khauthanhhieu797'
		// 	}
		// });
		

	});
}
};
