import React, { useState } from 'react';
import './Login.css';
import facebookIcon from './icons/facebook-svgrepo-com.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const Login = () => {
  const [page, setPage] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const Signin = () => {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert('Invert email');
      return;
    }

    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          localStorage.setItem('jwt', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));
          dispatch({ type: 'LOGIN_USER', payload: data.user });
          dispatch({ type: 'AUTHORIZATION', payload: true });
          navigate('/');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Signup = () => {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert('Invert email');
      return;
    }

    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        username,
        password
      })
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {page ? (
        <div className="Login">
          <div className="wrapper">
            <h1>Instagram</h1>
            <div className="form">
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Phone number, username or email"
              />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <div className="save_info">
                <input type="checkbox" className="checkbox" />
                <span>Save login info</span>
              </div>
              <button onClick={() => Signin()}>Log In</button>
            </div>

            <div className="or">
              <hr />
              <span>OR</span>
              <hr />
            </div>
            <div className="facebook_login">
              <span>
                <img src={facebookIcon} alt="" /> Log in with Facebook
              </span>
              <a href="">Forgotten your password?</a>
            </div>
          </div>
          <div className="wrapper2">
            <div className="signup">
              <span
                onClick={() => {
                  setPage((v) => !v);
                  setEmail('');
                  setPassword('');
                }}
              >
                Don't have an account? <a>Sign Up.</a>
              </span>
            </div>
          </div>

          <p>Get the app</p>

          <div className="wrapperapp">
            <img
              alt="Get it on Google Play"
              className="_aa5q play"
              src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
            />
            <img
              alt="Get it from Microsoft"
              className="_aa5q microsoft"
              src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
            />
          </div>
          <div className="wrapperBtm">
            <span>
              Meta About Blog Jobs Help API Privacy Terms Top accounts Locations
              Instagram Lite Contact uploading and non-users Meta Verified
            </span>
            <p>English (UK) © 2023 Instagram from Meta</p>
          </div>
        </div>
      ) : (
        <div className="Login">
          <div className="wrapper">
            <h1>Instagram</h1>

            <div className="facebook_login ">
              <span className="fblogin">
                <img src={facebookIcon} alt="" /> Log in with Facebook
              </span>
            </div>
            <div className="or">
              <hr />
              <span>OR</span>
              <hr />
            </div>
            <div className="form signup">
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  console.log(e.target.value);
                  setEmail(e.target.value);
                }}
                placeholder="Mobile number or email address"
              />
              <input
                value={name}
                onChange={(e) => {
                  console.log(e.target.value);
                  setName(e.target.value);
                }}
                type="text"
                placeholder="Full Name"
              />
              <input
                value={username}
                onChange={(e) => {
                  console.log(e.target.value);
                  setUsername(e.target.value);
                }}
                type="text"
                placeholder="Username"
              />
              <input
                value={password}
                onChange={(e) => {
                  console.log(e.target.value);
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="Password"
              />
              <div className="term">
                <span>
                  People who use our service may have uploaded your contact
                  information to Instagram. <a href=""> Learn more</a>
                </span>
                <span>
                  By signing up, you agree to our <a href="">Terms</a>,{' '}
                  <a href="">Privacy Policy</a> and{' '}
                  <a href="">Cookies Policy</a>.
                </span>
              </div>
              <button className="btn_signup" onClick={() => Signup()}>
                Sign Up
              </button>
            </div>
          </div>
          <div className="wrapper2">
            <div className="signup">
              <span
                onClick={() => {
                  setPage((v) => !v);
                  setEmail('');
                  setPassword('');
                  setUsername('');
                  setName('');
                }}
              >
                Have an account? <a>Log in</a>
              </span>
            </div>
          </div>

          <p>Get the app</p>

          <div className="wrapperapp">
            <img
              alt="Get it on Google Play"
              className="_aa5q play"
              src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
            />
            <img
              alt="Get it from Microsoft"
              className="_aa5q microsoft"
              src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
            />
          </div>
          <div className="wrapperBtm">
            <span>
              Meta About Blog Jobs Help API Privacy Terms Top accounts Locations
              Instagram Lite Contact uploading and non-users Meta Verified
            </span>
            <p>English (UK) © 2023 Instagram from Meta</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
