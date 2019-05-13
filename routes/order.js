var express = require('express');
var router = express.Router();

var order_controller = require('../controllers/historyControll');

router.get('/', order_controller.history_detail);

module.exports = router;