import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProfileInfo from './ProfileInfo';
import Team from './Team';
import AppraisalGraph from './AppraisalGraph';
import NavBar from '../NavBar/NavBar';

const Profile = props => {
	const [profile, setProfile]=useState();
    return (


		
        <div style={{backgroundColor:"#F5F5F5"}}>
            <div class="container-fluid">
				<NavBar/>
	<div class="row">
		<div class="col-md-12">
			<div class="row">
				<div class="col-md-9">
					<div class="row">
						<br/>
						<div class="col-md-12" style={{    marginBottom: "20px"}}>
							
<ProfileInfo profileData={profile}/>					
	</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<AppraisalGraph  />
											</div>
					</div>
				</div>
				<div class="col-md-3">
                    <Team profileData={(data)=>setProfile(data)}/>
					{console.log(Profile)}
				</div>
			</div>
		</div>
	</div>
</div>
        </div>
    );
};

Profile.propTypes = {
    
};

export default Profile;