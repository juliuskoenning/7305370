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

/*const LoginContent = () => {
    const [realname, setInput1] = useState(''); // '' is the initial state value
    const [vorname, setInput2] = useState(''); // '' is the initial state value
    const [email, setInput3] = useState(''); // '' is the initial state value
*/
    // Navigate to forum with username
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `/forum/${inputs.nachname}`;
        navigate(path, {state:{vorname:inputs.vorname,nachname:inputs.nachname, email:inputs.email}});
  }/*
    return (
    <div>
        <label>Email:</label>
        <input value={email} onInput={event1 => setInput3(event1.target.value)}/>
        <label>Vorname:</label>
        <input value={vorname} onInput={event2 => setInput2(event2.target.value)}/>
        <label>Name:</label>
        <input value={realname} onInput={event3 => setInput1(event3.target.value)}/>
        <button onClick={routeChange}>Einloggen</button>
        {vorname} {realname} {email}
    </div>
  );
};*/
    return (
      <form onSubmit={handleSubmit}>
        <label>Vorname:
        <input
          type="text"
          name="vorname"
          value={inputs.vorname || ""}
          onChange={handleChange}
        />
        </label>
        <label>Nachname:
          <input
            type="text"
            name="nachname"
            value={inputs.nachname || ""}
            onChange={handleChange}
          />
          </label>
          <label>Email:
          <input
            type="text"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
          </label>
          <button onClick={()=>routeChange()}>Login</button>
      </form>
    )
}

export default LoginContent;

