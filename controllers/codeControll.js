var recover = require('express');

exports.getPage = function(req, res) {
	res.render('recover', {title: 'Express' });
}

exports.postPage = function(req, res){
	if(req.body.email == "")
	{
		var error = 1;
		res.redirect('/users/forget-password?error=' + error);
		return;
	}
	//res.send(req.body.email);
	res.render('recover', {title: 'Express' });
}