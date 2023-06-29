const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;
const postSchema = new mongoose.Schema(
  {
    desc: {
      type: String,
      required: true
    },
    post_img: {
      type: String
    },
    type: {
      type: String,
      default: 'image'
    },
    likes: [{ type: ObjectId, ref: 'User' }],
    comments: [
      {
        text: String,
        postedBy: { type: ObjectId, ref: 'User' }
      }
    ],
    postedBy: {
      type: ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
);

const PostImage = mongoose.model('PostImage', postSchema);
module.exports = PostImage;
