import React, { useEffect, useRef, useState } from 'react';
import './upload.css';
import background from './icons/background.png';
import data from '../../api';
import { useNavigate } from 'react-router-dom';
const Upload = () => {
  const selectfileRef = useRef();
  const [file, setFile] = useState(null);
  const [image, setImage] = useState();
  const [next, setNext] = useState(false);
  const [desc, setDesc] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const selectFile = () => {
    selectfileRef.current.click();
  };
  const postFile = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'instagram_Post');
    await fetch('https://api.Cloudinary.com/v1_1/dtj1lqyry/image/upload/', {
      method: 'POST',
      body: formData
    })
      .then((res) => res.json())
      .then((data) => {
        fetch('/create_post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('jwt')
          },
          body: JSON.stringify({
            post_img: data.url,
            desc: desc
          })
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(data.url);
            console.log(desc);
            setLoading(false);
            window.location.reload();
            console.log(result);
          });
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  }, [file]);
  return (
    <div className="Upload">
      {loading ? <span className="loader"></span> : ''}
      <div className="container">
        {!file ? (
          <>
            <div className="wrapper">
              <div className="top">
                <h3>Create new post</h3>
              </div>
              <div className="hero">
                <img src={background} alt="" />
                <p>Drag photos and videos here</p>
                <input
                  type="file"
                  accept=".mp4, .mkv, .jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                  ref={selectfileRef}
                  style={{ display: 'none' }}
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                />
                <button onClick={() => selectFile()}>
                  Select from computer
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            {' '}
            {!next ? (
              <>
                <div className="wrapper">
                  <div className="top">
                    <span
                      onClick={() => setFile()}
                      class="material-symbols-outlined"
                    >
                      arrow_back
                    </span>
                    <h3>Crop</h3>
                    <button className="next" onClick={() => setNext(true)}>
                      Next
                    </button>
                  </div>
                  <div className="hero2">
                    <img src={image} alt="post_img" />
                  </div>
                </div>
              </>
            ) : (
              <>
                {' '}
                <div className="wrapper">
                  <div className="top">
                    <span
                      onClick={() => setFile()}
                      class="material-symbols-outlined"
                    >
                      arrow_back
                    </span>
                    <h3>Create new post</h3>
                    <button className="next" onClick={() => postFile()}>
                      Share
                    </button>
                  </div>
                  <div className="hero2">
                    <div className="left">
                      <div className="profile_img">
                        <img src={data[0].url} alt="" className="profile_pic" />
                      </div>
                      <div className="profile_name">
                        <span>{data[0].username}</span>
                      </div>
                    </div>
                    <textarea
                      placeholder="Write a caption"
                      name=""
                      value={desc}
                      onChange={(e) => {
                        setDesc(e.target.value);
                      }}
                      id="textarea"
                      cols="32"
                      rows="7"
                    ></textarea>
                    <div className="add_location">
                      <input type="text" placeholder="Add loaction" />
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Upload;
