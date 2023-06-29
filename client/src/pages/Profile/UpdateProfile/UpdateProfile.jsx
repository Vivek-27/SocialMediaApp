import React, { useRef, useState } from 'react';
import './update.css';
const UpdateProfile = () => {
  const userLocal = localStorage.getItem('user');
  const user = JSON.parse(userLocal);
  const [name, setName] = useState(user.name);
  const [username, setUserName] = useState(user.username);
  const [bio, setBio] = useState(user.bio);
  const profileImgRef = useRef();
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);

  const selectFile = () => {
    profileImgRef.current.click();
  };

  const updateProfile = async () => {
    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'instagram_profile_img');
    await fetch('https://api.Cloudinary.com/v1_1/dtj1lqyry/image/upload/', {
      method: 'POST',
      body: formData
    })
      .then((res) => res.json())
      .then((data) => {
        fetch('https://instagram-pjtu.onrender.com/update_Profile', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('jwt')
          },
          body: JSON.stringify({
            name,
            username,
            bio,
            profile_img: data.url
          })
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            setLoading(false);
          })
          .catch((err) => console.log(err));
      });
  };
  return (
    <>
      <div className="UpdateProfile">
        <h3 className="top_text">Edit profile</h3>
        <div className="done">
          <span
            class="material-symbols-outlined icon"
            onClick={() => {
              updateProfile();
            }}
          >
            done
          </span>
        </div>
        {file ? (
          <img
            onClick={() => selectFile()}
            src={URL.createObjectURL(file)}
            alt=""
            className="profile_img"
          />
        ) : (
          <img
            onClick={() => selectFile()}
            src={user.profile_img}
            alt=""
            className="profile_img"
          />
        )}

        <span onClick={() => selectFile()} className="edit_text">
          Edit picture or avatar
        </span>
        <input
          ref={profileImgRef}
          type="file"
          accept=".jpg, .png"
          style={{ display: 'none' }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <div className="loading">
          {loading ? <span className="loader"></span> : ''}
        </div>
        <div className="wrapper">
          <div className="inputDiv">
            <span>Name</span>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="inputDiv">
            <span>Username</span>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="inputDiv">
            <input
              type="text"
              placeholder="Bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
          <p className="wspan">Add link</p>
          <p>
            <a href="">Switch to professional account</a>
          </p>
          <p style={{ borderBottom: '1px solid rgba(128, 128, 128, 0.532)' }}>
            <a href="">Personal information setting</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
