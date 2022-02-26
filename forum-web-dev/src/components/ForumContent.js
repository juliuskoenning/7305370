import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const ForumContent = () => {
  const location = useLocation();
  let { nachname } = useParams();
  return (
    <div>
      This is the forum page of {nachname}
    </div>
  );
};

export default ForumContent;