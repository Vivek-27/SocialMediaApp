const mongoose = require('mongoose');
const User = mongoose.model('User');
const Post = mongoose.model('PostImage');

const getUser = (req, res) => {
  User.findOne({ _id: req.params.id })
    .select('-password')
    .then((user) => {
      Post.find({ postedBy: req.params.id })
        .populate('postedBy', '_id name username profile_img')
        .then((post) => {
          return res.json({ user, post });
        });
    });
};

const updateProfile = (req, res) => {
  User.findByIdAndUpdate(
    req.user._id,
    { $set: { profile_img: req.body.profile_img } },
    { new: true }
  ).then((result) => {
    User.findByIdAndUpdate(
      req.user._id,
      { $set: { username: req.body.username } },
      { new: true }
    ).then((result2) => {
      User.findByIdAndUpdate(
        req.user._id,
        { $set: { name: req.body.name } },
        { new: true }
      ).then((result3) => {
        User.findByIdAndUpdate(
          req.user._id,
          { $set: { bio: req.body.bio } },
          { new: true }
        ).then((result4) => {
          User.findOne({ username: req.body.username }).then((user) => {
            if (user) {
              if (!result4.username === user) {
                res.json({ message: 'username already exist' });
              } else {
                res.json(user);
              }
            }
          });
        });
      });
    });
  });
};

const followUser = () => {
  User.findById(
    req.body.followUserId,
    {
      $push: { following: req.body.followUserId }
    },
    {
      new: true
    }
  )
    .select('-password')
    .populate('followers', '_id name')
    .populate('following', '_id name')
    .then((result) => {
      //   console.log(result);
      res.json(result);
      if (!result) {
        return res.status(422).json({ error: err });
      }
    });

  User.findByIdAndUpdate(
    req.user._id,
    {
      $push: { following: req.body.followId }
    },
    {
      new: true
    }
  )
    .select('-password')
    .populate('followers', '_id name')
    .populate('following', '_id name')
    .then((result) => {
      //   console.log(result);
      //   res.json(result);
      if (!result) {
        return res.status(422).json({ error: err });
      }
    });
};

const unFollowUser = () => {
  User.findById(
    req.body.followUserId,
    {
      $pull: { following: req.body.followUserId }
    },
    {
      new: true
    }
  )
    .select('-password')
    .populate('followers', '_id name')
    .populate('following', '_id name')
    .then((result) => {
      //   console.log(result);
      res.json(result);
      if (!result) {
        return res.status(422).json({ error: err });
      }
    });

  User.findByIdAndUpdate(
    req.user._id,
    {
      $pull: { following: req.body.followId }
    },
    {
      new: true
    }
  )
    .select('-password')
    .populate('followers', '_id name')
    .populate('following', '_id name')
    .then((result) => {
      //   console.log(result);
      //   res.json(result);
      if (!result) {
        return res.status(422).json({ error: err });
      }
    });
};

module.exports = {
  getUser,
  updateProfile,
  followUser,
  unFollowUser
};
