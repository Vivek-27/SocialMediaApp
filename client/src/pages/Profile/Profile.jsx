import React, { useEffect, useState } from 'react';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import { IoLockClosedOutline } from 'react-icons/io5';
import './profile.css';
import createIcon from '../../components/Footer/more.png';
import gridIcon from './icons/frame-grid-icon.svg';
import tagIcon from './icons/instagram-tag-icon.svg';
import reelIcon from './icons/instagram-reels-icon.svg';
import closeIcon from '../../components/Footer/close_FILL0_wght400_GRAD0_opsz48.svg';
import UpdateProfile from './UpdateProfile/UpdateProfile';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card/Card';

const Profile = () => {
  const userLocal = localStorage.getItem('user');
  const user = JSON.parse(userLocal);
  const posts = useSelector((state) => state.user.post);
  const [editProfile, setEditProfile] = useState(false);
  const [setting, setSetting] = useState(0);
  const navigate = useNavigate();

  const [post, setPost] = useState();

  const handleClick = (item) => {
    setPost(item);
  };

  const Posts = () => {
    return (
      <div className="Post">
        {posts.map((item) => (
          <img
            onClick={() => handleClick(item)}
            src={item.post_img}
            alt={item.id}
            id={item.id}
          />
        ))}
      </div>
    );
  };
  const Header = () => {
    return (
      <>
        {setting ? (
          <>
            <div className="settings">
              <div className="top">
                <button onClick={() => setSetting(0)}>Back</button>
                <button
                  onClick={() => {
                    localStorage.clear();
                    navigate('/');
                    window.location.reload();
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          </>
        ) : (
          ''
        )}
        <div className="header">
          <p>
            <IoLockClosedOutline className="icon" /> {user.username}
            <ArrowBackIosNewRoundedIcon className="arrow" />
          </p>
          <div className="nav">
            <img src={createIcon} alt="" />
            <div className="hamburger" onClick={() => setSetting((v) => !v)}>
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
      {post ? (
        <div className="card_explore">
          <div className="back">
            <span
              className="material-symbols-outlined iconBack"
              onClick={() => setPost(null)}
            >
              arrow_back
            </span>
            <h3>Explore</h3>
          </div>
          <Card props={post} />
        </div>
      ) : (
        ''
      )}
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
              {user ? (
                <img src={user.profile_img} alt="" className="profile_img" />
              ) : (
                <img src={''} alt="" className="profile_img" />
              )}
            </div>

            <div className="info">
              <h2>
                {posts ? posts.length : '0'} <p>Posts</p>
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
