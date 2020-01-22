import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import { withRouter } from 'react-router-dom';
import $ from 'jquery'
import moment from 'moment'

export class InputConfirmationLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeName: '',
            employeeId: '',
            designation: '',
            joiningDate: '',
            probationEndDate: '',
            date: '',
            withWaterMark: false,
            withHeader: false,
            //validation variable

            showEmployeeName: '',
            showEmployeeId: '',
            showDesignation: '',
            showJoiningDate: '',
            showProbationEndDate: '',
            showInvalidDate: ''

        }
    }

    validate = (e) => {
        debugger
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

        let joiningDate = (document.getElementById("joiningDate").value).trim();
        let designation = (document.getElementById("designation").value).trim();
        let employeeId = (document.getElementById("employeeId").value).trim();
        let employeeName = (document.getElementById("employeeName").value).trim();
        // let ProbationEndDate = (document.getElementById("probationEndDate").value).trim()

        that.setState({
            probationEndDate: joiningDate
        })

        console.log('probation date ===', that.state.probationEndDate)

        console.log("Inside Validation", joiningDate, employeeName, designation, employeeId);

        if (joiningDate === "") {
            that.setState({ showJoiningDate: true })
        }

        /* if (ProbationEndDate === "") {
            that.setState({ showProbationEndDate: true })
        } */
        if (designation === "") {
            that.setState({ showDesignation: true })
        }
        if (employeeId === "") {
            that.setState({ showEmployeeId: true })
        }

        if (employeeName === "") {
            that.setState({ showEmployeeName: true })
        }


        if (joiningDate != "" && designation != "" && employeeId != "" && employeeName !== "") {
            console.log("True return")
            return true;

        }
        else {
            return false;
        }

    }
    pass = (e) => {

        console.log("data========", this.state)

        this.props.clicked(this.state)
        this.props.history.push('/confirmationLetter')


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
    hideJoiningDate = () => {
        this.setState({
            showJoiningDate: false
        })
    }
    hideDesignation = () => {
        this.setState({
            showDesignation: false
        })
    }

    hideProbationEndDate = () => {
        this.setState({
            showProbationEndDate: false
        })
    }

    hideInvalidDate = () => {
        this.setState({
            showInvalidDate: false
        })
    }



    render() {
        return (
            <div>
                <Home buttonShow={false} />

                <div>
                    <label for="title" class="ty-font heading col-lg-4 col-md-12 col-sm-12  col-12  offset-4 mt-5" style={{ left: "0px" }}>Confirmation Letter</label>

                    <div class="card container mt-5 mt-5" style={{width: "600px"}}>                        
                    <div class="card-body col-lg-10 col-md-10">
                            <form onSubmit={this.pass} >
                                <div class="form-row mt-3">
                                    <div class="form-group col-md-6 ty-font user-input-wrp"> <br />
                                        <input type="text" class="form-control  inputText" id="employeeName" onKeyPress={this.hideEmployeeName} onChange={(event) => {
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
                                    <div class="form-group col-md-6 ty-font user-input-wrp"><br />

                                        <input class="form-control inputText" onKeyPress={this.hideJoiningDate} onClick={this.hideJoiningDate} id="joiningDate" name="joiningDate"
                                            required
                                            onChange={(event) => {
                                                this.setState({
                                                    joiningDate: event.target.value
                                                }); this.hideJoiningDate();
                                            }}
                                            onFocus={(e) => e.target.type = 'date'}
                                            onBlur={(e) => e.target.type = "text"}
                                        />
                                        <span class="floating-label">Joining Date</span>

                                        <div class="ty-errmsg ">
                                            {this.state.showJoiningDate ? <div>Please fill out JoiningDate field * </div> : null}

                                        </div>
                                    </div>
                                    <div class="form-group col-md-6 ty-font user-input-wrp"> <br />
                                        <input type="text" id="designation" class="form-control  inputText" onKeyPress={this.hideDesignation} onChange={(event) => {
                                            this.setState({
                                                designation: event.target.value
                                            })
                                        }} required />
                                        <span class="floating-label">Designation</span>
                                        <div class="ty-errmsg ">
                                            {this.state.showDesignation ? <div >Please fill out Designation field * </div> : null}
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row mt-3">

                                    {this.state.showOthers ?
                                        <div class="col-md-12" >
                                            <div class="form-group  ty-font user-input-wrp" style={{ width: "100%" }}> <br />
                                                <input type="text" class="form-control  inputText" onKeyPress={this.hideEmployeeName} onChange={(event) => {
                                                    this.setState({
                                                        certificateType: event.target.value
                                                    })
                                                }} required />
                                                <span class="floating-label">Other Certificate</span>

                                            </div>
                                        </div> : null}
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
export default withRouter(InputConfirmationLetter)
