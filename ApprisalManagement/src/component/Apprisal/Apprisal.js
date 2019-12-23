import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NavBarPage from '../NavBar/NavBarPage';
import ProfileInfo from '../Profile/ProfileInfo';
import AppraisalGraph from '../Profile/AppraisalGraph';
import Team from '../Profile/Team';
import ApprisalStatus from './ApprisalStatus';
import { Card, Pagination } from 'react-bootstrap';



const Appraisal = props => {
    const [profile, setProfile] = useState();


    return (



        <div style={{ backgroundColor: "#F5F5F5" }}>
            <NavBarPage />

            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-12" >
                                <Card><h2 style={{ textAlign: "initial" }}>Apprisal Status</h2>
                                    <Pagination style={{ textAlign: "initial" }}>
                                        <Pagination.Item>Week</Pagination.Item>
                                        <Pagination.Item active>Month</Pagination.Item>
                                        <Pagination.Item >Year</Pagination.Item>
                                    </Pagination>
                                </Card>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <ApprisalStatus profileData={profile} />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <AppraisalGraph />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Appraisal;


