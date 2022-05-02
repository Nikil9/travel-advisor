import React, { useState } from 'react';
import './App.css';
import Select from 'react-select';
import { Link } from "react-router-dom";


function App() {
  // const [name, setName] = useState('');
  // const [age, setPhone] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // //const [confPassword, setConfPassword] = useState('');
  // const [selectedOption, setSelectedOption] = useState(null);

  // const data = [
  //   {
  //     value: 1,
  //     label: "student"
  //   },
  //   {
  //     value: 2,
  //     label: "admin"
  //   },]


  // // function to update state of name with
  // // value enter by user in form
  // const handleChange = (e) => {
  //   setName(e.target.value);
  // }
  // const handleTypeChange = e => {
  //   setSelectedOption(e);
  // }
  // // function to update state of age with value
  // // enter by user in form
  // const handlePhoneChange = (e) => {
  //   setPhone(e.target.value);
  // }
  // // function to update state of email with value
  // // enter by user in form
  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // }
  // // function to update state of password with
  // // value enter by user in form
  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // }
  
  // return (
  //   <div className="App">
  //     <Link to="/" style={{position:'fixed',fontSize:16, right:10,color:'white'}}>Login</Link>
  //     <header className="App-header">  
  //       <form onSubmit={(e) => { handleSubmit(e) }}>
  //         <h2> Fest Portal</h2>
  //         <h6> Sign-up for the fests near you</h6>
  //           Name:
  //         <input type="text" value={name} required onChange={(e)=> { handleChange(e) }} /><br />
  //           Email:
  //         <input type="email" value={email} required onChange={(e) => { handleEmailChange(e) }} /><br />
  //         Password:
  //         <input type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }} /><br />
  //         {/* Confirm Password:<br />
  //         <input type="password" value={confPassword} required onChange={(e) => { handleConfPasswordChange(e) }} /><br /> */}
  //         Phone:
  //         <input type="text" value={age} required onChange={(e) => { handlePhoneChange(e) }} /><br />
  //         Type:
  //         <div style={{paddingLeft:'20px', width:'max-content',height:'100px',}}>
  //         <Select
  //         required="true"
  //         placeholder="Select Type"
  //         value={selectedOption} 
  //         options={data} 
  //         onChange={handleTypeChange} 
  //         /> </div>
  //         <input type="submit" value="Submit" />
  //         <br/>  
  //       </form>
  //     </header>
  //   </div>
  // );
}
export default App;