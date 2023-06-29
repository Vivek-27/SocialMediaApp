import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Stories from '../../components/Stories/Stories';
// import data from '../../api';
import InfiniteScroll from 'react-infinite-scroll-component';

import Card from '../../components/Card/Card';
import { useDispatch } from 'react-redux';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const userLocal = localStorage.getItem('user');
  const user = JSON.parse(userLocal);
  const dispatch = useDispatch();
  useEffect(() => {
    const allPosts = async () => {
      fetch('/all_posts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((res) => res.json())
        .then((data) => {
          setPosts(data.posts);
        })
        .catch((err) => console.log(err));
    };
    allPosts();

    const det = async () => {
      try {
        const response = await fetch(`/user/${user._id}`);
        const res = await response.json();
        localStorage.setItem('user', JSON.stringify(res.user));
        dispatch({ type: 'UPDATE_USER', payload: res });
      } catch (error) {
        console.log(error);
      }
    };
    det();
  }, []);

  return (
    <>
      <Header />
      <Stories />
      {/* {posts.toReversed().map((item) => (
        <Card props={item} />
      ))} */}

      <InfiniteScroll
        dataLength={2}
        next={0}
        hasMore={true}
        loader={<p>Loading...</p>}
        endMessage={<p>No more data to load.</p>}
      >
        {posts.toReversed().map((item) => (
          <Card props={item} />
        ))}
      </InfiniteScroll>
    </>
  );
};

export default Home;
