var express = require('express');
var router = express.Router();

var history_controller = require('../controllers/historyControll');

router.get('/', history_controller.history_detail);

module.exports = router;