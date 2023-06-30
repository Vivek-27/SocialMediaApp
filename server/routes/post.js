const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const requireLogin = require('../middleware/requireLogin.js');
const {
  createPost,
  allPost,
  like,
  unlike
} = require('../controller/postController.js');

router.post('/create_post', requireLogin, createPost);
router.get('/all_posts', allPost);
router.put('/like', requireLogin, like);
router.put('/unlike', requireLogin, unlike);

module.exports = router;
