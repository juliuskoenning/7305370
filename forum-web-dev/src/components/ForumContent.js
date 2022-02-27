import React from 'react';
import Task from './Task';

const ForumContent = ({ tasks, onDelete }) => {
  return (
    <div>

      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ForumContent;