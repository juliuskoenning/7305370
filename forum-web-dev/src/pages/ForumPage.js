// Matrikelnummer: 7305370
import React from 'react';
import AddContent from '../components/AddContent';
import ForumContent from '../components/ForumContent';

const ForumPage = ({ addContent,deleteContent,contents }) => {
  return (
    <div>
        <AddContent onAdd={addContent}/>
        {contents.length > 0 ? <ForumContent contents={contents} onDelete=
        {deleteContent} />: 'Kein Inhalt vorhanden.'}
    </div>
  );
};

export default ForumPage;