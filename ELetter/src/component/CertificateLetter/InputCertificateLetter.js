import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import { withRouter } from 'react-router-dom';
import $ from 'jquery'
import { MDBFormInline } from 'mdbreact';
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

    validate=()=> {




        if ($('#puc').is(":checked")) {

            console.log("Checked puc")
            this.setState({
                checkedPUC: 'PUC'
            })

        }


        let that = this;
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
                    <label for="title" class="ty-font heading col-lg-4 col-md-12 col-sm-12  col-12  offset-4 mt-5" style={{ left: "0px" }}>Certificate Letter</label>

                    <div class="card container mt-5 mt-5" style={{width: "600px"}}>                        <div class="card-body col-lg-10 col-md-10">
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
                                </div>

                                <div class="form-row mt-3">
                                    <div className="col-3">
                                        <div class="form-check" >
                                            <input type="checkbox" value={this.state.checkedDegree} class="form-check-input" for="defaultCheck1" id="ssc" onChange={(event) => {
                                                this.CheckValue(event)
                                            }} />
                                            <label style={{ whiteSpace: 'nowrap' }} htmlFor="ssc" class="form-check-label" for="defaultCheck1">ssc</label>
                                        </div>

                                    </div>
                                    <div className="col-3">
                                        <div class="form-check" >
                                            <input type="checkbox" value={this.state.checkedDegree} class="form-check-input" for="defaultCheck1" id="puc" onChange={(event) => {
                                                this.CheckValue(event)
                                            }} />
                                            <label style={{ whiteSpace: 'nowrap' }} htmlFor="puc" class="form-check-label" for="defaultCheck1">PUC</label>
                                        </div>

                                    </div>

                                    <div className="col-3">
                                        <div class="form-check" >
                                            <input type="checkbox" value={this.state.checkedDegree} class="form-check-input" for="defaultCheck1" id="degree" onChange={(event) => {
                                                this.CheckValue(event)
                                            }} />
                                            <label style={{ whiteSpace: 'nowrap' }} htmlFor="degree" class="form-check-label" for="defaultCheck1">Degree</label>
                                        </div>

                                    </div>
                                    <div class="form-check" >
                                        <div className="custom-control custom-checkbox custom-control-inline col-6">
                                            <input type="checkbox" class="form-check-input" for="defaultCheck1" id="checkOthers" onClick={this.CheckValue} onChange={this.dataValue} />
                                            <label style={{ whiteSpace: 'nowrap' }} htmlFor="checkOthers" class="form-check-label" for="defaultCheck1">Other</label>
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
export default withRouter(InputCertificateLetter)
