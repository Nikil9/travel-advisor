import React, { useState,useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DatePicker  from 'reactstrap-date-picker/lib/DatePicker';
import FlightList from './FlightList';
import './App.css';


function Flights() {
  const moment = require('moment');
  //var showForm =true
  const history = useHistory();
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState(new Date());
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

      axios.put("/BookFlightOrder", {
        // registrationId:1234,
         bookingId:booking,
         class:flight.type,
         seat_num:'1',
         price:flight.price,
         flight_num:flight.flight_num,
         customer_id: history.location.state.userId,
         order_id: order
       })
      
      axios.put("/BookFlight", {
       // registrationId:1234,
        bookingId:booking,
        class:flight.type,
        seat_num:'1',
        price:flight.price,
        flight_num:flight.flight_num,
        customer_id: history.location.state.userId,
        order_id:order
      })
        .then((res) => {
          console.log(res.data);
          alert("Booked flight successfully....");
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
  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  }
  const onChange = (newDate) => {
    setDate(newDate);
}
const handleSearch = (e) => {
    var dateString = date;
    var dateObj = new Date(dateString);
    var momentObj = moment(dateObj);
    var momentString = momentObj.format('YYYY-MM-DD');
    e.preventDefault();  
    axios.get('/api/getFlightList',{ params: {source:source, destination:destination, date:momentString } })
    .then(res => {
      setData(res.data)
      setShowForm(true)
      const response = res.data
      if(!res.data){
        alert('No Flights found! Please search again')
        setSource('');
        setDestination('');
        setDate('');
      }
    })
    .catch(error => console.log(error))
}

const handleChange = (e) => {
  setSource(e.target.value);
}

const handleBooking=(e)=>{
  setRegister(true)
  setFlight(e.target.value)
  console.log(flight)
  data.map((item)=>{
    if(item.flight_num===e.target.value)
    setFlight(item)
  })
  console.log(flight)
}


  return (
    !showForm?
    <div className="flights">
      <center>
      <label >
      Source:
      </label><br />
      <input type="text" placeholder="Enter your source" value={source} required onChange={(e)=> { handleSourceChange(e) }} /><br />
      <label>
      Destination:
      </label><br />
      <input type="text" placeholder="Enter your destination" value={destination} required onChange={(e) => { handleDestinationChange(e) }} />
     <label><br/>
      Date of Travel:
      </label>
      <div style={{width:'250px', height:'250px'}}>
      <Calendar 
      onChange={onChange} 
      value={date} 
      /></div>
      <br/><br/> <input type="submit" value="search" onClick={handleSearch} /><br/> 
      </center>
    </div>
    :(!register?
      <div className="card-container" style={{ flexWrap: 'wrap' }}>
       { data.map((item)=>{   
         return(
          <div className="card"  style={{ display: 'flex' }}>
            <header className="article-header">
              <div>
                <div className="category-title">
                  Aireline:   {item.airline_id}
                  {//<span className="date"> {item.airline_id}</span>
                  }
                </div>
              </div>
              <h2 className="article-title">
              Source:{ item.source}<br/>
              Destination:{ item.destination}<br/>
              </h2>
             Arrival time: {item.arrival_time}<br/>
             Departure time:{item.departure_time}<br/>
            </header>
            <div className="author">
              <div className="profile"></div>
              <div className="info">
                <div className="caption">Available seats: {item.no_of_seats}</div>
                <div className="name">Type:{item.type}</div>
                <div className="name">Price:${item.price}</div>
              </div>
            </div>
            <div className="tags"></div>
            <button type="submit" value={item.flight_num} onClick={handleBooking}>Book Flight</button>
          </div>
       )})}  
    </div>:
    <div>
    <center>
          <h2>Flight Booking</h2>
          Name:<br/>
          <input type="text" value={name} required onChange={(e)=> { handleNameChange(e) }} /><br />
          Class:<br/>
          <input type="text" value={flight.type} required /><br />
          Price:<br/>
          <input type="text" value={flight.price} required /><br />

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

export default Flights;


