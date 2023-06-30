const mongoose = require('mongoose');
const express = require('express');
const {
  getUser,
  updateProfilePic,
  updateBio,
  updateName,
  updateUserName,
  updateProfile,
  followUser,
  unFollowUser
} = require('../controller/userController');
const requireLogin = require('../middleware/requireLogin.js');
const router = express.Router();

router.get('/user/:id', getUser);
router.put('/update_Profile', requireLogin, updateProfile);
router.put('/follow', requireLogin, followUser);
router.put('/unfollow', requireLogin, unFollowUser);

module.exports = router;
