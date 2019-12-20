import React, {  useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import "./FormCss.css"
import NavBarApp from './NavBarApp';


export default function FormApp() {
  const [fields, setfields] = useState({})
  const [error, seterror] = useState({})
  const handleChange=(e)=> {
    let field = fields;
    field[e.target.name] = e.target.value;
    setfields(field)
  }

  const submituserRegistrationForm=(e)=> {
    e.preventDefault();
    if (validateForm()) {
        let field = {};
        field["username"] = "";
        field["emailid"] = "";
        field["mobileno"] = "";
        field["password"] = "";
        setfields({fields:field});
        alert("Form submitted");
    }

  }

  const validateForm=()=> {

    let field = fields;
    let errors = {};
    let formIsValid = true;

    if (!field["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    if (typeof field["username"] !== "undefined") {
      if (!field["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!field["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof field["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(field["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }

    if (!field["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
    }

    if (typeof field["mobileno"] !== "undefined") {
      if (!field["mobileno"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter valid mobile no.";
      }
    }

    if (!field["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof field["password"] !== "undefined") {
      if (!field["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }

    seterror(error= errors )

    return formIsValid;
  }


  return (
    <div>
       <div>
        <NavBarApp />
        <label for="title" class="ty-font heading"  >Create Task</label>
        <div class="card col-lg-4 col-md-4 offset-4 mt-5">
          <div class="card-body col-lg-10 col-md-10">
            <form action="" method="post"  onSubmit= {submituserRegistrationForm} >
              <div class="form-row mt-3">
                <div class="form-group col-md-6 ty-font user-input-wrp"> <br />
                  <input type="text" class="form-control  inputText" onChange={handleChange} id="client" name="client"
                    required />
                  <span class="floating-label">Task Tital</span>
                  <div class="ty-errmsg "> {fields.name}
                    <div> Client is required * </div>
                  </div>
                  {console.log("name==",fields.name)}
                </div>
                <div class="col-md-6 ty-font left user-input-wrp" id="billdesc"><br />
                  <select class="custom-select inputText" id="test" name="technology" required>
                    <option selected disabled value="">Choose Priority</option>
                    <option class="non" value="option1">Critical</option>
                    <option class="non" value="option2">High</option>
                    <option class="non" value="option1">Medium</option>
                    <option class="editable" value="other">Low</option>
                  </select>
                  <input class="ty-editOption" style={{ display: "none" }} onChange={handleChange} placeholder="technology" name="technology" />
                  <div class="ty-errmsg ">
                    <div > Technology is required * </div>
                  </div>
                </div>
              </div>
              <div class="form-row mt-3">

                <div class="form-group col-md-6 ty-font user-input-wrp"> <br />
                  <select class="form-control  inputText" id="batchtype" name="batchtype"
                    required onChange={handleChange}>
                    <span class="floating-label">Client Name</span>

                    <option value="" selected disabled hidden>Batchtype</option>
                    <option>Paid</option>
                    <option value="other">Free</option>
                  </select>
                  <div class="ty-errmsg ">
                    <div > Batchtype is required * </div>
                  </div>
                </div>
                <div class="form-group col-md-6 ty-font left user-input-wrp"><br />
                  <input type="text" class="form-control   inputText" id="province" name="fees"
                    required onChange={handleChange}/>
                  <span class="floating-label">Fees</span>
                  <div class="ty-errmsg ">
                    <div > fees info is required * </div>
                  </div>

                </div>
              </div>
              <div class="form-row mt-3">

                <div class="form-group col-md-6 ty-font user-input-wrp"><br />
                  <input type="text" class="form-control  inputText" onChange={handleChange} id="input" name="costpercandi" required />
                  <span class="floating-label">Cost per candidate</span>
                  <div class="ty-errmsg ">
                    <div > info is required * </div>
                  </div>
                </div>
                <div class="form-group col-md-6 ty-font left user-input-wrp"><br />
                  <input type="text" class="form-control  inputText" onChange={handleChange} id="input" name="location"
                    required />
                  <span class="floating-label">Location</span>
                  <div class="ty-errmsg ">
                    <div > Location is required * </div>
                  </div>
                </div>
              </div>
              <div class="form-row mt-3">
                <div class="form-group col-md-6 ty-font user-input-wrp"><br />
                <input class="form-control inputText" onChange={handleChange} id="input" name="enddate"
                    required
                    type='text'
                    onFocus={(e) => e.target.type = 'date'}
                    onBlur={(e)=>e.target.type="text"}

                    placeholder="Start Date"
                  />
                  <div class="ty-errmsg ">
                    <div> startdate is required * </div>
                  </div>
                </div>

                <div class="form-group col-md-6 ty-font left user-input-wrp"><br />

                  <input class="form-control inputText" onChange={handleChange} id="input" name="enddate"
                    required
                    type='text'
                    onFocus={(e) => e.target.type = 'date'}
                    onBlur={(e)=>e.target.type="text"}
                    placeholder="End Date"
                  />

                  <div class="ty-errmsg ">
                    <div > enddate is required * </div>
                  </div>
                </div>



              
              </div>

              <div class="form-row mt-3">

                <div class="form-group col-md-6 ty-font user-input-wrp"><br />
                  <select class="form-control  inputText" id="input" name="traineetype" onChange={handleChange}
                    required>
                    <option value="" selected disabled hidden>Select Trainee type</option>
                    <option>Freshers </option>
                    <option>Lateral</option>
                    <option>Mixed</option>
                  </select>
                  <div class="ty-errmsg ">
                    <div > traineetype is required * </div>
                  </div>
                </div>
                <div class="form-group col-md-6 ty-font left user-input-wrp"><br />
                  <input type="text" class="form-control inputText " id="input" name="invoice" onChange={handleChange}
                    required onfocus="this.type='date' " placeholder="Invoice" onblur="this.type='text'" />
                  <div class="ty-errmsg ">
                    <div > invoice is required * </div>
                  </div>
                </div>
              </div>
              <div class="form-row mt-3">
                <div class="form-group col-md-6 ty-font user-input-wrp"><br />
                  <div class="form-check float-left">
                    <input class="form-check-input" onChange={handleChange} type="radio" name="exampleRadios" id="exampleRadios1" value="option1"
                      checked />
                    <label class="form-check-label" for="exampleRadios1">
                      HTD
              </label>
                  </div>
                  <div class="form-check float-left">
                    <input class="form-check-input" onChange={handleChange} type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                    <label class="form-check-label" for="exampleRadios2">
                      ELF
              </label>
                  </div>
                </div>
                <div class="form-group col-md-6 ty-font left user-input-wrp"><br />
                  <div class="form-check ">
                    <input class="form-check-input" onChange={handleChange} type="checkbox" value="" id="defaultCheck1" />
                    <label class="form-check-label" for="defaultCheck1">
                      Online Training
              </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" onChange={handleChange} type="checkbox" value="" id="defaultCheck1" />
                    <label class="form-check-label" for="defaultCheck1">
                      Offline Training
              </label>
                  </div>
                </div>
              </div>
              <div class="float-right ty-create-button">
                <button type="submit" class="btn btn-outline-primary ty-font">Create</button></div>
              <div class="float-right ty-reset-button">
                <button type="submit" class="btn btn-outline-secondary ty-font">Reset</button></div>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
  }