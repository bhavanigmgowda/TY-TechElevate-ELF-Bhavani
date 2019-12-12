import React from 'react';
import PropTypes from 'prop-types';
import './NavBar.css'

const NavBar = props => {
    return (
        <nav class="navbar navbar-expand-md new-bg navbar-dark">
        <a class="navbar-brand new" href="#">
          <span class="ty-logo">T</span>raining<span class="ty-logo">M</span>aintenance
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link new-link" routerLink="/dashboard">Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link new-link" routerLink="/batch-details">Create Batch</a>
            </li>
            <li class="nav-item">
              <a class="nav-link new-link" routerLink="/batch-info">Batch Info</a>
            </li>
    
    </ul>
    </div>
    <li class="nav-item">
              <h4 class="nav-link new-link" routerLink="/batch-info">My Profile</h4>
            </li>
    </nav>
    );
};

NavBar.propTypes = {
    
};

export default NavBar;