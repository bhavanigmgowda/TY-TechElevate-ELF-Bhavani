import React from 'react';
import { Card } from 'react-bootstrap';

const ProfileInHome = () => {
    const data={ 
        "_id": "5df0c7d79b7424bb6a584f07",
        "index": 4,
        "picture": "https://i.pinimg.com/236x/73/b9/e5/73b9e538c8a56f104a488df50b3441de--illustration-girl-character-illustration.jpg",
        "name": "Raquel Diaz",
        "gender": "female",
        "email": "raqueldiaz@sensate.com",
        "phone": "+1 (816) 550-3115",
        "address": " Colorado",
        "desig":"software engineer",
        "doj":"2018-02-08"
  
      }
    return (
        <div>
            <Card>
  <Card.Body>

  <div class="d-flex flex-row border rounded  col-md-12 " >
        <div style={{border:"none"}}  className="innerCard">
            <img src={data.picture} className="profile"/>
        </div>
        <div className="innerCard">
                <h6 >{data.name}</h6>
                <h6 >{data.desig}</h6>
<h6 style={{color:"cornflowerblue"}}>{data.email}</h6>
      </div>
</div>
  </Card.Body>
</Card>
        </div>
    );
};

export default ProfileInHome;