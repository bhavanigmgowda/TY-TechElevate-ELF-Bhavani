import React, { Component } from 'react'
import Home from '../home';
import '../CommonStyle.css'
import { withRouter } from 'react-router-dom';
import TyHeader from '../Assests/TYHeader.PNG';
import TyFooter from '../Assests/TYFooter.PNG';
import moment from 'moment'

export class InternshipLetter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employee: [],
            waterMark:false,
        }
    }

    componentDidMount() {

        this.setState({
            employee: this.props.empData,
        })
    }

    nth = (d) => {
        if (d > 3 && d < 21)
            return 'th';
        switch (d % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    }

    render() {

        let SysDate = new Date();
        console.log("System Date", SysDate)
        if (this.props.empData == 0) {
            this.props.history.push("/cards")
        }
        let toJoiningDate = new Date(this.state.employee.startDate);
        let toReleiving = new Date(this.state.employee.endDate)

        console.log("wawda")

        if (this.props.empData == 0) {
            this.props.history.push("/cards")
        }
        if (this.props.empData) {
            return (
                <div>
                    <Home buttonShow={true} showWatermark={(data)=>this.setState({waterMark:data})} />
                    <div className="card" id="AFourPage">
                        <div className="card-body">

                        {this.state.employee.withHeader?  <header className="header" style={{marginLeft: '-115px',marginTop: '-115px'}}>
               
               <img  style={{width: '1160px',
   height: '95px'}} src={TyHeader}></img>

             </header>:null}

                    {this.state.employee.withWaterMark? <div  className="waterMark">
                <span style={{color:'#263248',fontSize: '91px',
    fontFamily: 'sans-serif',position: 'absolute',opacity: '0.3',zIndex:'0'}}>TES<span style={{color: '#F8981C',fontSize: '91px',
    fontFamily: 'sans-serif',fontWeight: "600"}}>TY</span>ANTRA</span>
                </div>
:null}
                            <div>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <p style={{ textAlign: 'left', paddingLeft: 10, paddingRight: 10, margin: 0 }}><strong>Date:</strong><span style={{ fontWeight: 400 }}>&nbsp; {SysDate.getDate()}<sup>{this.nth(SysDate.getDate())}</sup>&nbsp;{moment(SysDate).format('MMMM YYYY')}</span></p>
                                <p style={{ textAlign: 'left', paddingLeft: 10, paddingRight: 10, margin: 0 }}><strong>Place:</strong><span style={{ fontWeight: 400 }}>{this.state.employee.companyLocation}</span></p>
                                <br />
                                <br />
                                <br />
                                <br />
                                <p style={{ textAlign: 'center', paddingLeft: 10, paddingRight: 10 }}><strong><u>INTERNSHIP CERTIFICATE</u></strong></p>
                                <br />
                                <br />
                                <p style={{ textAlign: 'justify', paddingLeft: 10, paddingRight: 10 }}><span style={{ fontWeight: 400 }}>This is to certify that </span><strong>{this.state.employee.salute} {this.state.employee.internName},</strong><span style={{ fontWeight: 400 }}> was engaged in our organization as an Internship Trainee for necessary training, during the period from </span><strong> {toJoiningDate.getDate()}<sup>{this.nth(toJoiningDate.getDate())}</sup>&nbsp;{moment(toJoiningDate).format('MMMM YYYY')} </strong><span style={{ fontWeight: 400 }}> to </span><strong> {toJoiningDate.getDate()}<sup>{this.nth(toJoiningDate.getDate())}</sup>&nbsp;{moment(toJoiningDate).format('MMMM YYYY')}</strong><span style={{ fontWeight: 400 }}> in our development unit </span><strong>Test Yantra Software Solutions India Pvt Ltd</strong><span style={{ fontWeight: 400 }}>. This candidate has successfully completed internship training during the above period.</span></p>
                                <p style={{ textAlign: 'justify', paddingLeft: 10, paddingRight: 10 }}>&nbsp;</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 10, paddingRight: 10 }}><strong>Test Yantra Intern ID: {this.state.employee.internId}</strong></p>
                                <br />
                                <br />
                                <p style={{ textAlign: 'justify', paddingLeft: 10, paddingRight: 10 }}><span style={{ fontWeight: 400 }}>During the duration of this internship program, we found this candidate is sincere, hardworking and performance oriented.</span></p>
                                <p style={{ textAlign: 'justify', paddingLeft: 10, paddingRight: 10 }}><span style={{ fontWeight: 400 }}><br /></span><span style={{ fontWeight: 400 }}>We wish </span><strong>{this.state.employee.employeeName}</strong> <span style={{ fontWeight: 400 }}>success for all </span><span style={{ fontWeight: 400 }}>his </span><span style={{ fontWeight: 400 }}>future endeavours.</span></p>
                                <p style={{ textAlign: 'justify', paddingLeft: 10, paddingRight: 10 }}><br /><br /></p>
                                <p style={{ textAlign: 'justify', paddingLeft: 10, paddingRight: 10 }}><span style={{ fontWeight: 400 }}>For Test Yantra Software Solutions (India) Pvt Ltd</span></p>
                                <br />
                                <br />
                                <br />
                                <p style={{ textAlign: 'justify', paddingLeft: 10, paddingRight: 10, margin: 0, fontWeight: 'bolder' }}>Authorized Signatory</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 10, paddingRight: 10, fontWeight: 'bolder' }}>(Human Resources)</p>
                            </div>
                        </div>
                    </div>
                    {this.state.employee.withHeader?<footer className="footer" style={{marginLeft: '-141px',marginTop: '-115px'}}>
               
               <img style={{width: '1160px',
   height: '95px'}} src={TyFooter}></img>

             </footer>:null}
                </div>
            )
        } else {
            return (<h1></h1>)
        }
    }
}

export default withRouter(InternshipLetter)
