import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginContent = () => {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = '/forum/:username'; 
        navigate(path);
  }
    return (
    <div>
        <button onClick={routeChange}>Einloggen</button>
    </div>
  );
};

export default LoginContent;