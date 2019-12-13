


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
                    name: "apprisal in %",
                    data: [5, 40, 45, 100, 49]
                }
            ]
        };
    }

    render() {
        return (

            <div>
                <div class="card text-center" style={{ maxHeight: "780px" }}>

                    <div class="card-body">
                        <div className="mixed-chart">
                        <h2 style={{textAlign: "initial",marginBottom:"20px"}}>Appraisal Survey</h2>

                            <Chart
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