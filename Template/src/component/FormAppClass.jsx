import React from 'react';
import NavBarApp from './NavBarApp';
import FooterApp from './FooterApp';


class FormAppClass extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }


  };

  handleChange = (e) => {
    let fields = this.state.fields;
    this.hideClient(e)
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }

  submituserRegistrationForm = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
     
      alert("Form submitted");
    }

  }
  hideClient = (e) => {
    let errors = this.state.errors
    errors.client = false;
    const name = e.target.name;

    errors[name] = false;
    this.setState({
      errors: errors
    })
  }

  validateForm = () => {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["client"]) {
      formIsValid = false;
      errors["client"] = "Task Name is required *";
    }

    if (!fields["technology"]) {
      formIsValid = false;
      errors["technology"] = "Technology is required *";
    }


    if (!fields["batchtype"]) {
      formIsValid = false;
      errors["batchtype"] = "Batchtype is required *";
    }


    if (!fields["fees"]) {
      formIsValid = false;
      errors["fees"] = "fees info is required *";
    }

    if (!fields["cost"]) {
      formIsValid = false;
      errors["cost"] = " info is required * ";
    }

    if (!fields["location"]) {
      formIsValid = false;
      errors["location"] = " Location is required *";
    }

    if (!fields["startdate"]) {
      formIsValid = false;
      errors["startdate"] = "startdate is required *";
    }

    if (!fields["enddate"]) {
      formIsValid = false;
      errors["enddate"] = " enddate is required * ";
    }

    if (fields.enddate.valueOf() < fields.startdate.valueOf()) {
      formIsValid = false;
        errors["enddate"] = "start date should be less than end date* ";
      } 

    if (!fields["traineetype"]) {
      formIsValid = false;
      errors["traineetype"] = "traineetype is required *";
    }



    if (!fields["invoice"]) {
      formIsValid = false;
      errors["invoice"] = " invoice is required *";
    }






    // if (typeof fields["client"] !== "undefined") {
    //   formIsValid = false;
    //   errors["client"] = "client Name is required *";

    // }

    // if (!fields["emailid"]) {
    //   formIsValid = false;
    //   errors["emailid"] = "*Please enter your email-ID.";
    // }

    // if (typeof fields["emailid"] !== "undefined") {
    //   //regular expression for email validation
    //   var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    //   if (!pattern.test(fields["emailid"])) {
    //     formIsValid = false;
    //     errors["emailid"] = "*Please enter valid email-ID.";
    //   }
    // }

    // if (!fields["mobileno"]) {
    //   formIsValid = false;
    //   errors["mobileno"] = "*Please enter your mobile no.";
    // }

    // if (typeof fields["mobileno"] !== "undefined") {
    //   if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
    //     formIsValid = false;
    //     errors["mobileno"] = "*Please enter valid mobile no.";
    //   }
    // }

    // if (!fields["password"]) {
    //   formIsValid = false;
    //   errors["password"] = "*Please enter your password.";
    // }

    // if (typeof fields["password"] !== "undefined") {
    //   if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
    //     formIsValid = false;
    //     errors["password"] = "*Please enter secure and strong password.";
    //   }
    //}

    this.setState({
      errors: errors
    });
    return formIsValid;


  }



  render() {
    return (
      <div>
        <NavBarApp />
        <div>
          <label for="title" class="ty-font heading">Create Task</label>

          <div class="card col-lg-4 col-md-6 col-sm-6  col-6  offset-4 mt-5">
            <div class="card-body col-lg-10 col-md-10">
              <form action="" method="post" onSubmit={this.submituserRegistrationForm} >
                <div class="form-row mt-3">
                  <div class="form-group col-md-6 ty-font user-input-wrp"> <br />
                    <input type="text" class="form-control  inputText" onChange={this.handleChange} id="client" name="client"
                      required />
                    <span class="floating-label">Client Tital</span>
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
                      type='text'
                      onFocus={(e) => e.target.type = 'date'}
                      onBlur={(e) => e.target.type = "text"}

                      placeholder="Start Date"
                    />
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
                      placeholder="End Date"
                    />

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
                      required onfocus="this.type='date' " placeholder="Invoice" onblur="this.type='text'" />
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

    );
  }


}


export default FormAppClass;