import React from 'react'
import NavBarApp from './NavBarApp'
import './MasterTable.css'
export default function Table() {
    return (
        <div>
            <NavBarApp/>
<div class="container">
	<div class="col-md-11  mt-4">
		<h3 class="ty-heading">Batch Details</h3>
		<table class="table table-hover table-bordered">
			<thead class="text-white ty-header">
				<tr>
					<td>id</td>
					<td>name</td>
					<td>salary</td>
					<td>age</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>aaa</td>
					<td>20000</td>
					<td>25</td>
				</tr>
				<tr>
				<td>2</td>
					<td>bbb</td>
					<td>30000</td>
					<td>26</td>
				</tr>
				<tr>
				<td>1</td>
					<td>ccc</td>
					<td>80000</td>
					<td>30</td>
				</tr>
				<tr>
				<td>1</td>
					<td>dddd</td>
					<td>50000</td>
					<td>40</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
<div class=" mt-4 mb-4" id="ty-pagination">
</div>
        </div>
    )
}
