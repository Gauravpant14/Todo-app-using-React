import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Todo = ({ text }) => {
  // const ModalExample = (props) => {
  //     const {
  //       buttonLabel,
  //       className
  //     } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="complete-btn">
        {" "}
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn">
        {" "}
        <i className="fas fa-trash"></i>
      </button>
      <button className="modal-btn" onClick={toggle}>
        <i class="fas fa-address-card"></i>
      </button>

      <Modal isOpen={modal} toggle={toggle} className="h">
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>{text}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Todo;
