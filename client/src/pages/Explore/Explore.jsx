import React from 'react';
import './explore.css';
import data from '../../api';

const Explore = () => {
  return (
    <div className="Explore">
      <div className="top">
        <input type="search" placeholder="Search" />
      </div>
      <div className="exp">
        {data.map((item) => (
          <img src={item.url} alt={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
