import React, { Component } from 'react'
import Home from '../home';
import '../CommonStyle.css'
import { withRouter } from 'react-router-dom';
import TyHeader from '../Assests/TYHeader.PNG';
import TyFooter from '../Assests/TYFooter.PNG'
import moment from 'moment'
import { NavBar } from '../Navbar/NavBar';
import SimpleNavBar from '../Navbar/SimpleNavBar';

export class CertificateLetter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      employee: [],
      waterMark: false,
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
    if (this.props.empData) {
      return (
        <div>
          <SimpleNavBar buttonShow={true} showWatermark={(data) => this.setState({ waterMark: data })} />
          <div className="card" style={{ marginTop: '100px' }} id="AFourPage">
            <div className="card-body pb-0 mt-5">

              {this.state.employee.withHeader ? <header className="header" style={{ marginLeft: '-115px', marginTop: '-100px' }}>

                <img className="tyHeader" src={TyHeader}></img>

              </header> : null}


              {this.state.employee.withWaterMark ? <div className="waterMark">
                <span style={{
                  color: '#263248', fontSize: '91px',
                  fontFamily: 'sans-serif', position: 'absolute', opacity: '0.3', zIndex: '0'
                }}>TES<span style={{
                  color: '#F8981C', fontSize: '91px',
                  fontFamily: 'sans-serif', fontWeight: "600"
                }}>TY</span>ANTRA</span>
              </div>
                : null}



              <div>
                <p style={{ textAlign: 'justify', paddingLeft: 20 }}><strong>&nbsp;</strong></p>
                <p style={{ textAlign: 'justify', paddingLeft: 20 }}><strong>&nbsp;</strong></p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <p style={{ textAlign: 'justify', paddingLeft: 20 }}><strong>Date:&nbsp; {SysDate.getDate()}<sup>{this.nth(SysDate.getDate())}</sup>&nbsp;{moment(SysDate).format('MMMM YYYY')}</strong></p>
                <p style={{ textAlign: 'justify', paddingLeft: 20 }}><strong>&nbsp;</strong></p>
                <p style={{ textAlign: 'justify', paddingLeft: 20 }}><strong>&nbsp;</strong></p>
                <p style={{ textAlign: 'justify', paddingLeft: 20, margin: 0 }}><strong>To,</strong></p>
                <p style={{ textAlign: 'justify', paddingLeft: 20 }}><strong>&nbsp;</strong></p>
                <p style={{ textAlign: 'justify', paddingLeft: 20, margin: 0 }}><strong>{this.state.employee.employeeName},</strong></p>
                <p style={{ textAlign: 'justify', paddingLeft: 20, margin: 0 }}><strong>{this.state.employee.companyLocation}</strong></p>
                <p style={{ textAlign: 'justify', paddingLeft: 20 }}><strong>&nbsp;</strong></p>
                <p style={{ textAlign: 'justify', paddingLeft: 20, marginBottom: 20 }}><strong>Dear {this.state.employee.employeeName},</strong></p>
                <p style={{ textAlign: 'justify', paddingLeft: 20 }}>This is to confirm that we have collected your<strong> {this.state.employee.checkedSSC} {this.state.employee.checkedPUC} {this.state.employee.checkedDegree} {this.state.employee.certificateType} Certificate</strong> for the background verification at Test Yantra. We would return the document once the verification process is done.</p>
                <p style={{ textAlign: 'justify', paddingLeft: 20 }}>&nbsp;</p>
                <p style={{ textAlign: 'justify', paddingLeft: 20 }}>With best wishes,</p>
                <p style={{ textAlign: 'justify', paddingLeft: 20 }}>Very truly yours,</p>
                <br />
                <br />
                <p style={{ textAlign: 'justify', paddingLeft: 20 }}><strong><br /> Corporate HR</strong></p>
                <p style={{ textAlign: 'justify', paddingLeft: 20 }}>&nbsp;</p>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
              </div>


            </div>
            {this.state.employee.withHeader ? <div className="footer" style={{ marginLeft: '-141px', marginTop: '37px' }}>

              <img className="tyfooter" style={{marginLeft: '48px'}} src={TyFooter}></img>

            </div> : null}

          </div>




        </div>

      )
    } else {
      return (<h1></h1>)
    }
  }
}

export default withRouter(CertificateLetter)
