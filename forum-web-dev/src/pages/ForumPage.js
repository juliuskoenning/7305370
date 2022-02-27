import React from 'react';
import AddTask from '../components/AddTask';
import ForumContent from '../components/ForumContent';

const ForumPage = ({ addTask,deleteTask,tasks }) => {
  
  /*const [tasks, setTasks] = useState([

  ])

  // Content hinzufügen
  const addTask = (task) => {
    const id = Math.floor(Math.random()
     * 10000) +1
    //const day = location.state.name
    const newTask = { id, ...task }

    setTasks([...tasks, newTask])

    console.log(id)
  }

  // Content löschen
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id
    !== id))
  }*/

  return (
    <div>
        <AddTask onAdd={addTask}/>
        {tasks.length > 0 ? <ForumContent tasks={tasks} onDelete=
        {deleteTask} />: 'Kein Inhalt vorhanden.'}
    </div>
  );
};

export default ForumPage;