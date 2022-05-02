import React, { useState } from 'react';
import './App.css';
import Select from 'react-select';
import {Link, useHistory } from "react-router-dom";
import axios from 'axios';

//About Component
function Signup() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [Id, setId] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const data = [
    {
      value: 1,
      label: "customer"
    },
    {
      value: 2,
      label: "hotel_owner"
    },
    {
      value: 3,
      label: "flight_vendor"
    }]

    const handleNameChange = (e) => {
      setName(e.target.value);
    }
    const handleTypeChange = e => {
      setSelectedOption(e);
    }
    
    const handleIdChange = (e) => {
      setId(e.target.value);
    }

    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post("/signup", {
        user_id:Id,
        name: name,
        password: password,
        type: selectedOption.label
      })
        .then((res) => {
          alert(res.data)
          setId('')
          setName('')
          setPassword('')
          setSelectedOption(null)
          history.push("/")
        })
        .catch((err) => {
          console.log(err);
        });
    }

  return (
    <div className="app">
      <Link to="/" style={{position:'fixed',fontSize:16, right:10,color:'black'}}>Login</Link>
      <header >  
        <center>

          <h2> Travel Advisor</h2>
          <h6> Sign-up to continue booking</h6>
            Name:<br/>
          <input type="text" value={name} required onChange={(e)=> { handleNameChange(e) }} /><br />
           UserId:<br/>
          <input type="text" value={Id} required onChange={(e) => { handleIdChange(e) }} /><br />
          Password:<br/>
          <input type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }} /><br />
          Type:<br/>
          <div style={{paddingLeft:'0px', width:'max-content',height:'100px',}}>
          <Select
          required="true"
          placeholder="Select Type"
          value={selectedOption} 
          options={data} 
          onChange={handleTypeChange} 
          /> </div>
          <input type="submit" value="Sign up" onClick={handleSubmit} />
          <br/>  
      
        </center>
      </header>
    </div>
  );
}
export default Signup;