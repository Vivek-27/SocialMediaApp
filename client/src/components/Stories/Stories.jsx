import React, { useState } from 'react';
import data from '../../api';
import './stories.css';
import { useSelector } from 'react-redux';

const Stories = () => {
  const userInfo = useSelector((state) => state.user.user);
  const [myStorie, setMyStorie] = useState('');
  const Storie = (props) => {
    return (
      <div className="st">
        <div className="storie">
          <img src={props.props} alt="profile_pic" />
        </div>
        <span>usernamelkhkjhlksjlkjlk</span>
      </div>
    );
  };
  return (
    <div className="Stories">
      <div className="myStorie">
        {myStorie ? (
          <div className="st">
            <div className="storie">
              <img src={userInfo.profile_img} alt="profile_pic" />
            </div>
            <span>Your story</span>
          </div>
        ) : (
          <>
            <div className="add">
              <div className="profile_pic">
                <img src={userInfo.profile_img} alt="profile_pic" />
              </div>
              <div className="badge">+</div>
            </div>
            <span>Your story</span>
          </>
        )}
      </div>
      <div className="othersStories">
        {data.map((item) => (
          <Storie props={item.url} id={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Stories;
