import React, { useState, useEffect } from 'react';
import './explore.css';
import axios from 'axios';
import Card from '../../components/Card/Card';

const Explore = () => {
  const [posts, setPosts] = useState();
  const [post, setPost] = useState();

  const allPosts = () => {
    axios('https://instagram-pjtu.onrender.com/all_posts')
      .then((data) => {
        setPosts(data.data.posts);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    allPosts();
  }, []);

  const handleClick = (item) => {
    setPost(item);
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
      <div className="Explore">
        <div className="top">
          <input type="search" placeholder="Search" />
        </div>
        <div className="exp">
          {posts
            ? posts.map((item) => (
                <img
                  onClick={() => handleClick(item)}
                  src={item.post_img}
                  alt={item._id}
                />
              ))
            : ''}
        </div>
      </div>
    </>
  );
};

export default Explore;
