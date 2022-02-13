import React from 'react';
import { useParams } from 'react-router-dom'

const ForumContent = () => {
    let { username } = useParams();
  return (
    <div>This is the forum page of {username}</div>
  );
};

export default ForumContent;