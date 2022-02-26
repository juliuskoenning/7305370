import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Task from './Task'

const ForumContent = ({ tasks, onDelete }) => {
  let { nachname, vorname, email } = useParams();
  return (
    <div>

      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ForumContent;