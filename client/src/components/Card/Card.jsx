import React, { useEffect, useState } from 'react';
import './card.css';
import commentIcon from './icons/comment.png';
import shareIcon from './icons/send.png';
import heartIcon from './icons/heart.png';
import heartIconRed from './icons/heart_red.png';
import saveIcon from './icons/bookmark.png';
const Card = (props) => {
  const user = localStorage.getItem('user');
  const userId = JSON.parse(user);
  const [liked, setLiked] = useState(0);

  useEffect(() => {
    props.props.likes.map((item) => {
      if (item === userId._id) {
        return setLiked(1);
      }
    });
  }, []);

  const like = async () => {
    await fetch('https://instagram-pjtu.onrender.com/like', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('jwt')
      },
      body: JSON.stringify({
        post_id: props.props._id
      })
    })
      .then((res) => {
        res.json();
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  const unlike = async () => {
    await fetch('https://instagram-pjtu.onrender.com/unlike', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('jwt')
      },
      body: JSON.stringify({
        post_id: props.props._id
      })
    })
      .then((res) => res.json())
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  return (
    <div className="Card">
      <div className="top">
        <div className="left">
          <div className="profile_img">
            <img
              src={props.props.postedBy.profile_img}
              alt=""
              className="profile_pic"
            />
          </div>
          <div className="profile_name">
            <p>{props.props.postedBy.name}</p>
            <span>{props.props.postedBy.username}</span>
          </div>
        </div>
        <div className="right">
          <span class="material-symbols-rounded icon">more_vert</span>
        </div>
      </div>
      <div className="post_img">
        <img src={props.props.post_img} alt="" />
      </div>
      <div className="middle">
        <div className="lcs">
          {!liked ? (
            <img
              style={{ cursor: 'pointer' }}
              src={heartIcon}
              alt=""
              onClick={() => {
                like();
                setLiked(1);
              }}
            />
          ) : (
            <img
              style={{ cursor: 'pointer' }}
              src={heartIconRed}
              alt=""
              onClick={() => {
                unlike();
                setLiked(0);
              }}
            />
          )}
          <img style={{ cursor: 'pointer' }} src={commentIcon} alt="" />
          <img style={{ cursor: 'pointer' }} src={shareIcon} alt="" />
        </div>
        <div className="save">
          <img src={saveIcon} alt="" />
        </div>
      </div>
      <div className="likedby">{props.props.likes.length + liked} likes</div>
      <div className="bottom">
        <div className="desc">
          <span>{props.props.postedBy.name}</span>
          <span className="description">{props.props.desc}</span>
        </div>
      </div>
      <div className="comment">
        <div className="viewcomment">
          View all {props.props.comments.length} comments
        </div>
        <div className="yourComment">
          <div className="com">
            <img src={props.props.postedBy.profile_img} alt="" />
            <input type="text " placeholder="Add a comment..." />
          </div>
          <div className="ico">
            <p>❤️ 🙌 ⊕</p>
          </div>
        </div>
      </div>
      <div className="time">
        <p>3 weeks ago</p>
      </div>
    </div>
  );
};

export default Card;
