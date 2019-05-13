var express = require('express');
var router = express.Router();

var code_controller = require('../controllers/codeControll');
var password_controller = require('../controllers/changePassControll');

router.get('/code', code_controller.getPage);
router.post('/code', code_controller.postPage);
router.get('/password', password_controller.getPage);
router.post('/password', password_controller.postPage);

module.exports = router;