import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginContent = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

    // Navigate to forum with username
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `/forum/${inputs.nachname}`;
        navigate(path, {state:{vorname:inputs.vorname,nachname:inputs.nachname, email:inputs.email}});
  }
    return (
      <div>


      <form onSubmit={handleSubmit}>
        Vorname:
        <br></br>
        <label>
        <input
          type="text"
          name="vorname"
          value={inputs.vorname || ""}
          onChange={handleChange}
        />
        </label>
        <br></br>
        Nachname:
        <br></br>
        <label>
          <input
            type="text"
            name="nachname"
            value={inputs.nachname || ""}
            onChange={handleChange}
          />

          </label>
          <br></br>
          Email:
          <br></br>
          <label>
          <input
            type="text"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
          </label>
          <br></br>
          <button className='btn' onClick={()=>routeChange()}>Login</button>
      </form>
      </div>
    )
}

export default LoginContent;

