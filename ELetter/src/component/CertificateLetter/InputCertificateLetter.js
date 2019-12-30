import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import $ from 'jquery'
import NavBar from '../Navbar/NavBar';
import '../FormCss.css'
export class InputCertificateLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {},
            employeeName: '',
            companyLocation: '',
            certificateType: '',
            date: '',
            checkedPUC: '',
            checkedSSC: '',
            CheckedDegree: '',
            withWaterMark: false,
            withHeader: false,

            //validation variable

            showEmployeeName: '',
            showCompanyLocation: '',
            showCertificateType: '',
            showOthers: false,
            showOthers: false,
        }
    }

    componentDidMount() {




        if ($('#puc').is(":checked")) {

            console.log("Checked puc")
            this.setState({
                checkedPUC: 'PUC'
            })

        }


        let that = this;
        $(document).ready(function () {
            $('#generate').click(function (e) {
                debugger;


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
                that.setState({
                    date: currentdate
                })


                let companyLocation = (document.getElementById("companyLocation").value).trim();
                let employeeName = (document.getElementById("employeeName").value).trim();


                if (companyLocation === "") {
                    that.setState({ showCompanyLocation: true })
                }



                if (employeeName === "") {
                    that.setState({ showEmployeeName: true })
                }

                if (companyLocation != "" && employeeName !== "") {
                    console.log("True return")
                    return true;
                }
                else {
                    return false;
                }
            });
        });
    }


    hideEmployeeName = () => {
        this.setState({
            showEmployeeName: false
        })
    }
    hideCompanyLocation = () => {
        this.setState({
            showCompanyLocation: false
        })
    }

    hideCertificateType = () => {
        this.setState({
            showCertificateType: false
        })
    }


    pass = (event) => {
        event.preventDefault();
        console.log("data========", this.state)

        this.props.clicked(this.state)
        this.props.history.push('/certificateLetter')

    }

    CheckValue = () => {

        if (document.getElementById("puc").checked === true) {

            this.setState({
                checkedPUC: 'PUC'
            })

        }

        if (document.getElementById("ssc").checked === true) {

            this.setState({
                checkedSSC: 'SSC'
            })

        }
        if (document.getElementById("degree").checked === true) {

            this.setState({
                checkedDegree: 'Degree'
            })

        }



        if (document.getElementById("checkOthers").checked === true) {

            this.setState({
                showOthers: true
            })

        }
        else {
            this.setState({
                showOthers: false
            })
        }



        /* if(x === "on") {
            setValue(!value)
            console.log("check box value ", value  ,"And",!value);
            props.showWatermark(value);
        } */

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

                <NavBar buttonShow={false} />


                <div>
        <div>
          <label for="title" class="ty-font heading  col-lg-4 col-md-6 col-sm-6  col-6  offset-4 mt-5">Certificate Letter</label>

          <div class="card col-lg-4 col-md-6 col-sm-6  col-6  offset-4 mt-5">
            <div class="card-body col-lg-10 col-md-10">
              <form action="" method="post" onSubmit={this.submituserRegistrationForm} >
                <div class="form-row mt-3">
                  <div class="form-group col-md-6 ty-font user-input-wrp"> <br />
                    <input type="text" class="form-control  inputText" onChange={this.handleChange} id="client" name="client"
                      required />
                    <span class="floating-label">Client </span>
                    <div class="ty-errmsg ">
                      <div> {this.state.errors.client} </div>
                    </div>
                  </div>
                  <div class="col-md-6 ty-font left user-input-wrp" id="billdesc"><br />
                    <select class="custom-select inputText" id="test" name="technology" onChange={this.handleChange} required >
                      <option selected disabled value="">Choose Priority</option>
                      <option class="non" value="option1">Critical</option>
                      <option class="non" value="option2">High</option>
                      <option class="non" value="option1">Medium</option>
                      <option class="editable" value="other">Low</option>
                    </select>
                    <input class="ty-editOption" style={{ display: "none" }} onChange={this.handleChange} placeholder="technology" name="technology" />
                    <div class="ty-errmsg ">
                      <div > {this.state.errors.technology} </div>
                    </div>
                  </div>
                </div>
                <div class="form-row mt-3">

                  <div class="form-group col-md-6 ty-font user-input-wrp"> <br />
                    <select class="form-control  inputText" id="batchtype" name="batchtype"
                      required onChange={this.handleChange} >
                      <span class="floating-label">Client Name</span>

                      <option value="" selected disabled hidden >Batchtype</option>
                      <option>Paid</option>
                      <option value="other">Free</option>
                    </select>
                    <div class="ty-errmsg ">
                      <div >{this.state.errors.batchtype} </div>
                    </div>
                  </div>
                  <div class="form-group col-md-6 ty-font left user-input-wrp"><br />
                    <input type="number" class="form-control   inputText" id="province" name="fees"
                      required onChange={this.handleChange} />
                    <span class="floating-label">Fees</span>
                    <div class="ty-errmsg ">
                      <div > {this.state.errors.fees}</div>
                    </div>

                  </div>
                </div>
                <div class="form-row mt-3">

                  <div class="form-group col-md-6 ty-font user-input-wrp"><br />
                    <input type="number" class="form-control  inputText" onChange={this.handleChange} id="input" name="cost" required />
                    <span class="floating-label">Cost per candidate</span>
                    <div class="ty-errmsg ">
                      <div > {this.state.errors.cost}</div>
                    </div>
                  </div>
                  <div class="form-group col-md-6 ty-font left user-input-wrp"><br />
                    <input type="text" class="form-control  inputText" onChange={this.handleChange} id="input" name="location"
                      required />
                    <span class="floating-label">Location</span>
                    <div class="ty-errmsg ">
                      <div > {this.state.errors.location} </div>
                    </div>
                  </div>
                </div>
                <div class="form-row mt-3">

                  <div class="form-group col-md-6 ty-font user-input-wrp"><br />

                    <input class="form-control inputText" onChange={this.handleChange} id="input" name="startdate"
                      required
                      onFocus={(e) => e.target.type = 'date'}
                      onBlur={(e) => e.target.type = "text"}
                    />
                    <span class="floating-label">Start Date</span>

                    <div class="ty-errmsg ">
                      <div> {this.state.errors.startdate} </div>
                    </div>
                  </div>

                  <div class="form-group col-md-6 ty-font left user-input-wrp"><br />

                    <input class="form-control inputText" onChange={this.handleChange} id="input" name="enddate"
                      required
                      type='text'
                      onFocus={(e) => e.target.type = 'date'}
                      onBlur={(e) => e.target.type = "text"}
                    />
                    <span class="floating-label">End Date</span>
                    <div class="ty-errmsg ">
                      <div > {this.state.errors.enddate} </div>
                    </div>
                  </div>




                </div>

                <div class="form-row mt-3">

                  <div class="form-group col-md-6 ty-font user-input-wrp"><br />
                    <select class="form-control  inputText" id="input" name="traineetype" onChange={this.handleChange}
                      required>
                      <option value="" selected disabled hidden>Select Trainee type</option>
                      <option>Freshers </option>
                      <option>Lateral</option>
                      <option>Mixed</option>
                    </select>
                    <div class="ty-errmsg ">
                      <div > {this.state.errors.traineetype} </div>
                    </div>
                  </div>
                  <div class="form-group col-md-6 ty-font left user-input-wrp"><br />
                    <input type="text" class="form-control inputText " id="input" name="invoice" onChange={this.handleChange}
                      required onfocus="this.type='date' " onblur="this.type='text'" />
                                          <span class="floating-label">Invoice</span>

                    <div class="ty-errmsg ">
                      <div > {this.state.errors.invoice} </div>
                    </div>
                  </div>
                </div>
                <div class="form-row mt-3">
                  <div class="form-group col-md-6 ty-font user-input-wrp"><br />
                    <div class="form-check float-left">
                      <input class="form-check-input" onChange={this.handleChange} type="radio" name="exampleRadios" id="exampleRadios1" value="option1"
                        checked />
                      <label class="form-check-label" for="exampleRadios1">
                        HTD
               </label>
                    </div>
                    <div class="form-check float-left">
                      <input class="form-check-input" onChange={this.handleChange} type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                      <label class="form-check-label" for="exampleRadios2">
                        ELF
               </label>
                    </div>
                  </div>
                  <div class="form-group col-md-6 ty-font left user-input-wrp"><br />
                    <div class="form-check ">
                      <input class="form-check-input" onChange={this.handleChange} type="checkbox" value="" id="defaultCheck1" />
                      <label class="form-check-label" for="defaultCheck1">
                        Online Training
               </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" onChange={this.handleChange} type="checkbox" value="" id="defaultCheck1" />
                      <label class="form-check-label" for="defaultCheck1">
                        Offline Training
               </label>
                    </div>
                  </div>
                </div>
                <div class="float-right ty-create-button">
                  <button type="submit" class="btn btn-outline-primary ty-font" onClick={this.submituserRegistrationForm}>Create</button></div>
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
export default withRouter(InputCertificateLetter)
