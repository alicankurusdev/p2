import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const EditTutorial = ({
  getTutorials,
  title,
  id,
  description,
  setShow,
  show,
}) => {
  const handleClose = () => setShow(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  // const [updateId, setUpdateId] = useState(id);

  useEffect(() => {
    setNewTitle(newTitle);
    setNewDescription(newDescription);
  }, [newTitle, newDescription]);

  /*





*/

  const updateTutorial = async (updateTutor, id) => {
    const url = "https://65bfcd3025a83926ab95a810.mockapi.io/tasks";

    try {
      await axios.put(`${url}/${id}`, updateTutor);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    let updateTutor = {
      title: newTitle,
      description: newDescription,
    };

    updateTutorial(updateTutor,id);
    handleClose();
    updateTutor = {};
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>NEW TASK</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>TITLE</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                value={newTitle}
                onChange={(e) => {
                  setNewTitle(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>DESCRIPTION</Form.Label>
              <Form.Control
                value={newDescription}
                onChange={(e) => {
                  setNewDescription(e.target.value);
                }}
                /*   value={newDescription}
                 */
                type="text"
              />
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleUpdate}>
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default EditTutorial;
