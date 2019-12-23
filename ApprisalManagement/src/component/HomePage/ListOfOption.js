import React from 'react';
import { Navbar, Nav, Card } from 'react-bootstrap';
import './Home.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Peer from '../Peer/Peer';
const ListOfOption = () => {
    return (

        <Card >
<Navbar expand="lg" >
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ">
            <Link className="colorText" to="/aaa">Skill Setss </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link className="colorText" href="#link">Peer </Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link className="colorText" href="#link">Goal</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link className="colorText" href="#link">Feedback</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>     
       </Card>
        
    );
};

export default ListOfOption;