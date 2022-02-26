import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import ErrorPage from './pages/ErrorPage.js';
import ForumPage from './pages/ForumPage.js';
import LoginPage from './pages/LoginPage.js';

function App() {
  return (
    <div className='container'>

    <Router>
      <nav>
        <Link to='/'> Login </Link>
        <Link to='/forum'> Forum </Link>
      </nav>
      <header className='header'>
        <h1>Projekt Forum</h1>
      </header>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/forum' element={<ForumPage />} />
        <Route path='/forum/:nachname' element={<ForumPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;