import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Notification = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [allRequestes, setAllRequestes] = useState([]);
  const [sentRequestes, setSentRequestes] = useState([]);
  const [following, setFollowing] = useState([]);
  const [follows, setFollows] = useState([]);
  const navigate = useNavigate();
  const fetchAllUsers = async () => {
    try {
      await axios.get(`/all-users`).then((data) => {
        setAllUsers(data.data);
      });
    } catch (error) {
      console.log('error', error);
    }
  };
  useEffect(() => {
    fetchAllUsers();
    followRequests();
  }, [allUsers]);

  const followRequests = async () => {
    try {
      await fetch('http://localhost:8800/followRequests', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('jwt')
        }
      })
        .then((res) => res.json())
        .then((result) => {
          setAllRequestes(result[0].followRequests);
          setSentRequestes(result[0].sentFriendRequests);
          setFollowing(result[0].following);
          setFollows(result[0].followers);
        });
    } catch (error) {
      console.log('error', error);
    }
  };

  const follow = async (selectedUserId) => {
    try {
      await fetch('http://localhost:8800/follow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('jwt')
        },
        body: JSON.stringify({
          selectedUserId
        })
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          followRequests();
        });
    } catch (error) {
      console.log('error', error);
    }
  };

  const withdrawlfollow = async (selectedUserId) => {
    try {
      await fetch('http://localhost:8800/withdrawlfollow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('jwt')
        },
        body: JSON.stringify({
          selectedUserId
        })
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          followRequests();
        });
    } catch (error) {
      console.log('error', error);
    }
  };

  const acceptReq = async (selectedUserId) => {
    try {
      await fetch('http://localhost:8800/acceptReq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('jwt')
        },
        body: JSON.stringify({
          selectedUserId
        })
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          followRequests();
        });
    } catch (error) {
      console.log('error', error);
    }
  };
  const denyReq = async (selectedUserId) => {
    try {
      await fetch('http://localhost:8800/denyReq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('jwt')
        },
        body: JSON.stringify({
          selectedUserId
        })
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          followRequests();
        });
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div
      style={{
        position: 'sticky',
        zIndex: 2000,
        backgroundColor: 'white',
        height: '100vh'
      }}
    >
      <div className="requests">
        <div
          className="top"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '15px 10px'
          }}
        >
          <span
            onClick={() => navigate(-1)}
            class="material-symbols-outlined"
            style={{ fontWeight: 300, fontSize: 34 }}
          >
            arrow_left_alt
          </span>
          <span style={{ fontSize: 20, fontWeight: 600, width: '70%' }}>
            Follow requests
          </span>
          <span style={{ fontSize: 16, fontWeight: 600 }}>Manage</span>
        </div>

        <div className="requests">
          {allRequestes.map((item) => (
            <div
              className="User"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: '7px 12px',
                padding: '5px 0px'
              }}
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
                  width: '40%',
                  margin: 10,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 7
                }}
              >
                <span style={{ fontSize: 16, fontWeight: 600 }}>
                  {item.name}
                </span>
                <p style={{ fontWeight: 400, fontSize: 13 }}>{item.username}</p>
              </div>
              <div className="notifi" style={{ width: '60%' }}>
                <span style={{ fontSize: 14 }}>Requested to follow you.</span>
              </div>
              <div className="follow" style={{ display: 'flex', gap: 5 }}>
                <button
                  style={{ padding: '8px 12px', fontWeight: 600 }}
                  onClick={() => {
                    acceptReq(item._id);
                  }}
                >
                  Confirm
                </button>
                <button
                  style={{
                    padding: '8px 12px',
                    fontWeight: 600,
                    color: '#100C08',
                    backgroundColor: '#e2e2e2'
                  }}
                  onClick={() => {
                    denyReq(item._id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="friends">
        <div
          className="top"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '15px 10px'
          }}
        >
          <span style={{ fontSize: 16, fontWeight: 600 }}>
            Suggested for you
          </span>
        </div>
        {allUsers.map((item) => (
          <div
            className="User"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: '7px 12px',
              padding: '5px 0px'
            }}
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
            <div className="follow">
              {sentRequestes.includes(item._id) ? (
                <button
                  style={{
                    padding: '8px 15px',
                    fontWeight: 600,
                    color: '#100C08',
                    backgroundColor: '#e2e2e2'
                  }}
                  onClick={() => {
                    withdrawlfollow(item._id);
                  }}
                >
                  Requested
                </button>
              ) : following.includes(item._id) ? (
                <button
                  style={{
                    padding: '8px 15px',
                    fontWeight: 600,
                    color: '#100C08',
                    backgroundColor: '#e2e2e2'
                  }}
                  onClick={() => {
                    withdrawlfollow(item._id);
                  }}
                >
                  Following
                </button>
              ) : follows.includes(item._id) ? (
                <button
                  style={{
                    padding: '8px 15px',
                    fontWeight: 600
                  }}
                  onClick={() => {
                    follow(item._id);
                  }}
                >
                  Follow Back
                </button>
              ) : (
                <button
                  style={{
                    padding: '8px 15px',
                    fontWeight: 600
                  }}
                  onClick={() => {
                    follow(item._id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
