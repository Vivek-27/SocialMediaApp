import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Stories from '../../components/Stories/Stories';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import Card from '../../components/Card/Card';
import { useDispatch } from 'react-redux';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const userLocal = localStorage.getItem('user');
  const user = JSON.parse(userLocal);
  const dispatch = useDispatch();

  const allPosts = async () => {
    await axios('/all_posts')
      .then((data) => {
        setPosts(data.data.posts);
      })
      .catch((err) => console.log(err));
  };

  const det = async () => {
    try {
      await axios.get(`/user/${user._id}`).then((data) => {
        localStorage.setItem('user', JSON.stringify(data.data.user));
        dispatch({ type: 'UPDATE_USER', payload: data.data.user });
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      allPosts();
      det();
    }
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
