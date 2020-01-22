

import React, { Component } from 'react'
import '../createUser/create.css'
import Axios from 'axios'
import $ from 'jquery'
import Footer from '../navBar/footer'
import NavBarForTask from '../navBar/NavBarForTask'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Architectproject, Leadproject, Employeeproject, Architect, Lead, Employee, SideNavBar } from '../Architect/SideData';
import { Link } from 'react-router-dom';

import { PropagateLoader } from 'react-spinners';
import { Dropdown, ThemeProvider } from 'react-bootstrap';


export class CreateTask extends Component {
    constructor(props) {
        super(props)


        this.state = {
            taskId: '',
            description: '',
            email: '',
            subject: '',
            priority: '',
            assignDate: '',
            assignedTo: '',
            status: 'todo',
            endDate: '',
            userBeans: JSON.parse(window.localStorage.getItem('beans')),
            showSubject: false,
            showDescription: false,
            showAssignTo: false,
            showPriority: false,
            showEnddate: false,
            showDateInvalid: false,
            showEmailInvalid: false,
            loading: false,
            userBean: '',
            projectBean: null,
            isProject: false,
            emailLists: [],
            projectBean: false,
            project: [],
            nullValue: true,
            projectId: ''

        }
    }
    cancel(e) {
        e.preventDefault();
        this.props.history.push('/taskPage')
    }

    textarea = () => {
        this.setState({ showChar: true })
        $("#description").keyup(function () {
            $("#info").text((180 - $(this).val().length) + "/180");
        });
    }

    hideCharacterCount = () => {
        this.setState({ showChar: false })
    }
    hideOnReset = () => {
        this.hideSubject();
        this.hideEmail();
        this.hideDate();
        this.hideDescription();
        this.hidePriority();
        this.hideSubject();
        this.setState({ showEmailInvalid: false });
    }

    getProfile() {
        console.log('inside get profile')
        if (JSON.parse(window.localStorage.getItem('isValid'))) {
            Axios.get('http://localhost:8080/get-profile?email=' + this.state.userBeans).then((response) => {

                if (response.data.message === 'Success') {
                    this.setState({
                        userBean: response.data.userBean[0]
                    }, () => {
                        console.log("==========sfgfds========", this.state.userBean)
                    })
                }
            }).catch((error) => {
                console.log('Error', error);
            })
        }// end of if
    } //End of getProfile


    create(e) {
        debugger
        this.setState({ loading: true })
        e.preventDefault();
        this.setState({
            email: this.state.userBeans,
        }, () => {
            console.log("==========", this.state.userBean)
        })
        console.log(" details" + this.state.taskId)
        console.log(this.state.userBean);
        Axios.post('http://localhost:8080/create-task', this.state,
            {
                params: {
                    email: this.state.assignedTo
                }
            }
        ).then((response) => {
            this.setState({ loading: false })
            console.log(response)

            console.log(response.data.message)
            if (response.data.statusCode === 201) {
                this.NotifyTaskCreationSuccess();
                setTimeout(() => {
                    this.props.history.push('/byme');
                }, 3000)
            } else if (response.data.statusCode === 401) {
                this.NotifyEmailDoesntExists();
            }

        }).catch((error) => {
            this.setState({ loading: false })
            this.NotifyServerOffline();
            console.log(error)
        })
    }
    hideSubject = () => {
        this.setState({
            showSubject: false
        })

    }
    hideDescription = () => {
        this.setState({
            showDescription: false
        })

    }
    hideEmail = () => {
        this.setState({
            showAssignTo: false
        })
    }
    hidePriority = () => {
        this.setState({
            showPriority: false
        })
    }
    hideDate = () => {
        this.setState({
            showEnddate: false
        })
    }
    hideInvalidDate = () => {
        this.setState({ showDateInvalid: false })
    }

    componentDidMount() {
        this.getProfile();
        this.getProjects();
        var that = this;
        $(document).ready(function () {
            $('#submit').click(function (e) {
                var subject = (document.getElementById("subject").value).trim();
                var description = (document.getElementById('description').value).trim();
                var endDate = (document.getElementById("EndDate").value);
                var AssignTo = (document.getElementById("AssignTo").value).trim();
                var selectedDate = new Date(endDate);
                selectedDate.setHours(22);
                var priority = (document.getElementById('Priority').value);
                var now = new Date();

                if (endDate === "") {
                    that.setState({ showEnddate: true })
                }
                if (priority === "Choose Priority") {
                    that.setState({ showPriority: true })
                }
                if (AssignTo === "") {
                    that.setState({ showAssignTo: true })
                }
                if (description === "") {
                    that.setState({ showDescription: true })
                }
                if (subject === "") {
                    that.setState({ showSubject: true })
                }

                if (subject === "" && description === "" && AssignTo === "" && endDate === "") {
                    console.log("here")
                    that.NotifyFieldMandatory();
                }
                if (selectedDate < now) {
                    that.setState({ showDateInvalid: true })

                }
                if (subject !== "" && priority !== "Choose Priority" && description !== "" && AssignTo !== "" && endDate !== "" && (selectedDate >= now) && that.handleEmail() == true) {
                    return true;
                } else {
                    return false;
                }
            });
        });
    }

    handleEmail = () => {
        var that = this;
        var email = document.getElementById('AssignTo').value.trim();
        if (email !== "") {
            let lastAtPos = (document.getElementById("AssignTo").value).lastIndexOf('@');
            let lastDotPos = (document.getElementById("AssignTo").value).lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && (document.getElementById("AssignTo").value).indexOf('@@') == -1 && lastDotPos > 2 && ((document.getElementById("AssignTo").value).length - lastDotPos) > 2)) {
                that.setState({ showEmailInvalid: true })
                return false;
            }
        }
        that.setState({ showEmailInvalid: false })
        return true;
    }
    NotifyFieldMandatory = () => {
        if (!toast.isActive(this.toastId)) {
            this.toastId = toast.info(<center>All Fields Are Mandatory</center>, {
                position: "top-center", autoClose: false
            });
        }
    }
    NotifyServerOffline = () => {
        if (!toast.isActive(this.toastId)) {
            this.toastId = toast.error(<center>Registration Failed Server Did Not Respond</center>, {
                position: "top-center", autoClose: false,
            });
        }
    }
    NotifyEmailDoesntExists = () => {
        if (!toast.isActive(this.toastId)) {
            this.toastId = toast.warning(<center>Registration Failed Email Does Not Exist</center>, {
                position: "top-center", autoClose: false,
            });
        }
    }
    NotifyTaskCreationSuccess = () => {
        if (!toast.isActive(this.toastId)) {
            this.toastId = toast.success(<center>Task Created Successfully</center>, {
                position: "top-center", autoClose: false,
            });
        }
    }
    method(data) {
        console.log("data", data)
        this.setState({
            assignedTo: data
        })

        if (data != '') {
            Axios.get(this.state.isProject ? 'http://localhost:8080/get-emails-while-createtask/?email=' + data + '&projectId=' + this.state.projectBean.projectPkBean.projectId : 'http://localhost:8080/get-emails-while-search/?email=' + data).then((response) => {
                if (response.data.statusCode === 201) {
                    this.setState({
                        emailLists: response.data.emailList
                    })
                } else {
                    console.log("not a valid email")
                }
            }).catch((error) => {
                console.log(error)
            })
        } else {
            this.setState({
                emailLists: []
            })
        }
    }
    getProjects() {
        Axios.get('http://localhost:8080/get-projects-by-email?email=' + this.state.userBeans)
            .then((response) => {
                if (response.data.statusCode === 201) {
                    this.setState({
                        project: response.data.projectBeans,

                    })
                    console.log("===============", response.data.projectBeans)
                } else if (response.data.statusCode === 401) {
                    this.NotifyNoTaskAssigned();
                }
            }).catch((error) => {
                console.log("==========error", error)
                this.NotifyServerOffline();
            })

    }
    callBean(data) {
        console.log("project bean", data)
    }
    homepage(e) {
        e.preventDefault();
        localStorage.removeItem('groupId');
        localStorage.removeItem('projectName');
        this.props.history.push('/homePage')
    }

    render() {
        return (
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <br /><br />
                            {localStorage.getItem('groupId') ? <div className="projectName" style={{ margin: "2%" }}><Link style={{ color: 'black' }} onClick={(e) => { this.homepage(e)}} className="dark">Project</Link>&nbsp;/&nbsp;
                                                            <Link style={{ color: 'black' }} to='/taskPage'>{localStorage.getItem("projectName")}</Link></div> : null}

                            <div id="container" className="col-auto container-fluid pb-5 " style={{ marginTop: "4%", marginRight: "41%" }}>

                                <div id="create" className="card shadow-lg mt-5 " >
                                    <div id="cardHead" className="card-header" >
                                        <legend className="text-center">Task Form</legend>
                                        <div className="w-100" style={{ marginLeft: '50%', marginRight: 'auto' }}>
                                            <PropagateLoader
                                                size={10}
                                                color={'#123abc'}
                                                loading={this.state.loading}
                                            />
                                        </div>
                                        <ToastContainer />
                                    </div>

                                    <div className="card-body">
                                        <form onSubmit={this.create.bind(this)}>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <label className="input-group-text"><i className="fas fa-hashtag" /></label>
                                                </div>
                                                <input autoComplete="off" className="form-control" onKeyPress={this.hideSubject} required="required" type="text" name="subject" title="Enter Subject" id="subject" placeholder="Enter Subject" onChange={(event) => {
                                                    this.setState({
                                                        subject: event.target.value
                                                    })
                                                }} />
                                            </div>
                                            {this.state.showSubject ? <div id="errordiv" className="container-fluid">Please set subject**</div> : null}
                                            <div className="input-group mb-3">
                                                <textarea onBlur={this.hideCharacterCount} onKeyPress={this.hideDescription} type="text" className="form-control" id="description" name="description" title="Enter Description" maxLength={180} placeholder="Enter Description (character limit: 180)" rows={3} onChange={(event) => {
                                                    this.setState({
                                                        description: event.target.value
                                                    }); this.textarea()
                                                }} />
                                            </div>

                                            {this.state.showChar ? <div id="errordiv" className="container-fluid text-right font-weight-normal"><span id="info"></span> </div> : null}
                                            {this.state.showDescription ? <div id="errordiv" className="container-fluid">Please set Description**</div> : null}
                                            <div className="input-group mb-3">
                                                <ThemeProvider prefixes={{ btn: 'my-btn' }}>


                                                    <Dropdown style={{ width: "310px" }}>
                                                        <Dropdown.Toggle value={this.state.projectBean} placeholder="Select project" id="Priority" className="form-control" required name="Priority" title="Select Priority">
                                                            {this.state.projectBean ? this.state.projectBean.projectName : this.state.nullValue ? "Select Project" : "Not For Project"}
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu style={{ width: "310px" }}>
                                                            {this.state.project.map(item => {
                                                                return (
                                                                    <Dropdown.Item onClick={() => { this.setState({ projectBean: item, isProject: true }) }}>{item.projectName}</Dropdown.Item>
                                                                )
                                                            })}
                                                            <Dropdown.Item onClick={() => { this.setState({ projectBean: null, nullValue: false, isProject: false }) }}>Not For Project</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>  </ThemeProvider>{' '}
                                            </div>
                                            <Dropdown style={{ width: "310px" }}>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <label className="input-group-text"><i className="fas fa-at" /></label>
                                                    </div>
                                                    <input autoComplete="off" className="form-control" onKeyPress={this.hideEmail} type="email" value={this.state.assignedTo} name="AssignTo" id="AssignTo" title="Enter Email" placeholder="Enter email task to be assigned" onChange={(event) => {
                                                        this.method(event.target.value)
                                                    }} />
                                                </div>
                                                <Dropdown.Menu style={{ width: "310px" }}>
                                                    {this.state.emailLists.map(item => {
                                                        return (
                                                            <Dropdown.Item onClick={() => this.setState({ assignedTo: item })}>{item}</Dropdown.Item>
                                                        )
                                                    })}
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            {this.state.emailLists.length > 0 ? this.state.emailLists.map((item) => { return <div onClick={() => this.setState({ assignedTo: item })} style={{ cursor: 'pointer' }}>{item}</div> }) : null}
                                            {this.state.showEmailInvalid ? <div id="errordiv" className="container-fluid">Please enter a valid email address</div> : null}
                                            {this.state.showAssignTo ? <div id="errordiv" className="container-fluid">Please set Email**</div> : null}
                                            <div className="input-group mb-3">
                                                <select id="Priority" className="form-control" onClick={this.hidePriority} required name="Priority" title="Select Priority" onChange={(event) => {
                                                    this.setState({
                                                        priority: event.target.value
                                                    })
                                                }}>
                                                    <option selected disabled hidden>Choose Priority</option>
                                                    <option value="low">Low</option>
                                                    <option value="medium">Medium</option>
                                                    <option value="high">High</option>
                                                    <option value="critical">Critical</option>
                                                </select>
                                            </div>
                                            {this.state.showPriority ? <div id="errordiv" className="container-fluid">Please set priority**</div> : null}
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <label className="input-group-text"><i className="far fa-calendar-alt" /></label>
                                                </div>
                                                <input className="form-control" onClick={() => { this.hideDate(); this.hideInvalidDate() }} required="required" type="date" name="EndDate" title="Enter Deadline" id="EndDate" placeholder="Enter Deadline" onChange={(event) => {
                                                    this.setState({
                                                        endDate: event.target.value
                                                    })
                                                }} />
                                            </div>
                                            {this.state.showEnddate ? <div id="errordiv" className="container-fluid">Please select Date**</div> : null}
                                            {this.state.showDateInvalid ? <div id="errordiv" className="container-fluid">Assign Date must be greater than Current date**</div> : null}
                                            <div className="input-group container-fluid">
                                                <button type="reset" id="reset" onClick={this.hideOnReset} title="reset" className="form-control-plaintext btn btn-outline-primary btn-sm">Reset</button>
                                                <button type="submit" id="submit" title="submit" className="form-control-plaintext btn btn-outline-success btn-sm">Submit</button>
                                                <button type="cancel" id="cancel" title="cancel" className="form-control-plaintext btn btn-outline-info btn-sm" onClick={this.cancel.bind(this)} >Cancel</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        )
    }
}

export default CreateTask
