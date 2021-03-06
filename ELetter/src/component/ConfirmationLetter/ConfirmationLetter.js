import React, { Component } from 'react'
import Home from '../home';
import moment from 'moment';
import '../CommonStyle.css';
import TyHeader from '../Assests/TYHeader.PNG';
import TyFooter from '../Assests/TYFooter.PNG'
import { withRouter } from 'react-router-dom';


export class ConfirmationLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employee: [],
            waterMark: false
        }
    }

    componentDidMount() {
        this.setState({
            employee: this.props.empData,
        })

        let that=this;
        var mediaQueryList = window.matchMedia('print');
    
        mediaQueryList.addListener(function(mql) {
          if (mql.matches) {
              console.log('before print dialog open');
          } else {
              console.log('after print dialog closed');
              that.setState({
                  pix:false
             })
          }
      });
    }

    print=(data)=>{
        debugger;
        console.log("pix value ",this.state.pix)
        if(this.state.employee.withHeader){
          this.setState({
             pix:true
          },()=>   setTimeout(() => {
            window.print()
          },550)
          )
        }else{
          window.print()
        }
       
      }




    nth = (d) => {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    }



    render() {

        let joiningDate = new Date(this.state.employee.joiningDate);
        let toDayDate = new Date();
        let toprobationDate = new Date(this.state.employee.probationEndDate)

        console.log("probation end date =", toprobationDate)

        if (this.props.empData == 0) {
            this.props.history.push("/cards")
        }
        if (this.props.empData) {
            return (
                <div>
                    <Home buttonShow={true} showWatermark={(data) => this.setState({ waterMark: data })} setHeader={(data)=>this.print()} />
                    <div className="card" style={{ marginTop: '100px' }} id="AFourPage">
                        <div className="card-body  pb-0 mt-5">
                            <div>

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
                                </div> : null}


                                <p style={{ textAlign: 'justify', paddingLeft: 20 }}>&nbsp;</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20 }}>&nbsp;</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20 }}>&nbsp;</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20 }}><strong> {toDayDate.getDate()}<sup>{this.nth(toDayDate.getDate())}</sup>&nbsp;{moment(toDayDate).format('MMMM YYYY')}</strong></p>
                                <br />
                                <br />
                                <p style={{ textAlign: 'justify', paddingLeft: 20, margin: 0 }}><strong> {this.state.employee.employeeName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong></p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20, margin: 0 }}>Emp Id:  {this.state.employee.employeeId}</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20, margin: 0 }}> {this.state.employee.designation}</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20, margin: 0 }}>Bangalore</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20 }}>&nbsp;</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20 }}>Subject - Confirmation of Employment</p>
                                <br />
                                <p style={{ textAlign: 'justify', paddingLeft: 20, margin: 0 }}>In terms of your appointment letter, you have undergone the Probation period of <strong>6 months</strong> from the date of joining <strong>{joiningDate.getDate()}<sup>{this.nth(joiningDate.getDate())}</sup>&nbsp;{moment(this.state.employee.joiningDate).format('MMMM YYYY')}</strong>. Consequent to your successful completion of your probation period we are pleased to inform you that your services with the company have been confirmed with effect from <strong>{toprobationDate.getDate()}<sup>{this.nth(toprobationDate.getDate())}</sup>&nbsp;{moment(toprobationDate).add(6, 'months').format('MMMM YYYY')}</strong>. Being a confirmed employee, the organization anticipates further outstanding works from you and we fervently hope that you will keep up the expectation.</p>
                                <br />
                                <p style={{ textAlign: 'justify', paddingLeft: 20, paddingTop: 5 }}>All other terms and conditions of your employment remain unchanged.</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20, paddingTop: 5 }}>Please sign and return the duplicate copy of this letter for our records.</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20, paddingTop: 5, margin: 0 }}>Sincerely Yours,</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }} align="JUSTIFY"><span >For <strong>Test Yantra Software Solutions (India) Pvt Ltd</strong></span></p>
                                <br />
                                <br />
                                <br />
                                <p style={{ textAlign: 'justify', paddingLeft: 20, margin: 0 }}><strong>Authorized Signatory</strong></p>
                                {/* <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20, fontWeight: 'bolder' }}><span ><strong  >(Human Resources)</strong></span></p> */}
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />

                            </div>
                        </div>
                        {this.state.employee.withHeader ? <div className="footer" style={{ marginLeft: '-141px', marginTop: '290px' }}>

                            <img className="tyfooter" style={{marginLeft:'48px'}} src={TyFooter}></img>

                        </div> : null}
                    </div>





                </div>
            )
        } else {
            return (<h1></h1>)
        }
    }
}

export default withRouter(ConfirmationLetter)

