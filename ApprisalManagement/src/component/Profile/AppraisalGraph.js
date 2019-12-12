


import React, { Component } from "react";
import Chart from "react-apexcharts";


class AppraisalGraph extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [2015, 2016, 2017, 2018, 2019]
          }
        },
        series: [
          {
            name: "apprisal",
            data: [5, 40, 45, 100, 49]
          }
        ]
      };
    }
  
    render() {
      return (

             <div>
            <div class="card text-center" style={{maxHeight:"780px"}}>
  
  <div class="card-body">
      <h2>Appraisal Survey</h2>
  <div className="">
              <Chart className="w-100 p-3"
                options={this.state.options}
                series={this.state.series}
                type="line"
                width="500"
              />
            </div>
  </div>
 
</div>
        </div>
          
      );
    }
  }
  
  export default AppraisalGraph;