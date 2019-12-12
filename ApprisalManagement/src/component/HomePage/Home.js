import React from 'react';
import ListOfOption from './ListOfOption';
import NavBarPage from '../NavBar/NavBarPage';
import ProfileInHome from './ProfileInHome';

const Home = () => {
    return (
        <div>
            <NavBarPage/>
	<div class="row">
		<div class="col-md-12">
			<div class="row">
				<div class="col-md-12">
                    <ProfileInHome/>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
                    <ListOfOption/>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
				</div>
			</div>
		</div>
	</div>
        </div>
    );
};

export default Home;