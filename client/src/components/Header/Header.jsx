import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './header.css';
import chatIcon from './chat_svg.svg';
const Header = () => {
  return (
    <div className="Home">
      <div className="logo">
        <h1>Instagram</h1>
      </div>
      <div className="nav">
        <div className="notification">
          <FavoriteBorderIcon className="icon" />
        </div>
        <div className="message">
          <img src={chatIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
