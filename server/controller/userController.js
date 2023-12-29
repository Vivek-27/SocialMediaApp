const mongoose = require('mongoose');
const User = mongoose.model('User');
const Post = mongoose.model('PostImage');

const getAllUsers = (req, res) => {
  User.find()
    .select('-password')
    .then((users) => {
      return res.status(200).json(users);
    });
};

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

const follow = async (req, res) => {
  const { selectedUserId } = req.body;

  try {
    //update the recepient's friendRequestsArray!
    await User.findByIdAndUpdate(selectedUserId, {
      $push: { followRequests: req.user._id }
    });

    //update the sender's sentFriendRequset Array
    await User.findByIdAndUpdate(req.user._id, {
      $push: { sentFriendRequests: selectedUserId }
    });

    res.status(200).json('Request Sent');
  } catch (error) {
    res.sendStatus(500);
  }
};

const withdrawlfollow = async (req, res) => {
  const { selectedUserId } = req.body;

  try {
    //update the recepient's friendRequestsArray!
    await User.findByIdAndUpdate(selectedUserId, {
      $pull: { followRequests: req.user._id }
    });

    //update the sender's sentFriendRequset Array
    await User.findByIdAndUpdate(req.user._id, {
      $pull: { sentFriendRequests: selectedUserId }
    });

    res.status(200).json('Request Sent Withdrawlled');
  } catch (error) {
    res.sendStatus(500);
  }
};

const followRequests = async (req, res) => {
  try {
    const requested = await User.find(req.user._id)
      .select('-password')
      .populate('followRequests', '_id name username profile_img');
    res.status(200).json(requested);
  } catch (error) {
    res.sendStatus(500);
  }
};

const acceptReq = async (req, res) => {
  const { selectedUserId } = req.body;

  try {
    await User.findByIdAndUpdate(selectedUserId, {
      $push: { following: req.user._id }
    });

    await User.findByIdAndUpdate(req.user._id, {
      $push: { followers: selectedUserId }
    });

    //update the recepient's friendRequestsArray!
    await User.findByIdAndUpdate(selectedUserId, {
      $pull: { sentFriendRequests: req.user._id }
    });

    //update the sender's sentFriendRequset Array
    await User.findByIdAndUpdate(req.user._id, {
      $pull: { followRequests: selectedUserId }
    });

    res.status(200).json('Request Accepted Successfully');
  } catch (error) {
    res.sendStatus(500);
  }
};

const denyReq = async (req, res) => {
  const { selectedUserId } = req.body;

  try {
    //update the recepient's friendRequestsArray!
    await User.findByIdAndUpdate(selectedUserId, {
      $pull: { sentFriendRequests: req.user._id }
    });

    //update the sender's sentFriendRequset Array
    await User.findByIdAndUpdate(req.user._id, {
      $pull: { followRequests: selectedUserId }
    });

    res.status(200).json('Request Accepted Successfully');
  } catch (error) {
    res.sendStatus(500);
  }
};

const Friends = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate(
      'following',
      '_id name username profile_img'
    );

    const Friends = user.following;
    res.json(Friends);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getUser,
  updateProfile,
  follow,
  acceptReq,
  getAllUsers,
  followRequests,
  withdrawlfollow,
  denyReq,
  Friends
};
