const mongoose = require('mongoose');
const express = require('express');
const { Login, SignUp, Test } = require('../controller/authController.js');
const router = express.Router();

router.post('/login', Login);
router.post('/signup', SignUp);

module.exports = router;
