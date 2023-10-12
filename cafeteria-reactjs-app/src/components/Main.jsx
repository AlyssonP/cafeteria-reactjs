import { Container, Row, Col, Card, Button, CardBody } from "react-bootstrap";
import { useState } from "react";
import Food from "./Food";

//Dados
import Foods from "../dataset/foods.js";

const Main = () => {
  let [foods, setFoods] = useState(Foods)

  return (
  <>
    <Container >
      <h3 className="text-center mt-2">Cardápio</h3>

      <div className="d-flex justify-content-end">
        <Button variant="secondary" style={{fontSize:"15px", borderRadius:"20px"}}>+</Button>
      </div>
      
      <Row className="justify-content-md-start mt-3">
        {foods.map((food) => <Food food={food}/> )}
      </Row>
    </Container>
  </>
  )
};

export default Main;