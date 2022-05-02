import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from './App'
import Login from './Login'
import Home from './Home'
import About from './About'
import Signup from './Signup';
import CustomerHome from './CustomerHome';
import FlightVendorHome from './FlightVendorHome';
import HotelOwnerHome from './HotelOwnerHome';
import Flights from './Flights';
import Hotels from './Hotels';


const NavRouter = () => (
  <Router >
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      
      <Route path="/signup">
        <Signup />
      </Route>
      
      <Route path="/home" >
        <Home />
      </Route>
     
      <Route path="/about" >
        <About />
      </Route>

      <Route path="/flightVendor">
        <FlightVendorHome/>
      </Route>

      <Route path="/hotelOwner">
        <HotelOwnerHome />
      </Route>

      <Route path="/customer">
        <CustomerHome />
      </Route>

      <Route path="/flights">
        <Flights />
      </Route>

      <Route path="/hotels">
        <Hotels/>
      </Route>

    </Switch>
  </Router>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<NavRouter />, rootElement)
export default NavRouter;