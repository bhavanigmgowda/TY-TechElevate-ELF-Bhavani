import { Button, Modal } from "react-bootstrap";
import React, { useState } from 'react';
import "../AllCss/FormCss.css"
const AddSubTaskModel = () => {

    const [show, setShow] = useState(false);
    const [task, setTask] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div >
            <Button style={{ backgroundColor: "mediumaquamarine", border: "none" }} onClick={handleShow} align="center"> Add Sub Goal </Button>&nbsp;&nbsp;&nbsp;
        <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Add Sub Task
          </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div class="form-group col-md-6 ty-font user-input-wrp"> <br />
                        <input type="text" class="form-control  inputText" id="batchtype" name="batchtype" value={task} onChange={(event) => setTask(event.target.value)}
                            required />
                        <span class="floating-label">Sub Task Name</span>

                    </div>
                    {console.log("task", task)}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Add
            </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AddSubTaskModel;