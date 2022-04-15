import React, { useState } from 'react';
import {Link, useHistory } from "react-router-dom";
import axios from 'axios';

import './App.css';
import Home from './Home';

function Login() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState('');


  const handleChange = (e) => {
    setName(e.target.value);
  }
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get('/api/validateLogin',{ params: {name:name, password:password } })
    .then(res => {
      setData(res.data)
    })
    .catch(error => console.log(error))
   //res.redirect("http://localhost:3000/home");
    // history.push({
    //   pathname:  "/home",
    // });
}
  
  return (
    <div className="login">
      <h3> Login here</h3>
      
          <label >
           UserName:
          </label><br />
          <input type="text" value={name} required onChange={(e)=> { handleChange(e) }} /><br />
         
           <label>
            Password:
          </label><br />
          <input type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }} />
         <br/><br/> <input type="submit" value="Submit" onClick={handleSubmit} /><br/>
        <Link to="/signup" style={{ color:'black', fontSize:16}}> Don't hanve an account? sign up here</Link>
   
    </div>
  );
}

export default Login;

