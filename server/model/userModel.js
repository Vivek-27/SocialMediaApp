const e = require('express');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  posts: {
    type: String
  },
  profile_img: {
    type: String,
    default:
      'https://res.cloudinary.com/customviv/image/upload/v1681490427/Default_pfp.svg_x2410o.png'
  },
  bio: {
    type: String,
    default: 'Add your bio here...'
  },
  username: {
    type: String,
    default: 'username'
  },
  sentFriendRequests: [{ type: ObjectId, ref: 'User' }],
  followRequests: [{ type: ObjectId, ref: 'User' }],
  followers: [{ type: ObjectId, ref: 'User' }],
  following: [{ type: ObjectId, ref: 'User' }]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
