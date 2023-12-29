const mongoose = require('mongoose');
const express = require('express');
const {
  getUser,
  updateProfilePic,
  updateBio,
  updateName,
  updateUserName,
  updateProfile,
  withdrawlfollow,
  follow,
  getAllUsers,
  followRequests,
  acceptReq,
  denyReq,
  Friends
} = require('../controller/userController');
const requireLogin = require('../middleware/requireLogin.js');
const router = express.Router();

router.get('/user/:id', getUser);
router.put('/update_Profile', requireLogin, updateProfile);
router.post('/follow', requireLogin, follow);
router.post('/withdrawlfollow', requireLogin, withdrawlfollow);
router.post('/acceptReq', requireLogin, acceptReq);
router.post('/denyReq', requireLogin, denyReq);
router.get('/followRequests', requireLogin, followRequests);
router.get('/all-users', getAllUsers);
router.get('/friends', requireLogin, Friends);

module.exports = router;
