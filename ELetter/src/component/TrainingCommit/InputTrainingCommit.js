import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import { withRouter } from 'react-router-dom';
import '../CommonStyle.css'
import $ from 'jquery'
import '../CommonStyle.css'
import moment from 'moment';
export class InputTrainingCommitLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            salute: 'Mr.',
            companyLocation: '',
            employeeName: '',
            designation: '',
            joiningDate: '',
            courseName: '',
            trainingStartDate: '',
            trainingEndDate: '',
            branchName: '',
            branchLocation: '',
            date: '',
            withWaterMark: false,
            withHeader: false,
            gender: {
                gender1: 'He',
                gender2: 'his',
                gender3: 'him'
            },

            // validation variable
            showEmployeeName: '',
            showCompanyLocation: '',
            showdDesignation: '',
            showJoiningDate: '',
            showCourseName: '',
            showTrainingStartDate: '',
            showTrainingEndDate: '',
            showBranchName: '',
            showBranchLocation: '',
            showInvalidDate: ''


        }
    }




    validate = () => {
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

        if (that.state.salute === "Ms." || that.state.salute === "Mrs.") {
            that.setState({
                ...that.state,
                gender: {
                    gender1: 'She',
                    gender2: 'her',
                    gender3: 'her'
                }
            })
        }


        console.log("dattetaetaetaet ", this.state)

        let employeeName = (document.getElementById("employeeName").value).trim();
        let designation = (document.getElementById("designation").value).trim();
        let joiningDate = (document.getElementById("joiningDate").value).trim();
        let courseName = (document.getElementById("courseName").value).trim();
        let branchName = (document.getElementById("branchName").value).trim();
        let branchLocation = (document.getElementById("branchLocation").value).trim();
        let trainingStartDate = (document.getElementById("trainingStartDate").value).trim();
        let trainingEndDate = (document.getElementById("trainingEndDate").value).trim();
        let trainingStartDateSelected = new Date(trainingStartDate)
        let trainingEndDateSelected = new Date(trainingEndDate)


        if (designation === "") {
            this.setState({ showDesignation: true })
        }

        if (employeeName === "") {
            this.setState({ showEmployeeName: true })
        }

        if (joiningDate === "") {
            this.setState({ showJoiningDate: true })
        }
        if (courseName === "") {
            this.setState({ showCourseName: true })
        }
        if (branchName === "") {
            this.setState({ showBranchName: true })
        }
        if (branchLocation === "") {
            this.setState({ showBranchLocation: true })
        }
        if (trainingStartDate === "") {
            this.setState({ showTrainingStartDate: true })
        }
        if (trainingEndDate === "") {
            this.setState({ showTrainingEndDate: true })
        }

        if (trainingEndDateSelected < trainingStartDateSelected) {
            that.setState({
                showInvalidDate: "true"
            })

            return false;
        }



        if (designation != "" && employeeName != "" && joiningDate != "" && branchName != '' && branchLocation != "" && courseName != "" && trainingStartDate != "" && trainingEndDate != "") {
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

    hideCompanyLocation = () => {
        this.setState({
            showCompanyLocation: false
        })
    }

    hideEmployeeName = () => {
        this.setState({
            showEmployeeName: false
        })
    }
    hideDesignation = () => {
        this.setState({
            showDesignation: false
        })
    }
    hideTrainingStartDate = () => {
        this.setState({
            showTrainingStartDate: false
        })
    }
    hideJoiningDate = () => {
        this.setState({
            showJoiningDate: false
        })
    }
    hideCourseName = () => {
        this.setState({
            showCourseName: false
        })
    }

    hideBranchName = () => {
        this.setState({
            showBranchName: false
        })
    }

    hideBranchLocation = () => {
        this.setState({
            showBranchLocation: false
        })
    }
    hideTrainingEndDate = () => {
        this.setState({
            showTrainingEndDate: false
        })
    }

    hideInvalidDate = () => {
        this.setState({
            showInvalidDate: false
        })
    }




    pass = (event) => {
        event.preventDefault();
        console.log("data========", this.state)

        this.props.clicked(this.state)
        this.props.history.push('/TrainingCommit')

    }

    render() {
        return (
            <div>
                <Home buttonShow={false} />


                <div>
                    <label for="title" class="ty-font heading col-lg-4  col-md-12 col-sm-12  col-12  container mt-5 " >Training Commitment Letter</label>

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
                                    <div class="form-group col-md-6 col-md-6 col-sm-6 ty-font user-input-wrp"> <br />
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
                                    <div class="form-group col-md-6 ty-font user-input-wrp" ><br />
                                        <input class="form-control inputText" onClick={this.hideJoiningDate} onKeyPress={this.hideJoiningDate} id="joiningDate" name="joiningDate"
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
                                            {this.state.showJoiningDate ? <div >Please fill out Joining date field * </div> : null}
                                        </div>
                                    </div>
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
                                </div>
                                <div class="form-row  mt-3">
                                    <div class="form-group col-md-6 ty-font user-input-wrp" ><br />
                                        <input class="form-control inputText" onClick={this.hideTrainingStartDate} onKeyPress={this.hideTrainingStartDate} id="trainingStartDate" name="trainingStartDate"
                                            required
                                            onChange={(event) => {
                                                this.setState({
                                                    trainingStartDate: event.target.value
                                                }); this.hideTrainingStartDate();
                                            }}
                                            onFocus={(e) => e.target.type = 'date'}
                                            onBlur={(e) => e.target.type = "text"}
                                        />
                                        <span class="floating-label">Traininng Start Date</span>
                                        <div class="ty-errmsg ">
                                            {this.state.showTrainingStartDate ? <div >Please fill out Training Start Date field * </div> : null}
                                        </div>
                                    </div>
                                    <div class="form-group col-md-6 ty-font user-input-wrp" ><br />
                                        <input class="form-control inputText" onClick={() => { this.hideTrainingEndDate(); this.hideInvalidDate() }} onKeyPress={() => { this.hideTrainingEndDate(); this.hideInvalidDate() }} id="trainingEndDate" name="trainingEndDate"
                                            required
                                            onChange={(event) => {
                                                this.setState({
                                                    trainingEndDate: event.target.value
                                                }); this.hideTrainingEndDate(); this.hideInvalidDate();
                                            }}
                                            onFocus={(e) => e.target.type = 'date'}
                                            onBlur={(e) => e.target.type = "text"}
                                        />
                                        <span class="floating-label">Training End Date</span>
                                        <div class="ty-errmsg ">
                                            {this.state.showTrainingEndDate ? <div >Please fill out Training End Date field * </div> : null}
                                            {this.state.showInvalidDate ? <div > Training End Date greater than Start Date * </div> : null}
                                        </div>
                                    </div>

                                </div>
                                <div class="form-row mt-3" style={{ marginLeft: "-3%" }}>
                                    <div class="form-group col-md-4 ty-font user-input-wrp"> <br />
                                        <input type="text" class="form-control  inputText" id="courseName" onKeyPress={this.hideCourseName} onChange={(event) => {
                                            this.setState({
                                                courseName: event.target.value
                                            })
                                        }} required />
                                        <span class="floating-label">Course Name</span>
                                        <div class="ty-errmsg ">
                                            {this.state.showCourseName ? <div >Enter Course Name * </div> : null}
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4 ty-font user-input-wrp"> <br />
                                        <input type="text" class="form-control  inputText" id="branchName" onKeyPress={this.hideBranchName} onChange={(event) => {
                                            this.setState({
                                                branchName: event.target.value
                                            })
                                        }} required />
                                        <span class="floating-label">Branch Name</span>
                                        <div class="ty-errmsg ">
                                            {this.state.showBranchName ? <div >Enter Branch Name * </div> : null}
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4 ty-font user-input-wrp"> <br />
                                        <input type="text" class="form-control  inputText" id="branchLocation" onKeyPress={this.hideBranchLocation} onChange={(event) => {
                                            this.setState({
                                                branchLocation: event.target.value
                                            })
                                        }} required />
                                        <span class="floating-label">Branch Location</span>
                                        <div class="ty-errmsg ">
                                            {this.state.showBranchLocation ? <div >Enter Branch Location * </div> : null}
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
export default withRouter(InputTrainingCommitLetter)