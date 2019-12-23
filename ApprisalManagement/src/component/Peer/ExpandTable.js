import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { Card } from 'react-bootstrap';


class ExpandTable extends React.Component {
    constructor() {
        super();

        this.state = {
            data: [
                { id: 1, date: "2014-04-18", total: 121.0, status: "Shipped", name: "A", points: 5, percent: 50 },
                { id: 2, date: "2014-04-21", total: 121.0, status: "Not Shipped", name: "B", points: 3, percent: 60 },
                { id: 3, date: "2014-08-09", total: 121.0, status: "Not Shipped", name: "C", points: 2, percent: 70 },
                { id: 4, date: "2014-04-24", total: 121.0, status: "Shipped", name: "D", points: 4, percent: 80 },
                { id: 5, date: "2014-04-26", total: 121.0, status: "Shipped", name: "E", points: 2, percent: 90 },
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
        const clickCallback = () => this.handleRowClick(item.id);
        const itemRows = [
            <tr onClick={clickCallback} key={"row-data-" + item.id} style={{cursor:"pointer"}}>
                <th>Peer{i}</th>
                <td style={{ fontSize: "27px"}}><StarRatingComponent name="rate2" starColor={"mediumaquamarine"} value={item.points} /></td>
                <td>{item.status}</td>
            </tr>
        ];
     
        if (this.state.expandedRows.includes(item.id)) {
            itemRows.push(
            <tr key={"row-expanded-" + item.id} allign="left"> 
                    <td colSpan="3"> 
                    <div  >Technical  &nbsp;&nbsp;&nbsp;&nbsp;<span data-toggle="tooltip"  title={"3%"}>
                        <a >
                        <StarRatingComponent name="rate2" starColor={"mediumaquamarine"} value={3} />
                        </a>
                    </span>
                    </div>
                    <div>Presentation  &nbsp;&nbsp;&nbsp;&nbsp; <span data-toggle="tooltip" data-placement="bottom" title={"3%"}>
                    <a >
                        <StarRatingComponent name="rate2" starColor={"mediumaquamarine"} value={3} />
                        </a>
                    </span>
                    </div>
                    <div>Communication  &nbsp;&nbsp;&nbsp;&nbsp;<span data-toggle="tooltip" data-placement="bottom" title={"3%"}>
                    <a>
                        <StarRatingComponent name="rate2" starColor={"mediumaquamarine"} value={3} />
                        </a>
                    </span>
                    </div>
                    <div>Team involvement  &nbsp;&nbsp;&nbsp;&nbsp;<span data-toggle="tooltip" data-placement="bottom" title={"3%"}>
                    <a >
                        <StarRatingComponent onClick={()=>{}} name="rate2" starColor={"mediumaquamarine"} value={3} />
                        </a>
                    </span>
                    </div>
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
                <thead class=" ty-header">
                    <tr>
                        <th></th>
                        <th>Review</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody>{allItemRows}</tbody>
            </table>
            </Card>
        );
    }
}

export default ExpandTable;