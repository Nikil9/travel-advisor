import React, { useState,useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

//About Component
function HotelOwnerHome() {
  const history = useHistory();
  const [data, setData] = useState([{"hotel_id":"Nev123",
  "name":"Nevada Lounge",
"address":"1512 Nevada range, Nevada",
"city":"Nevada",
"description":"Amenities include: Swimming pool, 24*7 club, Gym, Games"}]);

  // useEffect(() => {
  //   axios.get("/getHotels")
  //     .then((res) => {
  //       setData(res.data)
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // },[])

  return (
    <div className="app">
       <div class="topnav">
        <a style={{color:'aliceblue',paddingTop:'14px',textDecoration:'underline',cursor:'pointer'}} >Manage Hotel Bookings</a>
        <a href="/" style={{float:"right"}}>Logout</a>
      </div>
      <h4>Welcome {history.location.state.userId} </h4>
      {
      data.map((item)=>{   
         return(
           <div>
           <div style={{paddingLeft:'200px', paddingRight:'200px'}}> 
           <div style={{background:'white'}} className="w3-panel w3-card-4">
             <h4>{item.name}</h4>
             <hr/>
             {item.description}
             <div>Address: {item.address}</div>
             <div style={{float:'right', display:'inline'}}>city: {item.city}</div>
             {/*<div style={{float:'right', display:'inline'}}>Type:{item.type}</div>*/
             }
             <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
             {/* <input type="submit" value="Register to this event" onClick={register} style={{float:'right', marginBottom:'10px', background:'#fbeee8' }} /> */}
             {/*<button value={item.hotel_id} style={{float:'right', marginBottom:'10px',borderRadius:'40px',width:'100px',cursor:'pointer',background:'gold' }} onClick={handleBooking}>Book Hotel</button>*/
             }
           </div>
         </div>
         {/*<button type="submit" value={item.hotel_id} onClick={handleBooking}>Book Hotel</button>*/
          }
          </div>
       )})}
    </div>
  );
}

export default HotelOwnerHome;