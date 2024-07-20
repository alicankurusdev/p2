import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import axios from "axios";
import EditTutorial from "./EditTutorial";

const TutorialList = ({tutorial,getTutorials}) => {
  const [show, setShow] = useState(false);
  const [editItem, setEditItem] = useState();
  const handleShow = () => setShow(true);

const deleteTutorial= async (id)=>{
  const url = "https://65bfcd3025a83926ab95a810.mockapi.io/tasks";
  try {
  await axios.delete(`${url}/${id}`)
} catch (error) {
  console.log(error)
}
getTutorials()


}

const handleEdit=(item)=>{

  handleShow()
  setEditItem(item)
}


  return (
    <Container className="mt-4 text-center">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#ID</th>
            <th>TITLE</th>
            <th>DESCRIPTION</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {tutorial?.map((item,index)=>{
            const { id, title, description } = item;

            return(
          <tr key={index}>
            <td>{index+1}</td>
            <td>{title}</td>
            <td>{description}</td>
            <td className="d-flex justify-content-evenly align-items-center">
              <FaDeleteLeft
                size={24}
                type="button"
                className="me-2 text-warning"
                onClick={()=>{
                  deleteTutorial(id)
                }}
              />
              <FaBookmark size={24} type="button"
               className="text-danger "
               onClick={()=>handleEdit(item)} />
            </td>
            

          </tr>
            )
          })

          }
         
        </tbody>
      </Table>
      {
              show && <EditTutorial
               getTutorials={getTutorials} 
                setShow={setShow} show={show} {...editItem} />
            }
    </Container>
  );
};

export default TutorialList;
