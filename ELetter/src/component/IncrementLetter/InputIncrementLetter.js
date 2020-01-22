import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import $ from 'jquery'
import { withRouter } from 'react-router-dom';
export class InputIncrementLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeName: '',
            employeeId: '',
            annualCompensationYear: '',
            salaryIncremented: '',
            incrementInEffectDate: '',
            companyLocation: '',
            designation: '',
            date: '',
            withWaterMark: false,
            withHeader: false,

            // validation variable
            showEmployeeName: '',
            showEmployeeId: '',
            showAnnualCompensationYear: '',
            showSalaryIncremented: '',
            showIncrementInEffectDate: '',
            showCompanyLocation: '',
            showDesignation: '',

        }
    }

    validate=()=> {

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
                let designation = (document.getElementById("designation").value).trim();
                let employeeId = (document.getElementById("employeeId").value).trim();
                let annualCompensationYear = (document.getElementById("annualCompensationYear").value).trim();
                let incrementInEffectDate = (document.getElementById("incrementInEffectDate").value).trim();
                let companyLocation = (document.getElementById("companyLocation").value).trim();
                let salaryIncrement = (document.getElementById("salaryIncrement").value).trim();
                if (salaryIncrement === "") {
                    that.setState({ showSalaryIncremented: true })
                }
                if (companyLocation === "") {
                    that.setState({ showCompanyLocation: true })
                }
                if (designation === "") {
                    that.setState({ showDesignation: true })
                }
                if (employeeName === "") {
                    that.setState({ showEmployeeName: true })
                }
                if (incrementInEffectDate === "") {
                    that.setState({ showIncrementInEffectDate: true })
                }
                if (annualCompensationYear === "") {
                    that.setState({ showAnnualCompensationYear: true })
                }
                if (employeeId === "") {
                    that.setState({ showEmployeeId: true })
                }
                if (salaryIncrement != "" && companyLocation != "" && employeeName != "" && incrementInEffectDate !== "" && annualCompensationYear != "" && employeeId != '' && designation != "") {
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
        this.props.history.push('/IncrementLetter')

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
    hideAnnualCompensationYear = () => {
        this.setState({
            showAnnualCompensationYear: false
        })
    }
    hideSalaryIncremented = () => {
        this.setState({
            showSalaryIncremented: false
        })
    }
    hideIncrementInEffectDate = () => {
        this.setState({
            showIncrementInEffectDate: false
        })
    }
    hideCompanyLocation = () => {
        this.setState({
            showCompanyLocation: false
        })
    }
    hideDesignation = () => {
        this.setState({
            showDesignation: false
        })
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


    render() {
        return (
            <div>
                <Home buttonShow={false} />


                <div>
                    <label for="title" class="ty-font heading col-lg-4 col-md-12 col-sm-12  col-12  offset-4 mt-5" style={{ left: "0px" }}>Increment Letter</label>

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
                                    <div class="form-group col-md-6 ty-font user-input-wrp"> <br />
                                        <input type="text" class="form-control  inputText" id="designation" onKeyPress={this.hideDesignation} onChange={(event) => {
                                            this.setState({
                                                designation: event.target.value
                                            })
                                        }} required />
                                        <span class="floating-label">Designation</span>
                                        <div class="ty-errmsg ">
                                            {this.state.showDesignation ? <div >Please fill out Designation field * </div> : null}
                                        </div>
                                    </div>
                                    <div class="form-group col-md-6 ty-font user-input-wrp"> <br />
                                        <input type="text" class="form-control  inputText" id="companyLocation" onKeyPress={this.hideCompanyLocation} onChange={(event) => {
                                            this.setState({
                                                companyLocation: event.target.value
                                            })
                                        }} required />
                                        <span class="floating-label">Company Location</span>

                                        <div class="ty-errmsg ">
                                            {this.state.showCompanyLocation ? <div >Please fill out Company Location field * </div> : null}
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row mt-3">
                                <div class="form-group col-md-6 ty-font user-input-wrp"> <br />
                                        <input type="number" class="form-control  inputText" id="salaryIncrement" onKeyPress={this.hideSalaryIncremented} onChange={(event) => {
                                            this.setState({
                                                salaryIncremented: event.target.value
                                            })
                                        }} required />
                                        <span class="floating-label">Salary Increment</span>
                                        <div class="ty-errmsg ">
                                        {this.state.showSalaryIncremented ? <div >Please fill out salary Increment field * </div> : null}
                                        </div>
                                    </div>
                                    <div class="form-group col-md-6 ty-font user-input-wrp"><br />

                                        <input class="form-control inputText" onClick={this.hideIncrementInEffectDate} onKeyPress={this.hideIncrementInEffectDate} id="incrementInEffectDate" name="reportingDate"
                                            required
                                            onChange={(event) => {
                                                this.setState({
                                                    incrementInEffectDate: event.target.value
                                                }); this.hideIncrementInEffectDate();
                                            }}
                                            onFocus={(e) => e.target.type = 'date'}
                                            onBlur={(e) => e.target.type = "text"}
                                        />
                                        <span class="floating-label">Increment In Effect Date</span>

                                        <div class="ty-errmsg ">
                                        {this.state.showIncrementInEffectDate ? <div >Please fill out Increment Effect Date field * </div> : null}

                                        </div>
                                    </div>
                                </div>
                                <div class="form-row mt-3">
                                <div class="form-group col-md-12 ty-font user-input-wrp" style={{marginLeft:"-2%"}}> <br />
                                        <input type="number" class="form-control  inputText" id="annualCompensationYear" onKeyPress={this.hideAnnualCompensationYear} onChange={(event) => {
                                            this.setState({
                                                annualCompensationYear: event.target.value
                                            })
                                        }} required />
                                        <span class="floating-label">Annual Compensation Year</span>
                                        <div class="ty-errmsg ">
                                        {this.state.showAnnualCompensationYear ? <div >Please fill out Compensation Year field * </div> : null}
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
export default withRouter(InputIncrementLetter)