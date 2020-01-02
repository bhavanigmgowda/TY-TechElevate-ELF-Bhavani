import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import $ from 'jquery'
import { withRouter } from 'react-router-dom';
import moment from 'moment';

export class InputOffer2Letter extends Component {


    constructor(props) {
        super(props);
        this.state = {
            name: '',
            fatherName: '',
            age: '',
            address: '',
            designation: '',
            offerValidity: '',
            companyLocation: '',
            salary: '',
            date: '',
            salute:'S/o',
            withWaterMark:false,
            withHeader:false,

            // validation variable
            showName: '',
            showfatherName: '',
            showAge: '',
            showAddress: '',
            showDesignation: '',
            showCompanyLocation: '',
            showOfferValidity: '',
            showSalary: "",
            showInvalidDate: ''

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
                let name = (document.getElementById("name").value).trim();
                let fatherName = (document.getElementById("fatherName").value).trim();
                let designation = (document.getElementById("designation").value).trim();
                let companyLocation = (document.getElementById("companyLocation").value).trim();
                let offerValidity = (document.getElementById("offerValidity").value).trim();
                let address = (document.getElementById("address").value).trim();
                let age = (document.getElementById("age").value).trim();
                let salary = (document.getElementById("salary").value).trim();
                let selectedDate = new Date(offerValidity).setHours(23);
                let TodaysDate = new Date()






                if (offerValidity === "") {
                    that.setState({ showOfferValidity: true })
                }
                if (salary === "") {
                    that.setState({ showSalary: true })
                }
                if (companyLocation === "") {
                    that.setState({ showCompanyLocation: true })
                }
                if (designation === "") {
                    that.setState({ showDesignation: true })
                }
                if (age === "") {
                    that.setState({ showAge: true })
                }
                if (address === "") {
                    that.setState({ showAddress: true })
                }


                if (fatherName === "") {
                    that.setState({ showFatherName: true })
                }
                if (name === "") {
                    that.setState({ showName: true })
                }


                if (selectedDate < TodaysDate) {
                    that.setState({
                        showInvalidDate: "true"
                    })

                    return false;
                }

                if (designation != "" && companyLocation != "" && name != "" && offerValidity !== "" && fatherName != "" && age != "" && address != "" && salary != "") {
                    console.log("True return")
                    return true;

                }
                else {
                    console.log("false")
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



    pass = (event) => {
        event.preventDefault();
        console.log("data========", this.state)

        this.props.clicked(this.state)
        this.props.history.push('/Offerletter2')
    }


    hideEmployeeName = () => {
        this.setState({
            showName: false
        })
    }
    hideFatherName = () => {
        this.setState({
            showFatherName: false
        })
    }
    hideAddress = () => {
        this.setState({
            showAddress: false
        })
    }
    hideAge = () => {
        this.setState({
            showAge: false
        })
    }
    hideSalary = () => {
        this.setState({
            showSalary: false
        })
    }

    hideOfferValidity = () => {
        this.setState({
            showOfferValidity: false
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
            showInvalidDate: false
        })
    }

   

    render() {
        return (
            <div>
                <Home buttonShow={false} />
                <div>
                    <label for="title" class="ty-font heading col-lg-4 col-md-12 col-sm-12  col-12  offset-4 mt-5" style={{ left: "0px" }}>Offer Letter</label>

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
                                        <input type="text" class="form-control  inputText" id="name" onKeyPress={this.hideEmployeeName} onChange={(event) => {
                                            this.setState({
                                                name: event.target.value
                                            })
                                        }} required />
                                        <span class="floating-label"> Name</span>

                                        <div class="ty-errmsg ">
                                        {this.state.showName ? <div>Please fill out Name field * </div> : null}
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row mt-3">
                                    <div class="form-group col-md-6 ty-font user-input-wrp"> <br />
                                        <input type="text" class="form-control  inputText" id="fatherName" onKeyPress={this.hideFatherName} onChange={(event) => {
                                            this.setState({
                                                fatherName: event.target.value
                                            })
                                        }} required />
                                        <span class="floating-label">Father Name</span>

                                        <div class="ty-errmsg ">
                                        {this.state.showFatherName ? <div >Please fill out Father Name field * </div> : null}
                                        </div>
                                    </div>
                                    <div class="form-group col-md-6 ty-font user-input-wrp"> <br />
                                        <input type="text" class="form-control  inputText" id="address" onKeyPress={this.hideAddress} onChange={(event) => {
                                            this.setState({
                                                address: event.target.value
                                            })
                                        }} required />
                                        <span class="floating-label">Address</span>
                                        <div class="ty-errmsg ">
                                        {this.state.showAddress ? <div >Please fill out Address field * </div> : null}
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
                                        <input type="text" class="form-control  inputText" id="salary" onKeyPress={this.hideSalary} onChange={(event) => {
                                            this.setState({
                                                salary: event.target.value
                                            })
                                        }} required />
                                        <span class="floating-label">Salary</span>
                                        <div class="ty-errmsg ">
                                        {this.state.showSalary ? <div >Please fill out Salary field * </div> : null}
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row  mt-3">
                                    <div class="form-group col-md-12 ty-font user-input-wrp" style={{    marginLeft: "-2%"}}><br />
                                        <input class="form-control inputText" onClick={() => { this.hideOfferValidity(); this.hideInvalidDate() }} onKeyPress={() => { this.hideInvalidDate() }}  id="offerValidity" name="offerValidity"
                                            required
                                            onChange={(event) => {
                                                this.setState({
                                                    offerValidity: event.target.value
                                                }); this.hideOfferValidity(); this.hideInvalidDate();
                                            }}
                                            onFocus={(e) => e.target.type = 'date'}
                                            onBlur={(e) => e.target.type = "text"}
                                        />
                                        <span class="floating-label">Offer Validity</span>
                                        <div class="ty-errmsg ">
                                        {this.state.showOfferValidity ? <div >Please fill out Offer Validity field * </div> : null}
                                                    {this.state.showInvalidDate ? <div >Offer Date must be greater or equal to today's date* </div> : null}
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
export default withRouter(InputOffer2Letter)


