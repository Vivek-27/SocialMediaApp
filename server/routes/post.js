const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const requireLogin = require('../middleware/requireLogin.js');
const { createPost, allPost } = require('../controller/postController.js');

router.post('/create_post', requireLogin, createPost);
router.get('/all_posts', allPost);
module.exports = router;
