import React from 'react';
import { Card } from 'react-bootstrap';
import '../AllCss/Table.css'

import Chart from "react-apexcharts";
import StarRatingComponent from 'react-star-rating-component';
import ExpandTable from './ExpandTable';

const Peer = () => {
	const state = {
		rating: 1

	}
	return (
		<div>
			<Card>
				<ExpandTable/>
			</Card>
		</div>
	);
};






export default Peer;



