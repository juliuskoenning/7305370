import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import ErrorPage from './pages/ErrorPage.js';
import ForumPage from './pages/ForumPage.js';
import LoginPage from './pages/LoginPage.js';

function App() {
  return (
    <Router>
      <nav>
        <Link to='/'> Login </Link>
        <Link to={`/forum/`}> Forum </Link>
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