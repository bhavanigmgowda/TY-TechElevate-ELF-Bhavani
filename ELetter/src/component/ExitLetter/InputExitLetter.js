import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import { withRouter } from 'react-router-dom';
import $ from 'jquery'
import moment from 'moment';

export class InputExitLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            salute: 'Mr.',
            employeeName: '',
            designation: '',
            joiningDate: '',
            exitDate: '',
            date: '',
            withWaterMark: false,
            withHeader: false,
            gender: {
                gender1: 'He',
                gender2: 'his',
                gender3: 'him',
            },
            // validation variable 
            showEmployeeName: '',
            showDesignation: '',
            showJoiningDate: '',
            showExitDate: '',
            showCompanyLocation: '',
            showinvalidDate: '',
            showJoinInvalid: ''
        }
    }

    validate=()=> {
        var that = this;
 
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

                console.log("dattetaetaetaet ", this.state)
                if (this.state.salute === "Ms." || this.state.salute === "Mrs.") {
                    // let obj = {...this.state };
                    // obj.gender.gender1 = "She";
                    this.setState({
                        ...this.state,
                        gender: {
                            gender1: 'She',
                            gender2: 'her',
                            gender3: 'her'
                        }
                    })
                }

                let employeeName = (document.getElementById("employeeName").value).trim();
                let designation = (document.getElementById("designation").value).trim();
                let companyLocation = (document.getElementById("companyLocation").value).trim();
                let ExitDate = (document.getElementById("exitDate").value).trim();
                let JoiningDate = (document.getElementById("joiningDate").value).trim();
                let selectedJoiningDate = new Date(JoiningDate);
                let selectedExitDate = new Date(ExitDate)
                let now = new Date();

                if (designation === "") {
                    this.setState({ showDesignation: true })
                }
                if (companyLocation === "") {
                    this.setState({ showCompanyLocation: true })
                }
                if (employeeName === "") {
                    this.setState({ showEmployeeName: true })
                }

                if (ExitDate === "") {
                    this.setState({ showExitDate: true })
                }
                if (JoiningDate === "") {
                    this.setState({ showJoiningDate: true })
                }

                if (selectedJoiningDate > now) {
                    this.setState({ showJoinInvalid: true })
                    return false;
                }

                if (selectedExitDate < selectedJoiningDate) {
                    that.setState({
                        showinvalidDate: true
                    })
                    return false;
                }
                if (designation != "" && companyLocation != "" && employeeName != "" && ExitDate != "" && JoiningDate != '') {
                    console.log("True return")
                    return true;
                }
                else {
                    return false;
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
    hideExitDate = () => {
        this.setState({
            showExitDate: false
        })
    }
    hideshowJoiningDate = () => {
        this.setState({
            showJoiningDate: false
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
    hideInvalidDate = () => {
        this.setState({
            showinvalidDate: false
        })
    }

    hideInvalidJoin = () => {
        this.setState({
            showJoinInvalid: false
        })
    }


    pass = (event) => {
        event.preventDefault();
        console.log("data========", this.state)
        this.props.clicked(this.state)
        this.props.history.push('/ExitLetter')

    }

    hideInvalidDate = () => {
        this.setState({
            showinvalidDate: false
        })
    }

    render() {
        return (
            <div>
                <Home buttonShow={false} />

                <div>
                    <label for="title" class="ty-font heading col-lg-4 col-md-12 col-sm-12  col-12  offset-4 mt-5" style={{ left: "0px" }}>Exit Letter</label>

                    <div class="card container mt-5 mt-5" style={{width: "600px"}}>                    
                        <div class="card-body col-lg-10 col-md-10">
                            <form onSubmit={this.pass} >
                                <div class="form-row mt-3">
                                <div class="form-group col-md-6 ty-font user-input-wrp"><br />
                                        <select class="form-control  inputText" id="input" name="traineetype" onChange={(event) => {
                                            this.setState({
                                                salute: event.target.value
                                            })
                                        }}
                                            required>
                                            <option selected value="Mr.">Mr.</option>
                                            <option value="Ms.">Ms.</option>
                                            <option value="Mrs.">Mrs.</option>
                                        </select>
                                        <div class="ty-errmsg ">
                                            <div > </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-6 ty-font user-input-wrp"> <br />
                                        <input type="text" class="form-control  inputText" id="employeeName" onKeyPress={this.hideEmployeeName} onChange={(event) => {
                                            this.setState({
                                                employeeName: event.target.value
                                            })
                                        }} required />
                                        <span class="floating-label">Employee Name</span>

                                        <div class="ty-errmsg ">
                                            {this.state.showEmployeeName ? <div >Please fill out Name field * </div> : null}
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row mt-3">
                                    <div class="form-group col-md-6 ty-font user-input-wrp"><br />
                                        <input class="form-control inputText" onClick={() => { this.hideshowJoiningDate(); this.hideInvalidJoin() }} onKeyPress={() => { this.hideshowJoiningDate(); this.hideInvalidJoin() }} id="joiningDate" name="joiningDate"
                                            required
                                            onChange={(event) => {
                                                this.setState({
                                                    joiningDate: event.target.value
                                                }); this.hideshowJoiningDate(); this.hideInvalidJoin();
                                            }}
                                            onFocus={(e) => e.target.type = 'date'}
                                            onBlur={(e) => e.target.type = "text"}
                                        />
                                        <span class="floating-label">Joined Date</span>
                                        <div class="ty-errmsg ">
                                            {this.state.showJoiningDate ? <div >Please fill out Joining date field * </div> : null}
                                            {this.state.showJoinInvalid ? <div >Joined Date must be equal or less than today's Date * </div> : null}
                                        </div>
                                    </div>
                                    <div class="form-group col-md-6 ty-font user-input-wrp"> <br />
                                        <input class="form-control inputText" onClick={() => { this.hideExitDate(); this.hideInvalidDate() }} onKeyPress={() => { this.hideExitDate(); this.hideInvalidDate() }} id="exitDate" name="exitDate"
                                            required
                                            onChange={(event) => {
                                                this.setState({
                                                    exitDate: event.target.value
                                                }); this.hideExitDate(); this.hideInvalidDate()
                                            }}
                                            onFocus={(e) => e.target.type = 'date'}
                                            onBlur={(e) => e.target.type = "text"}
                                        />
                                        <span class="floating-label">Exit Date</span>
                                        <div class="ty-errmsg ">
                                            {this.state.showExitDate ? <div>Please fill out Exit Date field * </div> : null}
                                            {this.state.showinvalidDate ? <div >Exit Date must be greater or equal to Joining Date * </div> : null}
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
                                                location: event.target.value
                                            })
                                        }} required />
                                        <span class="floating-label">Company Location</span>

                                        <div class="ty-errmsg ">
                                        {this.state.showCompanyLocation ? <div >Please fill out Company Location field * </div> : null}
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
export default withRouter(InputExitLetter)