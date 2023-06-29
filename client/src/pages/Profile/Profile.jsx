import React, { useEffect, useState } from 'react';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import { IoLockClosedOutline } from 'react-icons/io5';
import './profile.css';
import createIcon from './icons/6537820.png';
import gridIcon from './icons/frame-grid-icon.svg';
import tagIcon from './icons/instagram-tag-icon.svg';
import reelIcon from './icons/instagram-reels-icon.svg';
import closeIcon from '../../components/Footer/close_FILL0_wght400_GRAD0_opsz48.svg';
import UpdateProfile from './UpdateProfile/UpdateProfile';
import { useSelector } from 'react-redux';

const Profile = () => {
  const userLocal = localStorage.getItem('user');
  const user = JSON.parse(userLocal);
  const posts = useSelector((state) => state.user.post);
  const [editProfile, setEditProfile] = useState(false);

  const Posts = () => {
    return (
      <div className="Post">
        {posts.map((item) => (
          <img src={item.post_img} alt={item.id} id={item.id} />
        ))}
      </div>
    );
  };
  const Header = () => {
    return (
      <>
        <div className="header">
          <p>
            <IoLockClosedOutline className="icon" /> {user.username}
            <ArrowBackIosNewRoundedIcon className="arrow" />
          </p>
          <div className="nav">
            <img src={createIcon} alt="" />
            <div className="hamburger">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="Profile">
        {editProfile ? (
          <>
            <div className="close">
              <img
                src={closeIcon}
                onClick={() => {
                  setEditProfile(false);
                }}
                alt="close"
              />
            </div>

            <UpdateProfile />
          </>
        ) : (
          ''
        )}
        <Header />
        <div className="profile">
          <div className="top">
            <div className="div">
              <img src={user.profile_img} alt="" className="profile_img" />
            </div>

            <div className="info">
              <h2>
                {posts.length} <p>Posts</p>
              </h2>
              <h2>
                {user.followers.length} <p>Followers</p>
              </h2>
              <h2>
                {user.following.length} <p>Following</p>
              </h2>
            </div>
          </div>

          <div className="pro_details">
            {user ? (
              <>
                <h3>{user.name}</h3>
                <p>{user.bio} </p>
              </>
            ) : (
              <>
                {' '}
                <h3>{'user.name'}</h3>
                <p>{'user.bio'} </p>
              </>
            )}
          </div>
          <div className="edit">
            <button onClick={() => setEditProfile(true)}>Edit profile</button>
            <button>Share profile</button>
            <PersonAddRoundedIcon className="icon" />
          </div>

          <div className="postNav">
            <div className="Navbtn">
              <div className="posts">
                <img src={gridIcon} alt="" />
              </div>
              <div className="reels">
                <img src={reelIcon} alt="" />
              </div>
              <div className="tag">
                <img src={tagIcon} alt="" />
              </div>
            </div>
            <div className="view">{posts ? <Posts /> : ''}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
