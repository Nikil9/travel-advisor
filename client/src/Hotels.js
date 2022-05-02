import React, { useState,useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import 'react-calendar/dist/Calendar.css';
import './App.css';

function Hotels() {
  const history = useHistory();
  const [source, setSource] = useState('');
  const [data, setData] = useState('');
  const [showForm, setShowForm] = useState(Boolean);
  const [register, setRegister] = useState(Boolean);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [flight, setFlight] = useState('');

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

    const handleNameChange = (e) => {
      setName(e.target.value);
    }
    
    const handlePhoneChange = (e) => {
      setPhone(e.target.value);
    }

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    }

    const HandleSubmit = (e) => {
      e.preventDefault();
      //console.log(data)
      let booking = 'B'+getRndInteger(100,10000000)
      let order = 'O'+getRndInteger(100,10000000)

      axios.put("/BookHotelOrder", {
        // registrationId:1234,
         bookingId:booking,
         type:flight.type,
         price:flight.price,
         booking_date:'2022-04-30',
         customer_id: history.location.state.userId,
         order_id: order,
         room_number:1
       })
      
      axios.put("/BookHotel", {
       // registrationId:1234,
       bookingId:booking,
       type:flight.type,
       price:flight.price,
       booking_date:'2022-04-30',
       customer_id: history.location.state.userId,
       order_id: order,
       room_number:1
      })
        .then((res) => {
          console.log(res.data);
          alert("Booked hotel successfully....");
          setRegister(false)
        })
        .catch((err) => {
          alert("Error while booking, please try again!");
          console.log(err);
        });
    }

  const handleSourceChange = (e) => {
    setSource(e.target.value);
  }

const handleSearch = (e) => {
    e.preventDefault();  
    axios.get('/getHotelList',{params: {city:source }})
    .then(res => {
      setData(res.data)
      setShowForm(true)
      const response = res.data
      if(!res.data){
        alert('No Hotels found! Please search again')
        setSource('');
      }
    })
    .catch(error => console.log(error))
}

const handleBooking=(e)=>{
  setRegister(true)
  setFlight(e.target.value)
  console.log(flight)
  data.map((item)=>{
    if(item.hotel_id===e.target.value)
    setFlight(item)
  })
  console.log(flight)
}



  return (
    !showForm?
    <div className="hotels">
      <center style={{paddingTop:'200px'}}>
        <h2> Book Instant hotels </h2>
      <label >
      City: 
      </label>
      <input type="text" placeholder="Search using city" value={source} required onChange={(e)=> { handleSourceChange(e) }} /><br />
      <label>
      <br/><br/> <input type="submit" value="search" onClick={handleSearch} /><br/> </label>
      </center>
    </div>
    :(!register?
      // <div className="card-container" style={{ flexWrap: 'wrap' }}>
        data.map((item)=>{   
         return(
           <div>
           <div style={{paddingLeft:'200px', paddingRight:'200px'}}> 
           <div style={{background:'white'}} className="w3-panel w3-card-4">
             <h4>{item.name}</h4>
             <hr/>
             {item.description}
             <div>Address: {item.address}</div>
             <div style={{float:'right', display:'inline'}}>No of guest: {item.guest_count}</div>
             <div>Type:{item.type} <br/></div>
             {/*<div style={{float:'right', display:'inline'}}>Type:{item.type}</div>*/
             }
             <div>Price: ${item.price}</div>
             <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
             {/* <input type="submit" value="Register to this event" onClick={register} style={{float:'right', marginBottom:'10px', background:'#fbeee8' }} /> */}
             <button value={item.hotel_id} style={{float:'right', marginBottom:'10px',borderRadius:'40px',width:'100px',cursor:'pointer',background:'gold' }} onClick={handleBooking}>Book Hotel</button>
           </div>
         </div>
         {/*<button type="submit" value={item.hotel_id} onClick={handleBooking}>Book Hotel</button>*/
          }
          </div>
       )})
    :
    <div>
    <center>
          <h2>Hotel Booking</h2>
          Name:<br/>
          <input type="text" value={name} required onChange={(e)=> { handleNameChange(e) }} /><br />
          Phone:<br/>
          <input type="text" value={phone} required onChange={(e)=> { handlePhoneChange(e) }} /><br />
          Email:<br/>
          <input type="text" value={email} required onChange={(e)=> { handleEmailChange(e) }} /><br />
          <input type="submit" value="Submit" onClick={HandleSubmit} />
          <br/>  
        </center>
    </div>
    )
  );
}
export default Hotels;


