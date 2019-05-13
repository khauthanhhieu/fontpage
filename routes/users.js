var express = require('express');
var router = express.Router();

var login_controller = require('../controllers/loginControll');
var forget_controller = require('../controllers/forgetPassControll');
var profile_controller = require('../controllers/profileControll');
var edit_profile_controller = require('../controllers/editProfileControll');
var cart_controller = require('../controllers/cartControll');

router.get('/login', login_controller.login_detail);
router.get('/forget-password', forget_controller.forgetPass_detail);
router.get('/profile/:id', profile_controller.profile_detail);
router.get('/profile/:id/edit', edit_profile_controller.editProfile_detail);
router.get('/cart', cart_controller.cart_detail);

module.exports = router;