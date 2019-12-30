import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter, Link } from 'react-router-dom'
import { MDBBtn } from "mdbreact";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import printer from '../Assests/print.jpeg'
import Axios from 'axios'
import MailComponent from '../Email/MailComponent';
import { Thumbnail } from 'react-bootstrap';

import "./NavBar.css"



class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      from:"nilesh.gupta6818@gmail.com",
      message:"from email webservice",
      tos:["nilesh.g@testyantra.com"],
      ccs:["nilesh.gupta6818@gmail.com"],
      waterMark:'',
      showWaterMark:false
    }
  }

  sendEmail = () => {

    Axios.post('http://localhost:8080/send-email', this.state)
      .then((response) => {
        console.log(" details" + this.state.email)
        console.log(response.data.message)
        if (response.data.statusCode === 201) {

           alert("suceess")

        } else if (response.data.statusCode === 401) {
               
        }

      }).catch((error) => {

        console.log(error);
      })
  }

 
   printPreview=()=>{
       window.print();
   }



  showWatermark=(data)=>{
             
    this.setState({
      show:data
    },()=>{this.props.showWatermark(this.state.show)})
    
  }

  logout=()=>{
    localStorage.clear();
    this.props.history.push('/');
  }

    render() {
        return (
         <div>
  <nav className="navbar navbar-expand-md new-bg navbar-dark">
    <Link className="navbar-brand new" to="/cards">
    <span className="ty-logo">E</span><span className="ty-logo"></span>Letter
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <div className="dropdown">
          <li className=" nav-item dropdown" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <a className="nav-link new-link" style={{cursor: "pointer"}}>Dropdown</a>
          </li>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <ul className="nav-area">
              <span className="ty-categories">Letters</span>
              <li><a href="JavaScript:void(0);"> On Board <i className="fa fa-angle-right" aria-hidden="true" id="photo" /></a>
                <div className="sub-nav " id="sub-nav">
                  <div className="sub-menu ">
                    <h3>On Board</h3>
                    <div className="row">
                      <div className="col">
                       
                        <ul>
                          <li><Link to="/InputInternship" >Internship Letter</Link></li>
                          <li><Link to="/InputOfferLetter">Offer Letter</Link></li>
                          <li><Link  to="/inputConfirmation">Confirmation Letter</Link></li>
                          <li><Link  to="/hr">Hr Letter</Link></li>
                          <li><Link  to="/InputIntentLetter">Intent Letter</Link></li>
                        </ul>
                      </div>
                   
                      
                    </div>
                  </div>
                </div>
              </li>
              <li><a href="JavaScript:void(0);"> Carrier <i className="fa fa-angle-right" aria-hidden="true" /></a>
                <div className="sub-nav">
                  <div className="sub-menu">
                    <h3>Carrier</h3>
                    <div className="row">
                      <div className="col">
                        <ul>
                          <li><Link  to="/InputcertificateLetter">Certificate Letter</Link></li>
                          <li><Link  to="/InputDepuationLetter">Deputation Letter</Link></li>
                          <li><Link  to="/InputDesignationLetter">Designation Letter</Link></li>
                          <li><Link  to="/InputIncrementLetter">Increment Letter</Link></li>
                          <li><Link  to="/InputTrainingLetter">Training Letter</Link></li>
                        </ul>
                      </div>
                    
                    </div>
                  </div>
                </div>
              </li>
              <li><a href="JavaScript:void(0);"> Relieve <i className="fa fa-angle-right" aria-hidden="true" /></a>
                <div className="sub-nav">
                  <div className="sub-menu">
                    <h3>Relieve</h3>
                    <div className="row">
                      <div className="col">
                        <ul>
                          <li><Link  to="/InputRelivingLetter">Relieving Letter</Link></li>
                          <li><Link  to="/InputExitLetter">Exit</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
           
       
            </ul>
          </div>
        </div>
   
      </ul>

    </div>
    <form class="form-inline my-2 my-lg-0">
    {this.props.buttonShow?<MailComponent/>:null}
    {   this.props.buttonShow?<img onClick={this.printPreview} style={{ width: 38, cursor: 'pointer', borderRadius: '100px' }} src={printer} />:null}
    <div className="dropdown">

          <a className=" nav-item dropdown" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <a className="nav-link new-link" style={{cursor: "pointer"}}>My Profile</a>
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <ul className="nav-profile nav-area ">
              <li ><a href="JavaScript:void(0);" style={{marginTop: "-60px",fontSize: "14px",paddingBottom: "43px",    width:" max-content"}}>Profile Setting </a>
              </li>
              <li ><a href="JavaScript:void(0);" style={{marginTop: "-60px",fontSize: "14px",paddingBottom: "43px"}}> Logout</a>
                <div className="sub-nav">
                </div>
              </li>
            </ul>
          </div>
        </div>
    </form>
  </nav>
</div>

        );
    }
}

export default withRouter(NavBar)