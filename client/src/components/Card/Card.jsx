import React from 'react';
import './card.css';
import commentIcon from './icons//instagram-comment-13416.svg';
import shareIcon from './icons/instagram-share-13423.svg';
import heartIcon from './icons/heart-3511.svg';
import saveIcon from './icons/bookmark-ribbon-7787.svg';
const Card = (props) => {
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
          <img src={heartIcon} alt="" />
          <img src={commentIcon} alt="" />
          <img src={shareIcon} alt="" />
        </div>
        <div className="save">
          <img src={saveIcon} alt="" />
        </div>
      </div>
      <div className="likedby">{props.props.likes.length} likes</div>
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
