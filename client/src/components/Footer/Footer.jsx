import React, { useEffect, useState } from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import reelsIcon from './reels.png';
import reelsIconFilled from './icons8-instagram-reels.svg';
import Upload from '../../pages/Upload/Upload';
import closeIcon from './close_FILL0_wght400_GRAD0_opsz48.svg';
import more from './more.png';
import more2 from './addition.png';
const Footer = () => {
  const userInfo = localStorage.getItem('user');
  const user = JSON.parse(userInfo);
  const [home, setHome] = useState(0);
  const [explore, setExplore] = useState(0);
  const [upload, setUpload] = useState(0);
  const [reel, setReel] = useState(reelsIcon);
  const [profile, setProfile] = useState(0);
  const [createPost, setCreatePost] = useState(false);

  return (
    <div id="footer" style={{ width: 'inherit' }}>
      {createPost ? (
        <div className="close">
          <img
            src={closeIcon}
            onClick={() => {
              setCreatePost(false);
              setUpload(0);
            }}
            alt="close"
          />
        </div>
      ) : (
        ''
      )}
      {createPost ? <Upload /> : ''}
      <div className="Footer">
        <div className="home">
          <Link
            to={'/'}
            onClick={() => {
              setCreatePost(false);
              setHome(1);
              setExplore(0);
              setUpload(0);
              setReel(reelsIcon);
              setProfile(0);
            }}
          >
            <span
              style={{
                fontVariationSettings: `'FILL' ${home}`
              }}
              class="material-symbols-rounded"
            >
              home
            </span>
          </Link>
        </div>
        <div className="explore">
          <Link
            to={'/explore'}
            onClick={() => {
              setCreatePost(false);
              setHome(0);
              setExplore(1);
              setUpload(0);
              setReel(reelsIcon);
              setProfile(0);
            }}
          >
            <span
              style={{
                fontVariationSettings: `'FILL' ${explore}`
              }}
              class="material-symbols-rounded"
            >
              search
            </span>
          </Link>
        </div>
        <div className="upload">
          <Link
            onClick={() => {
              setCreatePost((v) => !v);

              setUpload((v) => !v);
            }}
          >
            {!upload ? (
              <img src={more} alt="" className="icon" />
            ) : (
              <img src={more2} alt="" className="icon" />
            )}
          </Link>
        </div>
        <div className="reels">
          <Link
            to={'/reels'}
            onClick={() => {
              setCreatePost(false);
              setHome(0);
              setExplore(0);
              setUpload(0);
              setProfile(0);
              setReel(reelsIconFilled);
            }}
          >
            <img src={reel} alt="reels" className="icon" />
          </Link>
        </div>
        <div className="profile">
          <Link
            to={'/profile'}
            onClick={() => {
              setCreatePost(false);
              setHome(0);
              setExplore(0);
              setUpload(0);
              setReel(reelsIcon);
              setProfile(1);
            }}
          >
            <img src={user?.profile_img} alt="" />
          </Link>
        </div>
      </div>{' '}
    </div>
  );
};

export default Footer;
