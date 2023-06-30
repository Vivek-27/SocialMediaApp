const mongoose = require('mongoose');
const PostImage = mongoose.model('PostImage');

const createPost = async (req, res) => {
  const { desc, post_img } = req.body;
  if (!desc || !post_img) {
    return res.status(422).json({ error: 'Please add all the fields' });
  }
  req.user.password = undefined;
  const postImage = new PostImage({
    desc,
    post_img,
    postedBy: req.user
  });

  postImage
    .save()
    .then((result) => {
      res.json({ post: result });
    })
    .catch((err) => {
      res.status(422).json({ error: 'Error while uploading the post' + err });
    });
};

const allPost = async (req, res) => {
  await PostImage.find()
    .populate('postedBy')
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => console.log(err));
};

const like = async (req, res) => {
  PostImage.findByIdAndUpdate(
    req.body.post_id,
    {
      $push: { likes: req.user.id }
    },
    {
      new: true
    }
  )
    .populate('likes', '_id name')
    .then((result) => {
      res.json({ post: result });
    })
    .catch((err) => console.log(err));
};

const unlike = async (req, res) => {
  PostImage.findByIdAndUpdate(
    req.body.post_id,

    {
      $pull: { likes: req.user._id }
    },
    {
      new: true
    }
  )
    .then((result) => {
      res.json({ post: result });
    })
    .catch((err) => console.log(err));
};

module.exports = { createPost, allPost, like, unlike };
