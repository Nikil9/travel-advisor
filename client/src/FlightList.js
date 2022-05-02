import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DatePicker  from 'reactstrap-date-picker/lib/DatePicker';

class FlightList extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return <h2>I am a Car!</h2>;
  }
}

export default FlightList;