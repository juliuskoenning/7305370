import React from 'react';
import { useParams } from 'react-router-dom'
//import ForumContent from '../components/ForumContent.jsx';

/*const ForumPage = () => {
  return (
    <>
      <main>
        <ForumContent />
      </main>
    </>
  );
}; */

function ForumPage() {
  let { username } = useParams();
  return (
    <div>
      This is the forum page of {username}
    </div>
  )
}

export default ForumPage;