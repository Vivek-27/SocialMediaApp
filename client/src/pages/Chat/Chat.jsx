import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MessageScreen from './MessageScreen';

const Chat = () => {
  const userLocal = localStorage.getItem('user');
  const user = JSON.parse(userLocal);
  const navigate = useNavigate();
  const [allUsers, setAllUsers] = useState([]);

  const friends = async () => {
    try {
      await fetch('http://localhost:8800/friends', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('jwt')
        }
      })
        .then((res) => res.json())
        .then((result) => {
          setAllUsers(result);
          console.log(result);
        });
    } catch (error) {
      console.log('error', error);
    }
  };
  useEffect(() => {
    friends();
  }, []);

  const userMessage = (item) => {
    return (
      <div
        className="User"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '5px 10px',
          padding: '5px 10px',
          borderBottom: '1px solid #f3f3f3',
          cursor: 'pointer'
        }}
        onClick={() => navigate(`/message-screen/${item._id}`)}
      >
        <div className="user_image">
          <img
            src={item.profile_img}
            alt=""
            style={{
              width: 60,
              height: 60,
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          />
        </div>
        <div
          className="name"
          style={{
            width: '80%',
            margin: 10,
            display: 'flex',
            flexDirection: 'column',
            gap: 7
          }}
        >
          <span style={{ fontSize: 16, fontWeight: 600 }}>{item.name}</span>
          <p style={{ fontWeight: 400, fontSize: 13 }}>{item.username}</p>
        </div>
        <div className="camera_icon">
          <span
            class="material-symbols-outlined"
            style={{ fontSize: 30, fontWeight: 300, color: 'gray' }}
          >
            photo_camera
          </span>
        </div>
      </div>
    );
  };
  return (
    <div
      className="chat_screen"
      style={{
        position: 'sticky',
        zIndex: 2000,
        backgroundColor: 'white',
        height: '100vh'
      }}
    >
      <div
        className="top"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 5px'
        }}
      >
        <div className="back_btn">
          <span
            onClick={() => navigate(-1)}
            class="material-symbols-outlined"
            style={{ fontWeight: 300, fontSize: 34 }}
          >
            arrow_left_alt
          </span>
        </div>
        <div className="username" style={{ display: 'flex', width: '40%' }}>
          <span style={{ fontSize: 20, fontWeight: 700 }}>{user.name}</span>
          <span
            class="material-symbols-outlined"
            style={{ fontWeight: 300, fontSize: 26 }}
          >
            keyboard_arrow_down
          </span>{' '}
        </div>
        <div
          className="right"
          style={{ display: 'flex', gap: 10, alignItems: 'center' }}
        >
          <div className="video_call">
            <span
              class="material-symbols-outlined"
              style={{ fontWeight: 300, fontSize: 32 }}
            >
              video_call
            </span>
          </div>
          <div className="edit">
            <span
              class="material-symbols-outlined"
              style={{ fontWeight: 300, fontSize: 28 }}
            >
              edit_square
            </span>
          </div>
        </div>
      </div>
      <div
        className="search"
        style={{
          backgroundColor: '#f4f4f4',
          height: 40,
          borderRadius: 12,
          margin: '0 10px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div className="search_icon">
          <span
            class="material-symbols-outlined"
            style={{
              fontSize: 22,
              fontWeight: 400,
              color: 'gray',
              margin: '5px 10px'
            }}
          >
            search
          </span>
        </div>
        <div className="input_search">
          <input
            type="text"
            placeholder="Search"
            style={{
              padding: '2px',
              fontSize: 16,
              fontWeight: 400,
              background: 'none',
              border: 'none',
              color: 'white'
            }}
          />
        </div>
      </div>

      <div className="messages">
        <div
          className="top"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '15px 10px',
            borderBottom: '1px solid #f3f3f3'
          }}
        >
          <span style={{ fontSize: 16, fontWeight: 500 }}>Messages</span>
          <span style={{ fontSize: 16, fontWeight: 500, color: '#00bbff' }}>
            Requests
          </span>
        </div>
        {allUsers.map((item) => userMessage(item))}
      </div>
    </div>
  );
};

export default Chat;
