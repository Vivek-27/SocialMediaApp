import React from 'react';
import { useParams } from 'react-router-dom';

const MessageScreen = () => {
  const param = useParams();
  console.log(param._id);
  return <div>Open</div>;
};

export default MessageScreen;
