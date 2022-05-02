import React, { useState } from 'react';
import {Link, useHistory } from "react-router-dom";
import axios from 'axios';

import './App.css';
// import Home from './Home';
// import CustomerHome from './CustomerHome';
// import FlightVendorHome from './FlightVendorHome';
// import HotelOwnerHome from './HotelOwnerHome';

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
      setData(res.data[0])
      const response = res.data
      if(!res.data[0]){
        alert('Invalid username/ password')
        setName('');
        setPassword('');
      }
      else if(res.data[0].type==="customer")
      history.push({
        pathname: '/customer',
        state: { userId: res.data[0].user_id }
      })
     // history.push("/customer")
      else if(res.data[0].type==="hotel_owner")
      history.push({
        pathname: '/hotelOwner',
        state: { userId: res.data[0].user_id }
      })
      //history.push("/hotelOwner")
      else if(res.data[0].type==="flight_vendor")
      history.push({
        pathname: '/flightVendor',
        state: { userId: res.data[0].user_id }
      })
      //history.push("/flightVendor")
    })
    .catch(error => console.log(error))
}
  
  return (
    <div className="login">
      <center>
      <h3> Login here</h3>
      
          <label >
           UserName:
          </label><br />
          <input type="text" value={name} required onChange={(e)=> { handleChange(e) }} /><br />
         
           <label>
            Password:
          </label><br />
          <input type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }} />
         <br/><br/> <input type="submit" value="Log in" onClick={handleSubmit} /><br/><br/><br/>
        <Link to="/signup" style={{ color:'black', fontSize:16}}> Don't hanve an account? sign up here</Link>
        {/* {data.length===4 &&
        data.type==="customer"?history.push({pathname:"/customer"}):(
          data.type==="hotel_owner"?history.push({pathname:"/hotelOwner"}):(data.type==="flight_vendor"?history.push({pathname:"/flightVendor"}):'')
        )
       } */}
       </center>
    </div>
  );
}

export default Login;

