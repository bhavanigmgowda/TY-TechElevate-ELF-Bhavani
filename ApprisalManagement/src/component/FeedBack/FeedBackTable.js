import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../AllCss/Table.css'
const FeedBackTable = () => {
    return (

<Card>
   
 <table class="table table-hover " >

           <thead class=" ty-header">
               <tr>
                   <th></th>
               <th>Very Bad</th>
                   <th>Bad</th>
                   <th>Average</th>
                   <th>Good</th>
                   <th>Very Good</th>
                   
               </tr>
           </thead>
           <tbody>
               <tr >
               <th style={{textAlign: "initial",    width: "303px"}}>Ability to cooperate with the team</th>
                   <td><input type="radio"/></td>
                   <td><input type="radio"/></td>
                   <td><input type="radio"/></td>
                   <td><input type="radio"/></td>
                   <td><input type="radio"/></td>
               </tr>
               <tr >
                   <th style={{textAlign: "initial",width: "303px"}}>enthusiasm and implications towards project</th>
                   <td><input type="radio"/></td>
                   <td><input type="radio"/></td>
                   <td><input type="radio"/></td>
                   <td><input type="radio"/></td>
                   <td><input type="radio"/></td>
               </tr>
               <tr >
                   <th style={{textAlign: "initial",width: "303px"}}>compliance to internal rules and processes</th>
                   <td><input type="radio"/></td>
                   <td><input type="radio"/></td>
                   <td><input type="radio"/></td>
                   <td><input type="radio"/></td>
                   <td><input type="radio"/></td>
               </tr>

               <tr >
                   <th style={{textAlign: "initial",width: "303px"}}>ability to work effectively with peers</th>
                   <td><input type="radio"/></td>
                   <td><input type="radio"/></td>
                   <td><input type="radio"/></td>
                   <td><input type="radio"/></td>
                   <td><input type="radio"/></td>
               </tr>
               <tr >
                   <th style={{textAlign: "initial",width: "303px"}}>initiative and autonomy</th>
                   <td><input type="radio"/></td>
                   <td><input type="radio"/></td>
                   <td><input type="radio"/></td>
                   <td><input type="radio"/></td>
                   <td><input type="radio"/></td>
               </tr>
               <tr >
                   <th style={{textAlign: "initial",width: "303px"}}>proactive</th>
                   <td><input type="radio"/></td>
                   <td><input type="radio"/></td>
                   <td><input type="radio"/></td>
                   <td><input type="radio"/></td>
                   <td><input type="radio"/></td>
               </tr>
           </tbody>
       </table>
      <center><Button style={{width:"10%",backgroundColor:"mediumaquamarine" ,border:"none"}} align="center"> Add Comment </Button>&nbsp;&nbsp;&nbsp;<Button style={{width:"10%",backgroundColor:"lightgreen",border:"none"}} align="center">Submit</Button></center> 

       </Card>
    );
};

export default FeedBackTable;