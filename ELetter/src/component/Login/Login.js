import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";

import '../Login/Login.css'
import SimpleNavBar from '../Navbar/SimpleNavBar';
import data from '../data.json'
import home, { Home } from '../home';



export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            json:data
        }
        
    }
    homepage = (event) => {
        event.preventDefault();

        console.log(this.state.json);
        console.log(this.state.json.users[0].name)
        console.log(this.state.json.users[0].password)
        console.log(data.users.length);
        let bol=false;
        for (let index = 0; index < data.users.length; index++) {
            debugger
            
            if(this.state.email==this.state.json.users[index].name && this.state.password==this.state.json.users[index].password ){
                bol=true;
                console.log("data========", this.state)
               // this.props.clicked(this.state)
               localStorage.setItem('email',this.state.json.users[index].name)
                this.props.history.push('/cards')
                break;
                }
        }
        if(bol==false){
        alert("invalid cridentials");
        }
    }

    render() {
        return (
            <div>
                <SimpleNavBar/>
                <div>
                    <label for="title" class="ty-font heading col-lg-4 col-md-12 col-sm-12  col-12  offset-4 mt-5" style={{ left: "0px" }}>Login</label>

                    <div class="card container mt-5 mt-5" style={{width: "600px"}}>                        <div class="card-body col-lg-10 col-md-10">
                            <form action="" method="post" onSubmit={this.pass} >
                                <div class="form-row mt-3">
                                    <div class="form-group col-md-12 ty-font user-input-wrp"> <br />
                                        <input type="text" id="email" class="form-control  inputText"  onChange={(event) => {
                                            this.setState({
                                                email: event.target.value
                                            })
                                        }} required />
                                        <span class="floating-label">Email</span>

                                        
                                    </div>
                                    <div class="form-group col-md-12 ty-font user-input-wrp"> <br />
                                        <input type="password" id="password" class="form-control  inputText" onChange={(event) => {
                                            this.setState({
                                                password: event.target.value
                                            })
                                        }} required />
                                        <span class="floating-label">Password</span>
                                       
                                    </div>
                                </div>

                                <div class="float-right ty-create-button">
                                    <button type="submit" class="btn btn-outline-primary ty-font" >Login</button></div>
                              </form>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Login