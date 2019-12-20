import React, { Component } from 'react'
import * as Axios from 'axios';
import { emptyTypeAnnotation } from '@babel/types';
export default class PeopleCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            peoples:[],
            searchInput:'',
            searchData:true,
            mail: JSON.parse(window.localStorage.getItem('beans')),
           
        }
    }



    componentDidMount() {
            Axios.get('http://localhost:8080/search-members-for-project?email='+JSON.parse(window.localStorage.getItem('beans'))
            ).then((response) => {

                if (response.data.message === "Success" ) {
                    console.log("response people", response);
                    this.setState({
                        peoples: response.data.userBeans
                    })

                }
            }).catch((error) => {
            })
        
    }

    searchButton=(e)=>{
       /*  e.preventDefault()
   
            console.log(this.state.searchData)
            Axios.get('http://localhost:8080/get-User?name='+this.state.searchInput
            ).then((response) => {
                if (response.data.message === "Success" && response.data.userBean.length!=0) {
                     console.log(response.data.message+" =="+response.data.userBean)
                    console.log("response people", response);
                    this.setState({
                        peoples: response.data.userBean,
                        searchData:true
                    })
                }
                else{
                    this.setState({
                        searchData:false
                    })

                }
            }).catch((error) => {
            }) */
        } 
        sendMyProfile(people){
            this.props.sendToProfile(people);
}


    render() {
        return (
            <div>

<div className="row justify-content-center">
                 <div className="col-12 col-md-10 col-lg-8">
                     <form className="card card-sm" style={{border:"none"}}>
                         <div className="card-body row no-gutters align-items-center">

                             <div className="col">
                                 <input className="form-control form-control-lg form-control-borderless"
                                      type="search" placeholder="Search for people and teams"
                                       onChange={(event) => {
                                        this.setState({
                                            searchInput: event.target.value
                                        })
                                   }}
                                   ></input>
                                    </div>

                                 <div className="col-auto">
                                     <button className="btn btn-lg btn-success" onClick={(e)=>this.searchButton(e)} type="submit">Search</button>
                                 </div>

                             </div>
                            </form>
                        </div>
                          
                          
                 </div>
                <div >
                    <h4>You Work With</h4>
                    {this.state.searchData?
                    <div className="row">
                        {
                            this.state.peoples.filter(item=>item.email!==this.state.mail).map((people) => {
                                return (
                                    <div className="card col-sm-2" onClick={()=>this.sendMyProfile(people)} style={{ width: "176px", height: "177px", marginBottom: "25px", margin: "20px" }}>
                                        <div class="card-body" style={{cursor:"pointer"}}>
                                            <img style={{ height: "80px", marginLeft: "21px", marginRight: "auto" }} src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png" alt="Smiley face" />
                                            <div style={{ textAlign: "center" }} class="card-text">{people.employeeName}</div>
                                            <div style={{ textAlign: "center" }}>{people.email}</div>
                                        </div>

                                    </div>
                                )
                            })

                        }
                    </div>
                    :<h1>no data found</h1>}
                </div>
            </div>
        )
    }
}
