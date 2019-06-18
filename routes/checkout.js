var express = require('express');
var router = express.Router();

var checkout_controller = require('../controllers/checkoutControll');

router.get('/', checkout_controller.checkout_detail);
router.post('/', checkout_controller.checkout_post);

module.exports = router;