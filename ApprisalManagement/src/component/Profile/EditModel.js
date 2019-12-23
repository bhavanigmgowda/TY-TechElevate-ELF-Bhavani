import '../AllCss/FormCss.css'
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const EditModel = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        
          <h4 class="far fa-edit" st onClick={handleShow}></h4>
    
          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <form action="" method="post" >
        <div class="form-row mt-3">
          <div class="form-group col-md-6 ty-font user-input-wrp"> <br/>
            <input type="text" class="form-control  inputText" id="client" name="client" 
              required/>
            <span class="floating-label">Client Name</span>
            <div  class="ty-errmsg ">
              <div > Client is required * </div>
            </div>
          </div>
          <div class="col-md-6 ty-font left user-input-wrp" id="billdesc"><br />
            <select class="custom-select inputText" id="test" name="technology"   required>
              <option selected disabled value="">Choose technology</option>
              <option class="non" value="option1">Java full stack</option>
              <option class="non" value="option2">Mean stack</option>
              <option class="non" value="option1">Data science</option>
              <option class="editable" value="other">Other</option>
            </select>
            <input class="ty-editOption" style={{display:"none"}} placeholder="technology" name="technology" />
            <div  class="ty-errmsg ">
              <div > Technology is required * </div>
            </div>
          </div>
        </div>
        <div class="form-row mt-3">

          <div class="form-group col-md-6 ty-font user-input-wrp"> <br />
            <select class="form-control  inputText" id="batchtype" name="batchtype" 
              required>
              <span class="floating-label">Client Name</span>

              <option value="" selected disabled hidden>Batchtype</option>
              <option>Paid</option>
              <option value="other">Free</option>
            </select>
            <div  class="ty-errmsg ">
              <div > Batchtype is required * </div>
            </div>
          </div>
          <div class="form-group col-md-6 ty-font left user-input-wrp"><br />
            <input type="text" class="form-control   inputText" id="province" name="fees"
              required/>
            <span class="floating-label">Fees</span>
            <div  class="ty-errmsg ">
              <div > fees info is required * </div>
            </div>

          </div>
        </div>
        

          
      <div class="float-right ty-create-button">
        <button type="submit" class="btn btn-outline-primary ty-font">Create</button></div>
      <div class="float-right ty-reset-button">
        <button type="submit"  class="btn btn-outline-secondary ty-font">Reset</button></div>
      </form>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
};

export default EditModel;



  
  
   

  
