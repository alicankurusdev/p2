import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

const AddTutorial = ({getTutorials}) => {
const [title, setTitle] = useState("")
const [description, setDescription] = useState("")

const addTutorial = async (newTutor ) => { 

  const url = "https://65bfcd3025a83926ab95a810.mockapi.io/tasks";
 
   try {
    await axios.post(url,newTutor)
  } catch (error) {
    console.log(error)
  }
  getTutorials();
}

const handleSubmit = (e)=>{
  e.preventDefault();
  const newTutor={
    title,
     description
   }
  addTutorial(newTutor);
  setTitle("")
  setDescription("")
  
}

  return (
  
<Container className='mt-4 text-center'>
   <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>TASK</Form.Label>
        <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>DESCRIPTION</Form.Label>
        <Form.Control type="text" placeholder="Description" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
      </Form.Group>
      
      <Button className="d-block mx-auto" variant="danger" type="submit" onClick={handleSubmit}>
        SEND
      </Button>
    </Form>

</Container>
  
    

  )
}

export default AddTutorial