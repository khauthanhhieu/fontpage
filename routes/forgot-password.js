var express = require('express');
var router = express.Router();

var forgot_controller = require('../controllers/forgetPassControll');

//router.get('/reset_password', forgot_controller.post_pass);
router.get('/reset_password', forgot_controller.get_email);
router.post('/', forgot_controller.post_email);
module.exports = router;