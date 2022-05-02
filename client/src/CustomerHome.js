import React from 'react';
import './App.css';
import { useHistory } from "react-router-dom";
import background from '../src/222.jpg';


function CustomerHome() {
  const history = useHistory();
  // const [event, setEvent] = useState('');

  // const register = (e) => {
  //   setEvent(e.target.value);
  // }
  const handleFlight=()=>{
    history.push({
      pathname: '/flights',
      state: { userId: history.location.state.userId }
    })
  }

  const handleHotel=(e)=>{
    history.push({
      pathname: '/hotels',
      state: { userId: history.location.state.userId }
    })
  }

  return (
    <div className="home" >
      {/* style={{backgroundImage: `url(${background})`}} */}
      <div class="topnav">
        <a style={{color:'aliceblue',paddingTop:'14px',textDecoration:'underline',cursor:'pointer'}} onClick={handleFlight}>Book Flights</a>
        <a style={{color:'aliceblue',paddingTop:'14px',textDecoration:'underline',cursor:'pointer'}} onClick={handleHotel}>Book Hotel</a>
        {/* <a href="/flights" >Book Flights</a>
        <a href="/hotels">Book Hotels</a> */}
        <a href="/" style={{float:"right"}}>Logout</a>
      </div>
      <center  style={{paddingTop:'150px',}}><h4>Welcome to Travel Advisor</h4><br/>
          one stop solution hassless booking
          </center> 
          <div style={{paddingTop:'450px'}}></div>   
      </div>
  );
}

export default CustomerHome;