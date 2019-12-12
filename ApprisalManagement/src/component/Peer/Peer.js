import React from 'react';
import { Card } from 'react-bootstrap';
import '../AllCss/Table.css'

import Chart from "react-apexcharts";
import StarRatingComponent from 'react-star-rating-component';

const Peer = () => {
	const state = {
		rating: 1

	}
	return (
		<div>
			<Card>
				<table class="table table-hover table-bordered">
					<thead class=" ty-header">
						<tr>
							<th></th>
							<th>Review</th>
							<th>Comment</th>
						</tr>
					</thead>
					<tbody>
						<tr >
							<th>Peer1</th>
							<td style={{    fontSize: "27px"}}>						
							 
							 <div  data-toggle="tooltip" data-placement="bottom" title={"2%"}>
							 <StarRatingComponent  name="rate2" starColor={"mediumaquamarine"}  value={2}  />
								</div>
							</td>
							<td></td>

						</tr>
						<tr >
							<th>Peer2</th>
							<td style={{    fontSize: "27px"}} >
							<div  data-toggle="tooltip" data-placement="bottom" title={"5%"}>
							 <StarRatingComponent  name="rate2" starColor={"mediumaquamarine"}  value={5}  />
								</div>
							</td>
							<td></td>

						</tr>
						<tr >
							<th>Peer3</th>
							<td style={{    fontSize: "27px"}}>
							<div  data-toggle="tooltip" data-placement="bottom" title={"3%"}>
							 <StarRatingComponent  name="rate2" starColor={"mediumaquamarine"}  value={3}  />
								</div>
							</td>
							<td></td>

						</tr>
						<tr >
							<th>Peer4</th>
							<td style={{    fontSize: "27px"}}>						
							<div  data-toggle="tooltip" data-placement="bottom" title={"4%"}>
							 <StarRatingComponent  name="rate2" starColor={"mediumaquamarine"}  value={4}  />
								</div>
							</td>
							<td></td>

						</tr>
					</tbody>
				</table>
			</Card>
		</div>
	);
};

export default Peer;