var express = require('express');
var router = express.Router();

var cart_controller = require('../controllers/cartControll');
router.get('/', cart_controller.cart_detail);
router.post('/', cart_controller.cart_delete);

module.exports = router;