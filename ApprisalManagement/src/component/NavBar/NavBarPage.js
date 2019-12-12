import React from 'react';
import PropTypes from 'prop-types';
import './NavBar.css'
import { Nav, Navbar, NavbarBrand, NavDropdown, Form, FormControl, Button, Image} from 'react-bootstrap'
import {Link} from 'react-router-dom';


const NavBarPage = props => {
    return (
        <nav class="navbar navbar-expand-md new-bg navbar-dark">
        <a class="navbar-brand new" href="#">
          <span class="ty-logo">A</span>ppraisal<span class="ty-logo">M</span>anagement
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link new-link" to="/">Dashboard</Link>
            </li>
           
    
    </ul>
    </div>
    <li class="nav-item">
              <Link class="nav-link new-link" to="/profile"><h4>My Profile</h4></Link>
            </li>
    </nav>
    );
};



export default NavBarPage;