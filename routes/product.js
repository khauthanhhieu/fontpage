var express = require('express');
var router = express.Router();

var product_controller = require('../controllers/productDetailsControll');
router.get('/:id', product_controller.loadPage);

module.exports = router;