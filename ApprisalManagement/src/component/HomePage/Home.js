import React, { useState, useEffect } from 'react';
import ListOfOption from './ListOfOption';
import NavBarPage from '../NavBar/NavBarPage';
import ProfileInHome from './ProfileInHome';
import FeedBackTable from '../FeedBack/FeedBackTable';
import Goal from '../Goal/Goal';
import Peer from '../Peer/Peer';
import Skillset from '../SkilSet/SkilSet';
import { Card, Navbar ,Nav} from 'react-bootstrap';
import Feedback from 'react-bootstrap/Feedback';

const Home = () => {
const [skill,setSkill]=useState(false);
const [peer,setPeer]=useState(false);
const [goal,setGoal]=useState(false);
const [feedBack,setFeedBack]=useState(false);


useEffect(()=>{
setGoal(false)

},[skill])
useEffect(()=>{
    console.log("sdaaaaaaaaaaaa",skill)
    console.log("sdaaaaaaaaaaaa",peer)
    console.log("sdaaaaaaaaaaaa",goal)
    console.log("sdaaaaaaaaaaaa",feedBack)
    })
    useEffect(()=>{
        console.log("sdaaaaaaaaaaaa",skill)
        console.log("sdaaaaaaaaaaaa",peer)
        console.log("sdaaaaaaaaaaaa",goal)
        console.log("sdaaaaaaaaaaaa",feedBack)
        })


    return (
        <div>
            <NavBarPage/>
            <div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<div class="row">
				<div class="col-md-12">
                    <ProfileInHome/>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
                <Card >
<Navbar expand="lg" >
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ">
            <Nav.Link className="colorText" onClick={()=>setSkill(true)}>Skill Set </Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link className="colorText" onClick={()=>setPeer(true)} href="#link">Peer </Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link className="colorText" onClick={()=>setGoal(true)} href="#link">Goal</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link className="colorText" onClick={()=>setFeedBack(true)} href="#link">Feedback</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>      </Card>				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
                {skill?<Skillset/>:null}
                {peer?<Peer/>:null}
                {goal?<Goal/>:null}
                {feedBack?<Feedback/>:null}
				</div>
			</div>
		</div>
	</div>
    </div>
        </div>
    );
};

export default Home;