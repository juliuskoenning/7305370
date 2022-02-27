import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import ErrorPage from './pages/ErrorPage.js';
import ForumPage from './pages/ForumPage.js';
import LoginPage from './pages/LoginPage.js';

function App() {

  const [tasks, setTasks] = useState([

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
  }
  var nachname = ''
  var email = ''
  return (
    <div className='container'>

    <Router>
      <nav>
        <Link to='/' className='nav'> Login </Link>
        <Link to={`/forum/${nachname}`}
                    state= {{nachname:nachname, email:email}}
                    > Forum </Link>
      </nav>
      <header className='header'>
        <h1>Projekt-Forum</h1>
      </header>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/forum' element={<React.Fragment><ForumPage addTask={addTask} deleteTask={deleteTask} tasks={tasks}/></React.Fragment>} />
        <Route path='/forum/:nachname' element={<React.Fragment><ForumPage addTask={addTask} deleteTask={deleteTask} tasks={tasks}/></React.Fragment>} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;