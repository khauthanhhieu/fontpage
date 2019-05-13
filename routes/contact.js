var express = require('express');
var router = express.Router();

var contact_controller = require('../controllers/contactUsControll');

router.get('/', contact_controller.contactUs_detail);

module.exports = router;