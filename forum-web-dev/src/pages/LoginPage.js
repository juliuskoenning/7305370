import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function LoginPage() {
  let navigate = useNavigate();
  let { username } = useParams();
  return (
    <div>
      This is the login page
      <button 
        onClick={() =>{
        navigate('/forum')}}> 
        Login to forum 
      </button>
    </div>
  );
}

export default LoginPage