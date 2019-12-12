import React from 'react';
import PropTypes from 'prop-types';
import './ProfileInfo.css'
import Chart from "react-apexcharts";
const Team = props => {
const a=[
    {
      "_id": "5df0c7d7fe41695a7f1058c4",
      "index": 0,
      "picture": "https://imgix.bustle.com/uploads/image/2018/5/9/fa2d3d8d-9b6c-4df4-af95-f4fa760e3c5c-2t4a9501.JPG?w=970&h=546&fit=crop&crop=faces&auto=format&q=70",
      "name": "Leslie Munoz",
      "gender": "female",
      "email": "lesliemunoz@sensate.com",
      "phone": "+1 (940) 526-3136",
      "address": "Georgia",
      "desig":"software engineer"
    },
    {
      "_id": "5df0c7d752ecd3223c681c90",
      "index": 1,
      "picture": "http://placehold.it/32x32",
      "name": "Macdonald Terrell",
      "gender": "male",
      "email": "macdonaldterrell@sensate.com",
      "phone": "+1 (904) 596-2950",
      "address": " Washington",
      "desig":"software engineer"
    },
    {
      "_id": "5df0c7d76423a7d018996de9",
      "index": 2,
      "picture": "http://placehold.it/32x32",
      "name": "Letha Pratt",
      "gender": "female",
      "email": "lethapratt@sensate.com",
      "phone": "+1 (943) 567-2771",
      "address": " Ohio",
      "desig":"software engineer"

    },
    {
      "_id": "5df0c7d7f116b39b2d91bcbb",
      "index": 3,
      "picture": "https://imgix.bustle.com/uploads/image/2018/5/9/fa2d3d8d-9b6c-4df4-af95-f4fa760e3c5c-2t4a9501.JPG?w=970&h=546&fit=crop&crop=faces&auto=format&q=70",
      "name": "Therese Gilliam",
      "gender": "female",
      "email": "theresegilliam@sensate.com",
      "phone": "+1 (933) 451-3149",
      "address": " Tennessee",
      "desig":"software engineer"

    },
    {
      "_id": "5df0c7d79b7424bb6a584f07",
      "index": 4,
      "picture": "http://placehold.it/32x32",
      "name": "Raquel Diaz",
      "gender": "female",
      "email": "raqueldiaz@sensate.com",
      "phone": "+1 (816) 550-3115",
      "address": " Colorado",
      "desig":"software engineer"

    }
  ]

    return (


        <div>
        <div>
       <div class="card text-center allCards"  >

<div class="card-body ">
   <h3>MY TEAM</h3> 
<div >
{a.map(item => {
return(
        <div class="d-flex flex-row border rounded hover col-md-12 " onClick={()=>props.profileData(item)} style={{    backgroundColor: "rgb(247, 247, 240)",cursor:"pointer"}}>
        <div style={{border:"none"}} className="innerCard ">
            <img src={item.picture} className="profile"/>
        </div>
        <div className="innerCard">
                <h6 >{item.name}</h6>
                <h6 >{item.desig}</h6>
<h6 style={{color:"cornflowerblue"}}>{item.email}</h6>
      </div>
</div>)})}
  </div>
</div>

</div>
   </div>
   </div>




    );
};


export default Team;