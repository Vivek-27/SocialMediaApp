import React, { useState } from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import reelsIcon from './instagram-reels-icon.svg';
import reelsIconFilled from './icons8-instagram-reels.svg';
import Upload from '../../pages/Upload/Upload';
import closeIcon from './close_FILL0_wght400_GRAD0_opsz48.svg';
import { useSelector } from 'react-redux';
const Footer = () => {
  const userInfo = useSelector((state) => state.user.user);
  const [home, setHome] = useState(0);
  const [explore, setExplore] = useState(0);
  const [upload, setUpload] = useState(0);
  const [reel, setReel] = useState(reelsIcon);
  const [profile, setProfile] = useState(0);
  const [createPost, setCreatePost] = useState(false);
  return (
    <>
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

              setUpload(1);
            }}
          >
            <span
              style={{
                fontVariationSettings: `'FILL' ${upload}`
              }}
              class="material-symbols-rounded"
            >
              add_box
            </span>
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
            <img src={userInfo.profile_img} alt="" />
            {/* <span
              style={{
                fontVariationSettings: `'FILL' ${profile}`
              }}
              class="material-symbols-rounded"
            >
              account_circle
            </span> */}
          </Link>
        </div>
      </div>{' '}
    </>
  );
};

export default Footer;
