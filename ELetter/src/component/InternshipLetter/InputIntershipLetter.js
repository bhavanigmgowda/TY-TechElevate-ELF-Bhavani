import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import { withRouter } from 'react-router-dom';
import $ from 'jquery'
import moment from 'moment';


export class InputIntershipLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            salute: 'Mr.',
            internName: '',
            internId: '',
            companyLocation: '',
            startDate: '',
            endDate: '',
            date: '',
            withWaterMark: false,
            withHeader: false,

            showinternName: '',
            showinternId: '',
            showcompanyLocation: '',
            showstartDate: '',
            showendDate: '',
            showinvalidDate: ''
        }
    }

    validate = () => {
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
        let internName = (document.getElementById("internName").value).trim();
        let internId = (document.getElementById("internId").value).trim();
        let companyLocation = (document.getElementById("companyLocation").value).trim();
        let startDate = (document.getElementById("startDate").value).trim();
        let endDate = (document.getElementById("endDate").value).trim();
        let selectedstartDate = new Date(startDate)
        let selectedendDate = new Date(endDate)

        if (internId === "") {
            that.setState({ showinternId: true })
        }
        if (companyLocation === "") {
            that.setState({ showcompanyLocation: true })
        }
        if (internName === "") {
            that.setState({ showinternName: true })
        }

        if (startDate === "") {
            that.setState({ showstartDate: true })
        }
        if (endDate === "") {
            that.setState({ showendDate: true })
        }


        if (selectedendDate < selectedstartDate) {
            that.setState({
                showinvalidDate: true
            })

            return false;
        }
        if (internId != "" && companyLocation != "" && internName != "" && startDate !== "" && endDate != "") {
            console.log("True return")
            return true;
        }
        else {
            return false;
        }
    }

    hideinternName = () => {
        this.setState({
            showinternName: false
        })
    }
    hideinternId = () => {
        this.setState({
            showinternId: false
        })
    }
    hidecompanyLocation = () => {
        this.setState({
            showcompanyLocation: false
        })
    }

    hidestartDate = () => {
        this.setState({
            showstartDate: false
        })
    }
    hideendDate = () => {
        this.setState({
            showendDate: false
        })
    }
    hideInvalidDate = () => {
        this.setState({
            showinvalidDate: false
        })
    }
    pass = (event) => {
        event.preventDefault();
        console.log("data========", this.state)

        this.props.clicked(this.state)
        this.props.history.push('/IntershipLetter')
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
                    <label for="title" class="ty-font heading col-lg-4 col-md-12 col-sm-12  col-12  offset-4 mt-5" style={{ left: "0px" }}>Intership Letter</label>

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
                                        <input type="text" class="form-control  inputText" id="internName" onKeyPress={this.hideinternName} onChange={(event) => {
                                            this.setState({
                                                internName: event.target.value
                                            })
                                        }} required />
                                        <span class="floating-label">Intern Name</span>

                                        <div class="ty-errmsg ">
                                            {this.state.showinternName ? <div>Please fill out Intern Name field * </div> : null}
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row mt-3">
                                    <div class="form-group col-md-6 ty-font user-input-wrp"> <br />
                                        <input type="text" class="form-control  inputText" id="internId" onKeyPress={this.hideinternId} onChange={(event) => {
                                            this.setState({
                                                internId: event.target.value
                                            })
                                        }} required />
                                        <span class="floating-label">Intern Id</span>

                                        <div class="ty-errmsg ">
                                            {this.state.showinternId ? <div>Please fill out Intern Id field * </div> : null}
                                        </div>
                                    </div>
                                    <div class="form-group col-md-6 ty-font user-input-wrp"> <br />
                                        <input type="text" class="form-control  inputText" id="companyLocation" onKeyPress={this.hidecompanyLocation} onChange={(event) => {
                                            this.setState({
                                                companyLocation: event.target.value
                                            })
                                        }} required />
                                        <span class="floating-label">companyLocation</span>
                                        <div class="ty-errmsg ">
                                            {this.state.showcompanyLocation ? <div >Please fill out companyLocation field * </div> : null}
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row mt-3">
                                    <div class="form-group col-md-6 ty-font user-input-wrp"><br />
                                        <input class="form-control inputText" onClick={this.hidestartDate} onKeyPress={this.hidestartDate} id="startDate" name="startDate"
                                            required
                                            onChange={(event) => {
                                                this.setState({
                                                    startDate: event.target.value
                                                }); this.hidestartDate();
                                            }}
                                            onFocus={(e) => e.target.type = 'date'}
                                            onBlur={(e) => e.target.type = "text"}
                                        />
                                        <span class="floating-label">Intership Start Date</span>
                                        <div class="ty-errmsg ">
                                            {this.state.showstartDate ? <div>Please fill out Internship Start Date field * </div> : null}
                                        </div>
                                    </div>
                                    <div class="form-group col-md-6 ty-font user-input-wrp"> <br />
                                        <input class="form-control inputText" onClick={() => { this.hideendDate(); this.hideInvalidDate() }} onKeyPress={() => { this.hideendDate(); this.hideInvalidDate() }} id="endDate" name="endDate"
                                            required
                                            onChange={(event) => {
                                                this.setState({
                                                    endDate: event.target.value
                                                }); this.hideendDate(); this.hideInvalidDate()
                                            }}
                                            onFocus={(e) => e.target.type = 'date'}
                                            onBlur={(e) => e.target.type = "text"}
                                        />
                                        <span class="floating-label">Intership End Date</span>
                                        <div class="ty-errmsg ">
                                            {this.state.showendDate ? <div >Please fill out Internship End Date field * </div> : null}
                                            {this.state.showinvalidDate ? <div>Internship End Date greater or equal to Internship Start Date * </div> : null}
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
export default withRouter(InputIntershipLetter)