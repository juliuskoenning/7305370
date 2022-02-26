import { useState } from 'react'
import React from 'react';
import ForumContent from '../components/ForumContent';
import AddTask from '../components/AddTask';

const ForumPage = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Inhalt 1',
      day: 'Koenning',
      reminder: true,
    },
    {
      id: 2,
      text: 'Inhalt 2',
      day: 'Mustermann',
      reminder: true,
      }
  ])

  // Content hinzufügen
  const addTask = (task) => {
    console.log(task);
  }

  // Content löschen
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id 
    !== id))
  }

  return (
    <div>
        <AddTask onAdd={addTask}/>
        {tasks.length > 0 ? <ForumContent tasks={tasks} onDelete=
        {deleteTask} />: 'No Content to Show'}
    </div>
  );
};

export default ForumPage;