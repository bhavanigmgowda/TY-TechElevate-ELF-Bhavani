import React from 'react';

import StarRatingComponent from 'react-star-rating-component';
import { Card, Button, ProgressBar } from 'react-bootstrap';
import ReactApexChart from 'react-apexcharts';
import PieChart from 'react-minimal-pie-chart';
import AddSubTaskModel from './AddSubTaskModel'

class Goal extends React.Component {
    constructor() {
        super();

        this.state = {
            data: [
                { id: 1, date: "2014-04-18", total: 121.0, status: "Lear React js",subTask:["Post in webSite","Learn Hooks"],completed:[false,false], name: "A", points: 50, percent: 50 },
                { id: 2, date: "2014-04-21", total: 121.0, status: "Give Presentation on redux", subTask:["Preparing PPT","Do RND"],completed:[true,false],name: "B", points: 30, percent: 60 },
                { id: 3, date: "2014-08-09", total: 121.0, status: "develop application on android", subTask:["Develop simple app","Do RND"],completed:[true,false], name: "C", points: 20, percent: 70 },
                { id: 4, date: "2014-04-24", total: 121.0, status: "develop application for email", subTask:["work on attachment","add multipels Toos, cc's, attachment"],completed:[true,false],name: "D", points: 40, percent: 80 },
                { id: 5, date: "2014-04-26", total: 121.0, status: "participate on event",subTask:["organize a event"],completed:[true], name: "E", points: 20, percent: 90 },
            ],
            expandedRows: []
        };
    }


    handleRowClick(rowId) {
        const currentExpandedRows = this.state.expandedRows;
        const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);

        const newExpandedRows = isRowCurrentlyExpanded ?
            currentExpandedRows.filter(id => id !== rowId) :
            currentExpandedRows.concat(rowId);

        this.setState({ expandedRows: newExpandedRows });
    }

    renderItem(item, i) {
        debugger
        const now = item.points;

        const clickCallback = () => this.handleRowClick(item.id);
        const itemRows = [
            <tr onClick={clickCallback} key={"row-data-" + item.id} style={{cursor:"pointer"}} allign="left">
                <th style={{textAlign: "initial"}}>{item.status}</th>
                <td style={{ fontSize: "27px"}} >
        <ProgressBar  variant="success"   now={now} label={`${now}%`}/>
                    </td>
                <td>
<AddSubTaskModel style={{marginTop: "60%"}}/>
                    </td>
            </tr>
        ];
        
        if (this.state.expandedRows.includes(item.id)) {
            itemRows.push(
         //   <div style={{ width: "94%", marginLeft: "103%"}} >
            <tr key={"row-expanded-" + item.id} allign="left"> 
                    <td colSpan="3"> 
                    {item.subTask.map((data ,i)=> {
                       console.log(i);
                       return(
                           
                        <div  >{data} &nbsp;&nbsp;&nbsp;&nbsp;<span data-toggle="tooltip"  title={"3%"}>
                        {item.completed.filter((item,index)=>index===i).map((item,ind )=> {
                                                   console.log("innerindex",ind);

                       return(
                            <a >
                       {item.completed?<i class="fas fa-check-circle"></i> :<i class="far fa-check-circle"></i>
                       }                      
                          </a>
                       )})}
                    </span>
                    </div>
                       )
                   })}
                   

                    </td>
                </tr>
              //  </div>
            );
        }


        return itemRows;
    }




    render() {
        let allItemRows = [];
        let i = 1;
        this.state.data.forEach(item => {
            const perItemRows = this.renderItem(item, i++);
            allItemRows = allItemRows.concat(perItemRows);
        });

        return (
            <Card>
            <table class="table table-hover ">
                <tbody>{allItemRows}</tbody>
            </table>
            </Card>
        );
    }
}

export default Goal;