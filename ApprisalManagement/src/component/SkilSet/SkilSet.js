import React, { Component } from 'react'
import PieChart from 'react-minimal-pie-chart';
  
  export default class Skillset extends Component {

      constructor(props){
          super(props);

           this.state={
             value:'95%'
           }

      }


    render() {

       const a='50%'; 

      return (
        <div>
            
            <table class="table">
  <thead>
    <tr>
      <th scope="col" style={{textAlign: "initial"}}>Skill</th>
      <th scope="col">Score</th>
      <th scope="col">Weightage</th>
      <th scope="col">Potential</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: "initial",color:"cornflowerblue"}}>Communication</th>
      <td>
      <PieChart  style={{margin: 'auto',width: '50px'}}
  data={[
    { title: '9', value:1, color: 'cornflowerblue',   
       degrees:36*9,
    startOffset:270,
    labelPosition:3 },
  ]}
/>



      </td>
      <td><div style={{margin: 'auto',width: '30%'}} className="progress">
  <div className="progress-bar" role="progressbar" style={{width: '90%',backgroundColor:"cornflowerblue"}} >90%</div>
</div>

</td>
      <td><div style={{margin: 'auto',width: '30%',backgroundColor:"cornflowerblue"}} className="progress">
      <div className="progress-bar" role="progressbar" style={{width: this.state.value,backgroundColor:"cornflowerblue"}} >{this.state.value}</div>
</div></td>
    </tr>
    <tr>
      <th scope="row" style={{textAlign: "initial",color:"cornflowerblue"}}>Time-Management</th>
      <td>
      
      <PieChart  style={{margin: 'auto',width: '50px'}}
  data={[
    { title: '2', value:1, color: 'cornflowerblue',   
       degrees:36*2,
    startOffset:270,
    labelPosition:3 },
  
  ]}
/>
 

      </td>
      <td><div style={{margin: 'auto',width: '30%'}} className="progress">
      <div className="progress-bar" role="progressbar" style={{width:'20%',backgroundColor:"cornflowerblue"}} >20%</div>
</div></td>
      <td><div style={{margin: 'auto',width: '30%'}} className="progress">
      <div className="progress-bar" role="progressbar" style={{width: '40%',backgroundColor:"cornflowerblue"}} >40%</div>
</div></td>
    </tr>
    <tr>
      <th scope="row" style={{textAlign: "initial",color:"cornflowerblue"}}>Planning</th>
      <td>
 
      <PieChart  style={{margin: 'auto',width: '50px'}}
  data={[
    { title: '7', value:1, color: 'cornflowerblue',   
       degrees:36*7,
    startOffset:270,
    labelPosition:3 },
  
  ]}
/>


      </td>
      <td><div style={{margin: 'auto',width: '30%'}} className="progress">
      <div className="progress-bar" role="progressbar" style={{width: '70%',backgroundColor:"cornflowerblue"}} >70%</div>
</div></td>
      <td><div style={{margin: 'auto',width: '30%'}} className="progress">
      <div className="progress-bar" role="progressbar" style={{width: '85%',backgroundColor:"cornflowerblue"}} >85%</div>
</div></td>
    </tr>
  </tbody>
</table>  


        </div>
      )
    }
  }
  

/* const Skillset=props=>{

     return(
       
    <div>
    
      
     <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>  

     </div>);

}; */