import React, { useState,useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

//About Component
function FlightVendorHome() {
  const history = useHistory();
  const [data, setData] = useState([{"flight_num":"AA71",
  "no_of_seats":250,
  "type":"Economy",
  "source":"Dallas",
  "destination":"London",
  "price":"$400",
"arrival_date":"04-30-2022",
"arrival_time":"3:15 PM",
"departure_date":"04-29-2022",
"departure_time":"6:15 AM",}]);

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
        <a style={{color:'aliceblue',paddingTop:'14px',textDecoration:'underline',cursor:'pointer'}} >Manage Flight Bookings</a>
        <a href="/" style={{float:"right"}}>Logout</a>
      </div>
      <h4>Welcome {history.location.state.userId} </h4>
      {
      data.map((item)=>{   
         return(
           <div>
           <div style={{paddingLeft:'200px', paddingRight:'200px'}}> 
           <div style={{background:'white'}} className="w3-panel w3-card-4">
             <h4>{item.flight_num}</h4>
             <hr/>
             {item.source} -- {item.destination}
             <div style={{float:'right', display:'inline'}}> Arrival:{item.arrival_date}</div><br/>
             <div style={{float:'right', display:'inline'}}> Departure:{item.departure_date}</div>

             <div>Type: {item.type}</div>
             seats:{item.no_of_seats}
             <div style={{float:'right', display:'inline'}}>price: {item.price}</div>
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

export default FlightVendorHome;



