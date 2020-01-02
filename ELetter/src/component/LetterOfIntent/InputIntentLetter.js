import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import $ from 'jquery'
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import '../CommonStyle.css'
export default class InputIntentLetter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            employeeName: '',
            designation: '',
            companyLocation: '',
            reportingManager: '',
            joiningDate: '',
            trainingStartDate: '',
             withWaterMark:false,
             withHeader:false,
            // form validation variable

            showEmployeeName: '',
            showDesignation: '',
            showCompanyLocation: '',
            showReportingManager: '',
            showJoiningDate: '',
            showTrainingStartDate: '',

        }

    }

    validate=()=> {
        var that = this;
                let employeeName = (document.getElementById("employeeName").value).trim();
                let designation = (document.getElementById("designation").value).trim();
                let companyLocation = (document.getElementById("companyLocation").value).trim();
                let reportingManager = (document.getElementById("reportingManager").value).trim();
                //  let joiningDate = (document.getElementById("joiningDate").value).trim();
                let trainingStartDate = (document.getElementById("trainingStartDate").value).trim();


                if (trainingStartDate === "") {
                    that.setState({ showTrainingStartDate: true })
                }
                if (reportingManager === "") {
                    that.setState({ showReportingManager: true })
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

                /*  if(selectedDate<TodaysDate){
                     that.setState({
                         showInvalidDate:"true"
                     })
 
                    return false;
               }    */

                if (designation != "" && companyLocation != "" && employeeName != "" && reportingManager !== "" && trainingStartDate != '') {
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
        this.props.history.push('/IntentLetter')
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
    hideCompanyLocation = () => {
        this.setState({
            showCompanyLocation: false
        })
    }
    hidereportingManager = () => {
        this.setState({
            showReportingManager: false
        })
    }
    hideJoiningDate = () => {
        this.setState({
            showJoiningDate: false
        })
    }

    hideTrainingStartDate = () => {
        this.setState({
            showTrainingStartDate: false
        })
    }




    hideInvalidDate = () => {
        this.setState({
            showInvalidDate: false
        })
    }

    onCheckHandler=(event)=>{
        debugger;

         console.log("Checkbox value ==",event.target.value)
       if(event.target.value=='false'){
           this.setState({
               withWaterMark:true
           })
           console.log("if  ==",this.state.withWaterMark)
       }
       else{
           debugger;
           this.setState({
               withWaterMark: false
           })
           console.log("else  ==",this.state.withWaterMark)

       }
    }
    onChangeHeader=(event)=>{

        debugger;

        console.log("Checkbox value ==",event.target.value)
      if(event.target.value=='false'){
          this.setState({
              withHeader:true
          })
          console.log("if  ==",this.state.withHeader)
      }
      else{
          debugger;
          this.setState({
              withHeader: false
          })
          console.log("else  ==",this.state.withHeader)

      }


     }
     
     onChangeHeader=(event)=>{

        debugger;

        console.log("Checkbox value ==",event.target.value)
      if(event.target.value=='false'){
          this.setState({
              withHeader:true
          })
          console.log("if  ==",this.state.withHeader)
      }
      else{
          debugger;
          this.setState({
              withHeader: false
          })
          console.log("else  ==",this.state.withHeader)

      }


     }





    render() {
        return (
            <div>
                <div>
                    <Home buttonShow={false} />


                    <div>
                    <label for="title" class="ty-font heading col-lg-4 col-md-12 col-sm-12  col-12  offset-4 mt-5" style={{ left: "0px" }}>Intent Letter</label>
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
                           
                                    <div class="form-group col-md-6 ty-font user-input-wrp"> <br />
                                        <input type="text" id="companyLocation" class="form-control  inputText" onKeyPress={this.hideCompanyLocation} onChange={(event) => {
                                            this.setState({
                                                companyLocation: event.target.value
                                            })
                                        }} required />
                                        <span class="floating-label">Company Location</span>
                                        <div class="ty-errmsg ">
                                            {this.state.showCompanyLocation ? <div>Please fill out company Location field * </div> : null}
                                        </div>
                                    </div>
                                    <div class="form-group col-md-6 ty-font user-input-wrp"> <br />
                                        <input type="text" id="reportingManager" class="form-control  inputText" onKeyPress={this.hidereportingManager} onChange={(event) => {
                                            this.setState({
                                                reportingManager: event.target.value
                                            })
                                        }} required />
                                        <span class="floating-label">Reporting Manager</span>

                                        <div class="ty-errmsg ">
                                        {this.state.showReportingManager ? <div >Please fill out Reporting Manager field * </div> : null}
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row  mt-3">
                                    <div class="form-group col-md-12 ty-font user-input-wrp" style={{    marginLeft: "-2%"}}><br />
                                        <input class="form-control inputText" onKeyPress={this.hideTrainingStartDate}  id="trainingStartDate" name="trainingStartDate"
                                            required
                                            onChange={(event) => {
                                                this.setState({
                                                    trainingStartDate: event.target.value
                                                }); this.hideTrainingStartDate();
                                            }}
                                            onFocus={(e) => e.target.type = 'date'}
                                            onBlur={(e) => e.target.type = "text"}
                                        />
                                        <span class="floating-label">Training Start Date</span>
                                        <div class="ty-errmsg ">
                                        <div className="col-12 p-0">
                                            {this.state.showTrainingStartDate ? <div>Please fill out Training Start Date  field * </div> : null}</div>
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
            </div>
        )
    }
}
