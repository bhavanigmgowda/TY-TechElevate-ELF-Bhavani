import React from 'react';
import { Navbar, Nav, Card } from 'react-bootstrap';
import './Home.css'
const ListOfOption = () => {
    return (

        <Card >
<Navbar expand="lg" >
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ">
            <Nav.Link className="colorText" href="#home">Skill Set </Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link className="colorText" href="#link">Peer </Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link className="colorText" href="#link">Goal</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link className="colorText" href="#link">Feedback</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>      </Card>
        
    );
};

export default ListOfOption;