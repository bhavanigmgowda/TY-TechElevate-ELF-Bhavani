import React, { useState, useEffect } from 'react';
import './ProfileInfo.css'
import { Card } from 'react-bootstrap';
import EditModel from './EditModel';


const ProfileInfo = props => {
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

                    <div className="profileCard allCards">
                        <div class="container-fluid innerCard">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-md-3" >
                                            <div >
                                                <img src={profile.picture} className="profile" alt="My Profile Photo" style={{ height: "133px" }} />
                                                <h6 >
                                                    {profile.name}
                                                </h6>
                                                <div >
                                                    <h6>Email: <span >{profile.email}</span></h6>
                                                    <h6>City: <span >{profile.address}</span></h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="tab-pane fade show active" >

                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>User Id</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <h6>{profile._id}</h6>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Name</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <h6>{profile.name}</h6>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Date of Joining</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <h6>02-02-2018</h6>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Blood Group</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <h6>A+</h6>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>DOB</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <h6>18-12-1996</h6>
                                                    </div>
                                                </div>
                                                <hr class="col-md-8" />
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Phone</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <h6>{data.phone}</h6>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Profession</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <h6>{profile.desig}</h6>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-md-1">
                                           <EditModel/>
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

export default ProfileInfo;

