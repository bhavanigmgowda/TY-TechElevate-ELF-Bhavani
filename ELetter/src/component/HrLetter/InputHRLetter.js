import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import { withRouter } from 'react-router-dom';
import $ from 'jquery'
import moment from 'moment';

export class InputHRLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            salute:'Mr.',
            employeeName: '',
            employeeId: '',
            joiningDate: '',
            date: '',
            CIN: '',
            designation: '',
            withWaterMark:false,
            withHeader:false,
            gender : {
                gender1:'He',
                gender2:'him',
                gender3:'his'
            },

            // valiadation state variables
            showEmployeeName: '',
            showEmployeeId: '',
            showJoiningDate: '',
            showDate: '',
            showCIN: '',
            showDesignation: '',
            validDate:''
        }
    }
    componentDidMount(){
        
    }
    validate=()=> {

        var that = this;
  
                debugger
                console.log("inside CDM")
                debugger;
        
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
                    date:  today
                })

                var d = new Date();
                 console.log("Date =",d.setMonth(d.getMonth() +7))
                
                console.log("dattetaetaetaet ",this.state)
                if (this.state.salute === "Ms." || this.state.salute === "Mrs.") {
                    this.setState({
                        ...this.state,
                        gender : {
                            gender1:'She',
                            gender2:'her',
                            gender3:'her' 
                        }
                    })
                 }

               
                 let joiningDate = (document.getElementById("joiningDate").value).trim();
                 let designation = (document.getElementById("designation").value).trim();
                 let employeeId = (document.getElementById("employeeId").value).trim();
                 let employeeName = (document.getElementById("employeeName").value).trim();
                 let selectedDate =new Date(joiningDate)
                 let now = new Date()
                 
                 console.log("Inside Validation", joiningDate, employeeName,designation,employeeId);
 
                
                 if (joiningDate === "") {
                     this.setState({ showJoiningDate: true })
                 }
                 if (designation === "") {
                     this.setState({ showDesignation: true })
                 }
                 if (employeeId === "") {
                     this.setState({ showEmployeeId: true })
                 }
                 if (employeeName === "") {
                     this.setState({ showEmployeeName: true })
                 }

              /*    if(selectedDate<now){
                    that.setState({
                       validDate:"true"
                    }) 

                   return false;
              }  */

                   
                 if ( joiningDate != "" && designation != "" && employeeId != "" && employeeName !== "") {
                    
                     console.log("True return")
                     return true;
                 }
                 else {
                     return false;
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
    hideCIN = () => {
        this.setState({
            showCIN: false
        })
    }
    hideDesignation = () => {
        this.setState({
            showDesignation: false
        })
    }
    hideInvaliddate=()=>{
        this.setState({
            validDate: false
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
     getData(data){
         console.log("data getaaaaaaaaaaaaaaaaaaaaaaa",data);
     }

    pass = (event) => {
        event.preventDefault();
        console.log("data========", this.state)
        this.props.clicked(this.state)
       this.props.history.push('/hrLetter')
    }
    render() {
      if(this.props.getDataOfLetter){
        this.getData(this.props.getDataOfLetter);
      }
        return (
            <div>
                debugger
                <Home buttonShow={false}  backDataGet={(data) =>console.log("dataaaaaaaaaaaa")}/>
{console.log("aaaaaaaaaaaaaaaaaaaa",   this.props.getDataOfLetter)}
                <div>
                    <label for="title" class="ty-font heading col-lg-4 col-md-12 col-sm-12  col-12  offset-4 mt-5" style={{ left: "0px" }}>HR Letter</label>

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
                                    <div class="form-group col-md-6 ty-font user-input-wrp"> <br />
                                        <input type="text" class="form-control  inputText" id="employeeId" onKeyPress={this.hideEmployeeId} onChange={(event) => {
                                            this.setState({
                                                employeeId: event.target.value
                                            })
                                        }} required />
                                        <span class="floating-label">Employee Id</span>

                                        <div class="ty-errmsg ">
                                        {this.state.showEmployeeId ? <div >Please fill out ID field * </div> : null}
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
                                    <div class="form-group col-md-12 ty-font user-input-wrp" style={{    marginLeft: "-2%"}}><br />
                                        <input class="form-control inputText" onClick={()=>{this.hideJoiningDate();this.hideInvaliddate()}} onKeyPress={()=>{this.hideJoiningDate();this.hideInvaliddate()}}  id="joiningDate" name="joiningDate"
                                            required
                                            onChange={(event) => {
                                                this.setState({
                                                    joiningDate: event.target.value
                                                });this.hideJoiningDate();this.hideInvaliddate();
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

export default withRouter(InputHRLetter)