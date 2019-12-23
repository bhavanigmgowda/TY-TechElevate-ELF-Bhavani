import React, { useState, useEffect } from 'react';
import ListOfOption from './ListOfOption';
import NavBarPage from '../NavBar/NavBarPage';
import ProfileInHome from './ProfileInHome';
import FeedBackTable from '../FeedBack/FeedBackTable';
import Goal from '../Goal/Goal';
import Peer from '../Peer/Peer';
import Skillset from '../SkilSet/SkilSet';
import { Card, Navbar, Nav, Button } from 'react-bootstrap';
import Feedback from 'react-bootstrap/Feedback';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import Appraisal from '../Apprisal/Apprisal';
const Home = (props) => {
    const [skill, setSkill] = useState(false);
    const [peer, setPeer] = useState(false);
    const [goal, setGoal] = useState(true);
    const [feedBack, setFeedBack] = useState(false);




    const set = (data) => {
        switch (data) {
            case "skill":
                setSkill(true);
                setPeer(false);
                setGoal(false);
                setFeedBack(false);

                break;
            case "peer":
                setSkill(false);
                setPeer(true);
                setGoal(false);
                setFeedBack(false);
                break;
            case "goal":
                setSkill(false);
                setPeer(false);
                setGoal(true);
                setFeedBack(false);
                break;
            case "feedBack":
                setSkill(false);
                setPeer(false);
                setGoal(false);
                setFeedBack(true);
                break;

        }
    }

    return (
        <div>
            <NavBarPage />
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-12">
                                <ProfileInHome />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <Card >
                                    <Navbar  >
                                        <Navbar.Collapse id="basic-navbar-nav">
                                            <Nav className="mr-auto ">
                                                <Link className={skill ? "colorHover" : "colorText"} onClick={() => set("skill")}   >Skill Set </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                 <Link className={peer ? "colorHover" : "colorText"} onClick={() => set("peer")}>Peer </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                 <Link className={goal ? "colorHover" : "colorText"} onClick={() => set("goal")} >Goal</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Link className={feedBack ? "colorHover" : "colorText"} onClick={() => set("feedBack")} >Feedback</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                             </Nav>
                                        </Navbar.Collapse>
                                    </Navbar>
                                </Card>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">

                                {skill ? <Skillset /> : null}

                                {peer ? <Peer /> : null}
                                {goal ? <Goal /> : null}
                                {feedBack ? <FeedBackTable /> : null}

                            </div>
                        </div>
                        <Router>
                            <Route path='/skill' component={Skillset}></Route>
                        </Router>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;