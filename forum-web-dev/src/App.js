import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage.js';
import ForumPage from './pages/ForumPage.js';
import ErrorPage from './pages/ErrorPage.js';

function App() {
  return (
    <Router>
      <nav> 
        <Link to='/'> Login </Link>
        <Link to='/forum'> Forum </Link>
      </nav>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/forum/' element={<ForumPage />} /> 
        <Route path='/forum/:username' element={<ForumPage />} /> 
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;