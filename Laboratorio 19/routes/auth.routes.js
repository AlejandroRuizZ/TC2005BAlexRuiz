const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller');
const isAuth = require('../controllers/is-auth.js');

router.get('/login', usersController.get_login);

router.post('/login', usersController.login);

router.get('/logout', isAuth, usersController.logout);

router.get('/signup', usersController.get_signup);

router.post('/signup', usersController.post_signup);


module.exports = router;