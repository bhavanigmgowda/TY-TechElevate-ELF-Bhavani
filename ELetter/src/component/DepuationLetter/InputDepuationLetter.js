import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import { withRouter } from 'react-router-dom';
import $ from 'jquery'
import moment from 'moment';
export class InputDepuationLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeName: '',
            clientName: '',
            clientLocation: '',
            contactPerson: '',
            reportingDate: '',
            reportingTime: '',
            date: '',
            withWaterMark:false,
            withHeader:false,

            // validation variable
            showEmployeeName: '',
            showcontactPerson: '',
            showClientName: '',
            showClientLocation: '',
            showReportingDate: '',
            showReportingTime: '',
            showInvalidDate:''


        }
    }


    hideEmployeeName = () => {
        this.setState({
            showEmployeeName: false
        })
    }
    hideContactPerson = () => {
        this.setState({
            showcontactPerson: false
        })
    }
    hideClientName = () => {
        this.setState({
            showClientName: false
        })
    }
    hideClientLocation = () => {
        this.setState({
            showClientLocation: false
        })
    }
    hideReportingDate = () => {
        this.setState({
            showReportingDate: false
        })
    }
    hideReportingTime = () => {
        this.setState({
            showReportingTime: false
        })
    }

    hideInvalidDate = () => {
        this.setState({
            showInvalidDate: false
        })
    }



    validate=()=> {

            const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];


      const nth = (d)=> {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
          case 1:  return "st";
          case 2:  return "nd";
          case 3:  return "rd";
          default: return "th";
        }
      }

        let today = new Date();
        let currentdate = today.getDate()+nth(today.getDate()) + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
        this.setState({
            date:  currentdate
        })

        var that = this;
    
                let employeeName = (document.getElementById("employeeName").value).trim();
                let clientName = (document.getElementById("clientName").value).trim();
                let clientLocation = (document.getElementById("clientLocation").value).trim();
                let contactPerson = (document.getElementById("contactPerson").value).trim();
                let reportingDate = (document.getElementById("reportingDate").value)
                let reportingTime = (document.getElementById("reportingTime").value).trim();
                let selectedDate =new Date(reportingDate).setHours(23);
                let TodaysDate = new Date();
      
                 console.log("selected date =",selectedDate)
                 console.log("TodaysDate date =",TodaysDate)

                if (reportingTime === "") {
                    that.setState({ showReportingTime: true })
                }
                if (reportingDate === "") {
                    that.setState({ showReportingDate: true })
                }
                if (contactPerson === "") {
                    that.setState({ showcontactPerson: true })
                }

                if (clientLocation === "") {
                    that.setState({ showClientLocation: true })
                }
                if (clientName === "") {
                    that.setState({ showClientName: true })
                }
                if (employeeName === "") {
                    that.setState({ showEmployeeName: true })
                }

                console.log("dateeeeeeeeeeeee",)
                
                 let diff=selectedDate-TodaysDate
                 if(diff<0){
                    that.setState({
                        showInvalidDate:"true"
                    })

                   return false;
              }     

                if (reportingTime != "" && reportingDate != "" && contactPerson != "" && clientLocation !== "" && clientName != "" && employeeName != '') {
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
        this.props.history.push('/DepuationLetter')
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

    render() {
        return (
            <div>
                <Home buttonShow={false} />
                <div>
                    <label for="title" class="ty-font heading col-lg-4 col-md-12 col-sm-12  col-12  offset-4 mt-5" style={{ left: "0px" }}>Depuation Letter</label>

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
                                        <input type="text" class="form-control  inputText" id="clientName" onKeyPress={this.hideClientName} onChange={(event) => {
                                            this.setState({
                                                clientName: event.target.value
                                            })
                                        }} required />
                                        <span class="floating-label">Client Name</span>
                                        <div class="ty-errmsg ">
                                        {this.state.showClientName ? <div >Please fill Client Name field * </div> : null}
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row mt-3">
                                    <div class="form-group col-md-6 ty-font user-input-wrp"> <br />
                                        <input type="text" class="form-control  inputText" id="clientLocation" onKeyPress={this.hideClientLocation} onChange={(event) => {
                                            this.setState({
                                                clientLocation: event.target.value
                                            })
                                        }} required />
                                        <span class="floating-label">Client Location</span>

                                        <div class="ty-errmsg ">
                                            {this.state.showClientLocation ? <div > Please fill out Client Location field * </div> : null}
                                        </div>
                                    </div>
                                    <div class="form-group col-md-6 ty-font user-input-wrp"> <br />
                                        <input type="text" class="form-control  inputText" id="contactPerson" onKeyPress={this.hideContactPerson} onChange={(event) => {
                                            this.setState({
                                                contactPerson: event.target.value
                                            })
                                        }} required />
                                        <span class="floating-label">Contact Person</span>
                                        <div class="ty-errmsg ">
                                        {this.state.showcontactPerson ? <div >Please fill out Contact Person field * </div> : null}
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row mt-3">
                                    <div class="form-group col-md-6 ty-font user-input-wrp"><br />

                                        <input class="form-control inputText" onKeyPress={()=>{this.hideReportingDate();this.hideInvalidDate()}} onClick={()=>{this.hideReportingDate();this.hideInvalidDate()}} id="reportingDate" name="reportingDate"
                                            required
                                            onChange={(event) => {
                                                this.setState({
                                                    reportingDate: event.target.value
                                                }); this.hideReportingDate();this.hideInvalidDate();
                                            }}
                                            onFocus={(e) => e.target.type = 'date'}
                                            onBlur={(e) => e.target.type = "text"}
                                        />
                                        <span class="floating-label">Reporting Date</span>

                                        <div class="ty-errmsg ">
                                            {this.state.showReportingDate ? <div>Please fill out Reporting Date field * </div> : null}

                                        </div>
                                    </div>
                                    <div class="form-group col-md-6 ty-font user-input-wrp"> <br />
                                        <input type="text" id="reportingTime" class="form-control  inputText" onKeyPress={this.hideReportingTime} onClick={this.hideReportingTime} onChange={(event) => {
                                            this.setState({
                                                reportingTime: event.target.value
                                            });this.hideReportingTime();
                                        }}    onFocus={(e) => e.target.type = 'time'}
                                        onBlur={(e) => e.target.type = "text"} required />
                                        <span class="floating-label">Reporting Time</span>
                                        <div class="ty-errmsg ">
                                            {this.state.showReportingTime ? <div >Please fill out Reporting Time field * </div> : null}
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

export default withRouter(InputDepuationLetter)