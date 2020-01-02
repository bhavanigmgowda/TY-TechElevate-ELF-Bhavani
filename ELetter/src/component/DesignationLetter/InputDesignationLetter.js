import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import { withRouter } from 'react-router-dom';
import $ from 'jquery'
import NavBar from '../Navbar/NavBar'
export class InputDesignationLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeName: '',
            employeeId: '',
            newDesignation: '',
            date: '',
            withWaterMark: false,
            withHeader: false,
            // validation variable
            showEmployeeName: '',
            showEmployeeId: '',
            showNewDesignation: '',
        }
    }

    onCheckHandler = (event) => {
        debugger;

        console.log("Checkbox value ==", event.target.value)
        if (event.target.value == 'false') {
            this.setState({
                withWaterMark: true
            })
            console.log("if  ==", this.state.withWaterMark)
        }
        else {
            debugger;
            this.setState({
                withWaterMark: false
            })
            console.log("else  ==", this.state.withWaterMark)

        }
    }


    onChangeHeader = (event) => {

        debugger;

        console.log("Checkbox value ==", event.target.value)
        if (event.target.value == 'false') {
            this.setState({
                withHeader: true
            })
            console.log("if  ==", this.state.withHeader)
        }
        else {
            debugger;
            this.setState({
                withHeader: false
            })
            console.log("else  ==", this.state.withHeader)

        }


    }



    hideEmployeeName = () => {
        this.setState({
            showEmployeeName: false
        })
    }
    hideEmployeeId = () => {
        this.setState({
            showEmployeeId: false
        })
    }
    hideNewDesignation = () => {
        this.setState({
            showNewDesignation: false
        })
    }

    validate = () => {

        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];


        const nth = (d) => {
            if (d > 3 && d < 21) return 'th';
            switch (d % 10) {
                case 1: return "st";
                case 2: return "nd";
                case 3: return "rd";
                default: return "th";
            }
        }

        let today = new Date();
        let currentdate = today.getDate() + nth(today.getDate()) + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
        this.setState({
            date: currentdate
        })

        var that = this;

        let employeeName = (document.getElementById("employeeName").value).trim();
        let employeeId = (document.getElementById("employeeId").value).trim();
        let newDesignation = (document.getElementById("newDesignation").value).trim();

        if (newDesignation === "") {
            that.setState({ showNewDesignation: true })
        }
        if (employeeId === "") {
            that.setState({ showEmployeeId: true })
        }
        if (employeeName === "") {
            that.setState({ showEmployeeName: true })
        }

        if (newDesignation != "" && employeeId != "" && employeeName != "") {
            console.log("True return")
            return true;

        }
        else {
            return false;
        }
    }
    pass = (event) => {
        event.preventDefault();
        console.log("data========", this.state)

        this.props.clicked(this.state)
        this.props.history.push('/DesignationLetter')

    }

    render() {
        return (
            <div>
                <NavBar buttonShow={false} />

                <div>
                    <label for="title" class="ty-font heading col-lg-4 col-md-12 col-sm-12  col-12  offset-4 mt-5" style={{ left: "0px" }}>Designation Change Letter</label>
                    <div class="card container mt-5 mt-5" style={{width: "600px"}}>                    
                        <div class="card-body col-lg-10 col-md-10">
                            <form action="" method="post" onSubmit={this.pass} >
                                <div class="form-row mt-3">
                                    <div class="form-group col-md-6 ty-font user-input-wrp"> <br />
                                        <input type="text" id="employeeName" class="form-control  inputText" onKeyPress={this.hideEmployeeName} onChange={(event) => {
                                            this.setState({
                                                employeeName: event.target.value
                                            })
                                        }} required />
                                        <span class="floating-label">Employee Name</span>

                                        <div class="ty-errmsg ">
                                            {this.state.showEmployeeName ? <div > Please fill out employee Name field * </div> : null}
                                        </div>
                                    </div>
                                    <div class="form-group col-md-6 ty-font user-input-wrp"> <br />
                                        <input type="text" class="form-control  inputText" id="employeeId" onKeyPress={this.hideEmployeeId} onChange={(event) => {
                                            this.setState({
                                                employeeId: event.target.value
                                            })
                                        }} required />
                                        <span class="floating-label">Employe Id</span>
                                        <div class="ty-errmsg ">
                                            {this.state.showEmployeeId ? <div  >Please fill out ID field * </div> : null}
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row mt-3">
                                    <div class="col-md-12" >
                                        <div class="form-group  ty-font user-input-wrp" style={{ width: "100%", marginLeft: "-2%" }}> <br />
                                            <input type="text" class="form-control  inputText" id="newDesignation" onKeyPress={this.hideEmployeeName} onChange={(event) => {
                                                this.setState({
                                                    newDesignation: event.target.value
                                                })
                                            }} required />
                                            <span class="floating-label">New  Designation</span>
                                            <div class="ty-errmsg ">
                                                {this.state.showNewDesignation ? <div  >Please fill out Designation field * </div> : null}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr style={{ width: "111%" }} />
                                <div class="form-row mt-3">
                                    <div className="col-6">
                                        <div class="form-check" >

                                            <input type="checkbox" value={this.state.withHeader} className="form-check-input" onChange={(event) => {
                                                this.onChangeHeader(event)
                                            }} id="withLetterHead" for="defaultCheck1" />
                                            <label style={{ whiteSpace: 'nowrap' }} className="form-check-label" htmlFor="withLetterHead">With Letter Head</label>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-check">
                                            <input type="checkbox" value={this.state.withWaterMark} className="form-check-input" id="withWatermark" onChange={(event) => {
                                                this.onCheckHandler(event)
                                            }} />
                                            <label style={{ whiteSpace: 'nowrap' }} className="form-check-label" htmlFor="withWatermark">With WaterMark</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="float-right ty-create-button">
                                    <button type="submit" class="btn btn-outline-primary ty-font" onClick={this.validate}>Create</button></div>
                                <div class="float-right ty-reset-button">
                                    <button type="reset" class="btn btn-outline-secondary ty-font">Reset</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(InputDesignationLetter)