import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import { withRouter } from 'react-router-dom';
import $ from 'jquery'
import moment from 'moment';
export class InputRelivingLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            salute: 'Mr.',
            employeeName: '',
            employeeId: '',
            designation: '',
            joiningDate: '',
            relievingDate: '',
            withWaterMark:false,
            withHeader:false,
            date: '',
            gender: { gender1:'He',
            gender2:'his',
            gender3:'him'
        },
        showEmployeeName: '',
        showEmployeeId:'',
        showDesignation: '',
        showJoiningDate: '',
        showRelievingDate: '',
        showinvalidDate:''
        }
    }

    validate=()=> {

        let that = this;
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
                that.setState({
                    date:  currentdate
                })
        

                if (that.state.salute === "Ms." || that.state.salute === "Mrs.") {
                    that.setState({
                        ...that.state,
                        gender : {
                            gender1:'She',
                            gender2:'her',
                            gender3:'her' 
                        }
                    })
                 }
                 let employeeName = (document.getElementById("employeeName").value).trim();
                 let employeeId = (document.getElementById("employeeId").value).trim();
                 let designation = (document.getElementById("designation").value).trim();
                 let joiningDate = (document.getElementById("joiningDate").value).trim();
                 let relievingDate = (document.getElementById("relievingDate").value).trim();
                 let selectedJoiningDate = new Date(joiningDate)
                let selectedrelievingDate =new Date(relievingDate)
 
                 if (employeeId === "") {
                     that.setState({ showEmployeeId: true })
                 }
                 if (designation === "") {
                     that.setState({ showDesignation: true })
                 }
                 if (employeeName === "") {
                     that.setState({ showEmployeeName: true })
                 }
 
                 if (joiningDate === "") {
                     that.setState({ showJoiningDate: true })
                 }
                 if (relievingDate === "") {
                     that.setState({ showRelievingDate: true })
                 }


                 if(selectedrelievingDate<selectedJoiningDate){
                    that.setState({
                       showinvalidDate:true
                    }) 

                   return false;
              } 
                
 
                 if (employeeId != "" && designation != "" && employeeName != "" && joiningDate !== "" &&  relievingDate!="" ) {
                     console.log("True return")
                     return true;
 
                 }
                 else {
                     return false;
                 }
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
    hideDesignation = () => {
        this.setState({
            showDesignation: false
        })
    }
   
    hideJoiningDate = () => {
        this.setState({
            showJoiningDate: false
        })
    }
    hideRelievingDate = () => {
        this.setState({
            showRelievingDate: false
        })
    }
    hideInvalidDate=()=>{
        this.setState({
            showinvalidDate:false
        })
    }


    pass = (event) => {
        event.preventDefault();
        console.log("data========", this.state)

        this.props.clicked(this.state)
        this.props.history.push('/RelivingLetter')

    }





    render() {
        return (
            <div>
                <Home buttonShow={false} />

                <div>
                    <label for="title" class="ty-font heading col-lg-4 col-md-12 col-sm-12  col-12  offset-4 mt-5" style={{ left: "0px" }}>Relieving Letter</label>

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
                                <div class="form-row mt-3">
                                    <div class="form-group col-md-6 ty-font user-input-wrp"><br />
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
                                        {this.state.showJoiningDate ? <div >Please fill out Joining Date field * </div> : null}
                                        </div>
                                    </div>
                                    <div class="form-group col-md-6 ty-font user-input-wrp"> <br />
                                        <input class="form-control inputText"  onClick={()=>{this.hideRelievingDate();this.hideInvalidDate()}} onKeyPress={()=>{this.hideRelievingDate();this.hideInvalidDate()}} id="relievingDate" name="relievingDate"
                                            required
                                            onChange={(event) => {
                                                this.setState({
                                                    relievingDate: event.target.value
                                                }); this.hideRelievingDate();this.hideInvalidDate()
                                            }}
                                            onFocus={(e) => e.target.type = 'date'}
                                            onBlur={(e) => e.target.type = "text"}
                                        />
                                        <span class="floating-label">Relieving Date</span>
                                        <div class="ty-errmsg ">
                                        {this.state.showRelievingDate ? <div >Please fill out Relieving Date field * </div> : null}
                                               {this.state.showinvalidDate ? <div >Relieving Date greater or equal to Joining Date * </div> : null}
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
export default withRouter(InputRelivingLetter)