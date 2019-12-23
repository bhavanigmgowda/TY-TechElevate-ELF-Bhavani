import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import EditModel from '../Profile/EditModel';
import './Apprisal.css'

const ApprisalStatus = props => {
    const data = {
        "_id": "5df0c7d79b7424bb6a584f07",
        "index": 4,
        "picture": "https://icon-library.net/images/user-profile-icon/user-profile-icon-23.jpg",
        "name": "Raquel Diaz",
        "gender": "female",
        "email": "raqueldiaz@sensate.com",
        "phone": "+1 (816) 550-3115",
        "address": " Colorado",
        "desig": "software engineer",
        "doj": "2018-02-08"

    }
    const [profile, setprofile] = useState(data)

    useEffect(() => {
        if (props.profileData) {
            setprofile(props.profileData);
        }
    })
    return (
        <div>
            <div >

                {console.log("profile info", props.profileData)}
                <Card class="allCards">

                    <div className=" allCards">
                        <div class="container-fluid innerCard">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-md-3 "  >
                                            <Card style={{ width: '18rem'}}>
                                                <Card.Body >
                                                    <Card.Title>Toatal apprisal in this month </Card.Title>
                                                    <Card.Text>
                                                       20
                                                    </Card.Text>
                                                    
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="tab-pane fade show active" >

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Card>
            </div>


        </div>
    );
};

export default ApprisalStatus;

