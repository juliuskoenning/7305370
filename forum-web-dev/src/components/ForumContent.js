import React from 'react';
import { useLocation } from 'react-router-dom';

const ForumContent = () => {
  const location = useLocation();
  return (
    <div>
      This is the forum page of {location.state.nachname}
    </div>
  );
};

export default ForumContent;