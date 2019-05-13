var history = require('express');

exports.history_detail = function(req, res) {
	res.render('history', {title: 'Express' });
}