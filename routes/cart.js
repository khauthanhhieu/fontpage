var express = require('express');
var router = express.Router();

var cart_controller = require('../controllers/cartControll');
router.get('/', cart_controller.cart_detail);

module.exports = router;