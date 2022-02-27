// Matrikelnummer: 7305370
import React from 'react';
import Content from './Content';

const ForumContent = ({ contents, onDelete }) => {
  return (
    <div>
      {contents.map((content) => (
        <Content key={content.id} content={content} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ForumContent;