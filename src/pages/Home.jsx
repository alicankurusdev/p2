import React, { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Header from "../components/Header";
import Button from 'react-bootstrap/Button';

const Home = () => {
  const [tutorial, setTutorial] = useState([]);
  const [formvisual,setFormVisual] = useState(false);

  const getTutorials = async () => {
    const url = "https://65bfcd3025a83926ab95a810.mockapi.io/tasks";
    try {
      let { data } = await axios(url);
      console.log(data)

      setTutorial(data);
    } catch (error) {
      console.log();
    }
  };



  
  useEffect(() => {
    getTutorials();
  }, []);

  return (
      <Container className="w-50">
        <Header/>
        <Button className="d-block mx-auto" variant="danger" type="submit" onClick={()=>{setFormVisual(!formvisual)}}>
        {formvisual ? "SAKLA" : "GOSTER" }
      </Button>
      {
        formvisual &&         <AddTutorial getTutorials={getTutorials} />

      }
        <TutorialList tutorial={tutorial} getTutorials={getTutorials} />
      </Container>
  );
};

export default Home;
