import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './header.css';
import chatIcon from './chat_svg.svg';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="Home">
      <div className="logo">
        <h1>Instagram</h1>
      </div>
      <div className="nav">
        <div className="notification">
          <FavoriteBorderIcon
            className="icon"
            onClick={() => navigate('/notification')}
          />
        </div>
        <div className="message">
          <img src={chatIcon} alt="" onClick={() => navigate('/chat')} />
        </div>
      </div>
    </div>
  );
};

export default Header;
